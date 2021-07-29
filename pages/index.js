import { useRouter } from "next/router";

//Components
import Main from "./../src/components/Main";

export default function Home() {
  const router = useRouter();
  return (
    <Main>
      <img
        className="logo"
        src="https://i.ibb.co/GkDhYF0/logo-nobg.png"
        alt="Balur logo"
      />
      <div className="container">
        <h1>Login</h1>

        <div className="form-div">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const dataForm = new FormData(event.target)
              const userData = {
                login: dataForm.get('login'),
                password: dataForm.get('password')
              }

              fetch('api/user').then(async (response) => {
                
                if (response.status === 200) {
                  router.push('/dashboard')
                }
              })
              // router.push("/dashboard");
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
        </div>
      </div>
      <img className="wave" src="https://svgshare.com/i/ZHC.svg" title="" />
    </Main>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
