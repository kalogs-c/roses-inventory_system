import { useRouter } from "next/router";
import { useState } from "react";

import nookies from "nookies";
import jwt from "jsonwebtoken";

// Components
import { Sidebar } from "../../../src/components/dashboard/Sidebar";
import { DashboardHeader } from "../../../src/components/dashboard/DashboardHeader";
import DashboardContentBox from "../../../src/components/dashboard/DashboardContentBox";
import AddItemDataField from "../../../src/components/dashboard/AddItemDataField";
import {
  Header,
  Button,
  Form,
  Message,
} from "./../../../src/components/new/styles";
import { SideCamp } from "../../../src/components/edit/styles";
import LoadingScreen from "../../../src/components/LoadingScreen";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { typeOf } from "react-is";
library.add();

export default function Edit(props) {
  const router = useRouter();
  const [createdSell, setCreatedSell] = useState(false);
  const [productFounded, setProductFounded] = useState(false);
  const [product, setProduct] = useState({});
  const [errorCreate, setErrorCreate] = useState("");
  const [loading, setLoading] = useState(false);

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
              {createdSell ? (
                <Message>
                  <p className="positive">Sucesso! Venda criada com êxito</p>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      setCreatedSell(false);
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
                  setCreatedSell(false);
                  setErrorCreate("");
                  const dataForm = new FormData(event.target);

                  if (productFounded) {
                    const value =
                      product.price.$numberDecimal *
                      Number(dataForm.get("quantity"));
                    
                    const sellData = {
                      productId: product._id,
                      name: product.name,
                      quantity: dataForm.get("quantity"),
                      value: value.toString(),
                      createdBy: props.userName,
                    };

                    fetch("./../../../api/sells/createSell", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(sellData),
                    }).then(async (response) => {
                      if ((await response.status) === 200) {
                        setCreatedSell(true);
                        setLoading(false);
                        router.push("/dashboard/sells");
                        return;
                      }
                      const jsonResponse = await response.json();
                      setErrorCreatez(jsonResponse.message);
                      setLoading(false);
                      return;
                    });
                  }

                  fetch("./../../../api/products/getProduct", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ id: dataForm.get("id") }),
                  }).then(async (response) => {
                    const data = await response.json();
                    setProduct(data.product);
                    setProductFounded(true);
                    setLoading(false);
                  });
                }}
              >
                <div
                  style={{ display: "flex", gap: 20, alignItems: "flex-end" }}
                >
                  <AddItemDataField
                    name="Id do produto"
                    required={productFounded ? false : true}
                    dataName="id"
                    type="text"
                  />
                  <Button
                    style={{ height: 40 }}
                    htmlFor="submitButton"
                    onClick={() => setProductFounded(false)}
                  >
                    Procurar
                  </Button>
                </div>
                {productFounded ? (
                  <AddItemDataField
                    name="Quantidade"
                    required={true}
                    dataName="quantity"
                    type="text"
                  />
                ) : null}
                <button
                  type="submit"
                  style={{ display: "none" }}
                  id="submitButton"
                ></button>
              </Form>
              {productFounded ? (
                <SideCamp>
                  <Header>
                    <div
                      style={{
                        padding: "10px 15px",
                        width: "100%",
                      }}
                    >
                      Dados do produto
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
                      <span>Id: {JSON.stringify(product._id)}</span>
                      <span>Nome: {product.name}</span>
                      <span>Quantidade: {product.quantity}</span>
                      <span>Preço: R$ {product.price.$numberDecimal}</span>
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
                      <span>Criado por: {product.createdBy}</span>
                      <span>Criado em: {product.created}</span>
                    </div>
                  </div>
                </SideCamp>
              ) : null}
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
