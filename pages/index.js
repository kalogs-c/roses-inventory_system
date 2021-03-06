import { useRouter } from "next/router";
import { useState } from "react";
import nookies from "nookies";

//Components
import Main from "./../src/components/Main";
import { IncorrectForm } from "./../src/components/IncorrectForm";
import LoadingScreen from "../src/components/LoadingScreen";

export default function Home() {
  const router = useRouter();
  const [loginResponse, setLoginResponse] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading === false ? (
        <Main>
          <img
            className="logo"
            src="https://lh6.googleusercontent.com/h8xMXllHoqSiwfCxNPFVWnnw8B7_e03-VsbpVs8hxSy4vTba9tROLWc2wPN0I7eElsd9yg7kxrf4o26CHM63=w1366-h656-rw"
            alt="Roses logo"
          />
          <div className="container">
            <h1>Login</h1>

            <div className="form-div">
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setLoading(true);
                  const dataForm = new FormData(event.target);
                  const userData = {
                    login: dataForm.get("login"),
                    password: dataForm.get("password"),
                  };

                  fetch("api/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(userData),
                  }).then(async (response) => {
                    if ((await response.status) === 200) {
                      const res = await response.json();
                      const token = res.TOKEN
                      nookies.set(null, 'USER_TOKEN', token, {
                        'path': '/',
                        'maxAge': 84600
                      })
                      router.push("/dashboard");
                      return;
                    }
                    setLoading(false);
                    setLoginResponse(false);
                  });
                }}
              >
                <input
                  type="text"
                  autoComplete="off"
                  placeholder="Usuario"
                  name="login"
                />
                <input
                  type="password"
                  autoComplete="off"
                  placeholder="Senha"
                  name="password"
                />
                <button>Entrar</button>
              </form>
              {loginResponse === false ? (
                <IncorrectForm>Ops! Login ou senha incorretos.</IncorrectForm>
              ) : (
                ""
              )}
            </div>
          </div>
          <img className="wave" src="./../static/wave.svg" title="" />
        </Main>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}