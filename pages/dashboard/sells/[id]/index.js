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
  const [sell, setSell] = useState({});
  const [deletedSell, setDeletedSell] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    await fetch("./../../../api/sells/getSell", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    }).then(async (response) => {
      const data = await response.json();
      setSell(data.sell);
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
                    <h2>Ver venda</h2>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <DeleteButton
                        onClick={(event) => {
                          event.preventDefault();
                          setDeletedSell(true);
                        }}
                      >
                        Deletar
                      </DeleteButton>
                    </div>
                  </div>
                </Header>
                {deletedSell ? (
                  <Message>
                    <p className="negative">Aten????o! A venda ser?? deletada</p>
                    <button
                      className="negative-button"
                      onClick={async (event) => {
                        event.preventDefault();
                        setLoading(true);

                        await fetch("./../../../api/sells/deleteSell", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({ id: id }),
                        }).then(async () => {
                          router.push("/dashboard/sells");
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
                      Dados da venda
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
                      <span>Id: {JSON.stringify(sell._id)}</span>
                      <span>Nome: {sell.name}</span>
                      <span>Quantidade: {sell.quantity}</span>
                      <span>
                        Pre??o unit??rio: R${" "}
                        {sell.value.$numberDecimal / sell.quantity}
                      </span>
                      <span>
                        Valor da venda: R$ {sell.value.$numberDecimal}
                      </span>
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
                      <span>Feita por: {sell.createdBy}</span>
                      <span>Feita em: {sell.created}</span>
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
