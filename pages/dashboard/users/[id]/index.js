import nookies from "nookies";
import jwt from "jsonwebtoken";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { Sidebar } from "../../../../src/components/dashboard/Sidebar";
import { DashboardHeader } from "../../../../src/components/dashboard/DashboardHeader";
import DashboardContentBox from "../../../../src/components/dashboard/DashboardContentBox";
import {
  Header,
  Button,
  DeleteButton,
  Message,
} from "../../../../src/components/new/styles";
import { SideCamp } from "../../../../src/components/edit/styles";
import LoadingScreen from "../../../../src/components/LoadingScreen";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add();

export default function Edit(props) {
  const router = useRouter();
  const id = router.query.id;
  const [user, setUser] = useState({});
  const [deletedUser, setDeletedUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    await fetch("./../../../api/users/getUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    }).then(async (response) => {
      const data = await response.json();
      setUser(data.user);
      console.log(data.user);
      setLoading(false);
    });
  }, []);

  return (
    <>
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
                    <h2>Ver usuario</h2>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      {props._id !== id ? (
                        <DeleteButton
                          onClick={(event) => {
                            event.preventDefault();
                            setDeletedUser(true);
                          }}
                        >
                          Deletar
                        </DeleteButton>
                      ) : <span>Usuario atual</span>}
                    </div>
                  </div>
                </Header>
                {deletedUser ? (
                  <Message>
                    <p className="negative">Aten????o! O usuario ser?? deletado</p>
                    <button
                      className="negative-button"
                      onClick={async (event) => {
                        event.preventDefault();
                        setLoading(true);

                        await fetch("./../../../api/users/deleteUser", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({ id: id }),
                        }).then(async () => {
                          router.push('/dashboard/users');
                        });
                      }}
                    >
                      OK
                    </button>
                  </Message>
                ) : null}
                <SideCamp>
                  <Header>
                    <div
                      style={{
                        padding: "10px 15px",
                        width: "100%",
                      }}
                    >
                      Dados do usu??rio
                    </div>
                  </Header>
                  <div
                    style={{
                      display: "flex",
                      gap: 5,
                      padding: 10,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 5,
                        padding: 10,
                      }}
                    >
                      <span>Nome: {user.name}</span>
                      <span>Sobrenome: {user.lastName}</span>
                      <span>Login: {user.login}</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 5,
                        padding: 10,
                        borderLeft: "1px solid #f0f0f0",
                      }}
                    >
                      <span>Criado por: {user.createdBy}</span>
                      <span>Criado em: {user.created}</span>
                    </div>
                  </div>
                </SideCamp>
              </>
            )}
          </main>
        </div>
      </DashboardContentBox>
    </>
  );
}
export async function getServerSideProps(ctx) {
  const cookie = nookies.get(ctx);
  const decodedCookie = jwt.decode(cookie.USER_TOKEN);

  const { isAuthorized } = await fetch(
    "https://balur-psi.vercel.app/api/authentication",
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

  const { name, lastName, _id } = decodedCookie;
  const userName = name + " " + lastName;
  return {
    props: {
      userName,
      _id,
    },
  };
}
