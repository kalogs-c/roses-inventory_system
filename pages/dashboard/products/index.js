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

export default function viewProducts(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("../../api/products/getProductsList", {
      headers: {
        authorization: props.token,
      },
    }).then(async (response) => {
      const data = await response.json();
      setProducts(data.products);
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
                title="Produtos"
                reference="products"
                registers={products.length}
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
                      <a>Ultima atualização</a>
                      <a>Preço</a>
                    </div>
                  </Header>
                  <TableContent>
                    {products.map((item) => {
                      return (
                        <Li key={item._id}>
                          <a href={`products/${item._id}`}>
                            <div style={{ display: "flex", gap: 20 }}>
                              <p style={{ width: 60, textAlign: "center" }}>
                                {item.quantity}
                              </p>
                              <p>{item.name}</p>
                            </div>
                            <div style={{ display: "flex", gap: 20 }}>
                              <p>{item.created}</p>
                              <p>R$ {item.price.$numberDecimal}</p>
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

  const { name, lastName } = decodedCookie;
  const userName = name + " " + lastName;
  return {
    props: {
      userName,
      token: cookie.USER_TOKEN,
    },
  };
}
