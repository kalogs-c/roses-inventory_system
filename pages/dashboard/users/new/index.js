import { useRouter } from "next/router";
import { useState } from "react";

import nookies from "nookies";
import jwt from "jsonwebtoken";

// Components
import { Sidebar } from "./../../../../src/components/dashboard/Sidebar";
import { DashboardHeader } from "./../../../../src/components/dashboard/DashboardHeader";
import DashboardContentBox from "./../../../../src/components/dashboard/DashboardContentBox";
import AddItemDataField from "./../../../../src/components/dashboard/AddItemDataField";
import { Header, Button, Form, Message } from "./styles";
import LoadingScreen from "./../../../../src/components/LoadingScreen";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add();

export default function AddItem(props) {
  const [createdUser, setCreatedUser] = useState(false);
  const [errorCreate, setErrorCreate] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <DashboardContentBox style={{ maxHeight: "100vh", overflow: "hidden" }}>
      <Sidebar />

      <div className="main-content">
        <DashboardHeader userName={props.userName} />
        <main>
          {loading === true ? (
            <LoadingScreen />
          ) : (
            <>
              <Header>
                <button
                  style={{
                    fontSize: "1.5rem",
                    padding: "0 15px",
                    cursor: "pointer",
                    border: "none",
                    borderRight: "1px solid #f0f0f0",
                    background: "none",
                  }}
                  onClick={() => {
                    router.back();
                  }}
                >
                  <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 15px",
                    width: "100%",
                  }}
                >
                  <h2>Adicionar item</h2>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <span>Novo registro</span>
                    <Button htmlFor="submitButton">Registrar</Button>
                  </div>
                </div>
              </Header>
              {createdUser ? (
                <Message>
                  <p className="positive">Sucesso! Usuario criado com êxito</p>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      setCreatedUser(false);
                    }}
                  >
                    OK
                  </button>
                </Message>
              ) : null}
              {errorCreate ? (
                <Message>
                  <p className="negative">Ops! Erro: {errorCreate}</p>
                  <button
                    className="negative-button"
                    onClick={(event) => {
                      event.preventDefault();
                      setErrorCreate(null);
                    }}
                  >
                    OK
                  </button>
                </Message>
              ) : null}
              <Form
                onSubmit={(event) => {
                  event.preventDefault();
                  setLoading(true);
                  const dataForm = new FormData(event.target);
                  const userData = {
                    name: dataForm.get("name"),
                    lastName: dataForm.get("lastName"),
                    login: dataForm.get("login"),
                    password: dataForm.get("password"),
                    createdBy: props.userName,
                  };

                  fetch("../../api/users/createUser", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(userData),
                  }).then(async (response) => {
                    if ((await response.status) === 200) {
                      setCreatedUser(true);
                      setLoading(false);
                      return;
                    }
                    const jsonResponse = await response.json();
                    setErrorCreate(jsonResponse.message);
                    setLoading(false);
                  });
                }}
              >
                <AddItemDataField name="Nome" dataName="name" type="text" />
                <AddItemDataField
                  name="Sobrenome"
                  dataName="lastName"
                  type="text"
                />
                <AddItemDataField name="Login" dataName="login" type="text" />
                <AddItemDataField
                  name="Senha"
                  dataName="password"
                  type="password"
                />
                <button
                  type="submit"
                  style={{ display: "none" }}
                  id="submitButton"
                ></button>
              </Form>
            </>
          )}
        </main>
      </div>
    </DashboardContentBox>
  );
}

export async function getServerSideProps(ctx) {
  const cookie = nookies.get(ctx);
  const decodedCookie = jwt.decode(cookie.USER_TOKEN);

  const { isAuthorized } = await fetch(
    "http://localhost:3000/api/authentication",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: cookie.USER_TOKEN,
      },
    }
  ).then((res) => res.json());

  if (!isAuthorized) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const { name, lastName } = decodedCookie;
  const userName = name + " " + lastName;
  return {
    props: {
      userName,
    },
  };
}
