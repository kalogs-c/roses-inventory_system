import { useState, useEffect } from "react";

import nookies from "nookies";
import jwt from "jsonwebtoken";

// Components
import { Sidebar } from "../../../src/components/dashboard/Sidebar";
import { DashboardHeader } from "../../../src/components/dashboard/DashboardHeader";
import DashboardContentBox from "../../../src/components/dashboard/DashboardContentBox";
import ContentHeader from "../../../src/components/dashboard/ContentHeader";
import { TableContent } from "../../../src/components/dashboard/Table/TableContent";
import { Header } from "../../../src/components/dashboard/Table/TableHeader";
import { Li } from "../../../src/components/dashboard/Table/TableLI";
import LoadingScreen from "../../../src/components/LoadingScreen";

export default function viewSells(props) {
  const [sells, setSells] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("../../api/sells/getSellsList", {
      headers: {
        authorization: props.token,
      },
    }).then(async (response) => {
      const data = await response.json();
      setSells(data.sells);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <DashboardContentBox>
        <Sidebar />

        <div className="main-content">
          <DashboardHeader userName={props.userName} />
          <main>
            <>
              <ContentHeader
                title="Vendas"
                reference="sells"
                registers={sells.length}
              />
              {loading === true ? (
                <LoadingScreen />
              ) : (
                <div style={{ padding: 20 }}>
                  <Header>
                    <div>
                      <a>Quantidade</a>
                      <a>Nome</a>
                    </div>
                    <div style={{ display: "flex", gap: 30 }}>
                      <a>Data</a>
                      <a>Valor</a>
                    </div>
                  </Header>
                  <TableContent>
                    {sells.map((item) => {
                      return (
                        <Li key={item._id}>
                          <a href={`sells/${item._id}`}>
                            <div style={{ display: "flex", gap: 20 }}>
                              <p style={{ width: 60, textAlign: "center" }}>
                                {item.quantity}
                              </p>
                              <p>{item.name}</p>
                            </div>
                            <div style={{ display: "flex", gap: 20 }}>
                              <p>{item.created}</p>
                              <p>R$ {item.value.$numberDecimal}</p>
                            </div>
                          </a>
                        </Li>
                      );
                    })}
                  </TableContent>
                </div>
              )}
            </>
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
    `${process.env.API_URL}/api/authentication`,
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
      token: cookie.USER_TOKEN,
    },
  };
}
