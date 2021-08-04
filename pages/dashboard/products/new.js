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
import LoadingScreen from "../../../src/components/LoadingScreen";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add();

export default function Edit(props) {
  const router = useRouter();
  const [createdProduct, setCreatedProduct] = useState(false);
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
              {createdProduct ? (
                <Message>
                  <p className="positive">Sucesso! Produto criado com êxito</p>
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
                  setCreatedProduct(false);
                  setErrorCreate("");
                  const dataForm = new FormData(event.target);
                  const productData = {
                    name: dataForm.get("name"),
                    price: dataForm.get("price"),
                    quantity: dataForm.get("quantity"),
                    createdBy: props.userName,
                  };

                  fetch("../../api/products/createProduct", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(productData),
                  }).then(async (response) => {
                    if ((await response.status) === 200) {
                      setCreatedProduct(false);
                      setLoading(false);
                      router.push("/dashboard/products");
                      return;
                    }
                    const jsonResponse = await response.json();
                    setErrorEdit(jsonResponse.message);
                    setLoading(false);
                  });
                }}
              >
                <AddItemDataField
                  name="Nome"
                  required={false}
                  dataName="name"
                  type="text"
                />
                <AddItemDataField
                  name="Preço"
                  required={false}
                  dataName="price"
                  type="text"
                />
                <AddItemDataField
                  name="Quantidade"
                  dataName="quantity"
                  required={false}
                  type="text"
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

  const { name, lastName, _id } = decodedCookie;
  const userName = name + " " + lastName;
  return {
    props: {
      userName,
      _id,
    },
  };
}
