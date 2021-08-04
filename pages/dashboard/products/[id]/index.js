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
  Form,
} from "../../../../src/components/new/styles";
import AddItemDataField from "../../../../src/components/dashboard/AddItemDataField";
import { SideCamp } from "../../../../src/components/edit/styles";
import LoadingScreen from "../../../../src/components/LoadingScreen";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add();

export default function Edit(props) {
  const router = useRouter();
  const id = router.query.id;
  const [product, setProduct] = useState({});
  const [deletedProduct, setDeletedProduct] = useState(false);
  const [editedProduct, setEditedProduct] = useState(false);
  const [errorEdit, setErrorEdit] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    await fetch("./../../../api/products/getProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    }).then(async (response) => {
      const data = await response.json();
      setProduct(data.product);
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
                    <h2>Ver produto</h2>
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
                          setDeletedProduct(true);
                        }}
                      >
                        Deletar
                      </DeleteButton>
                      <Button
                        onClick={(event) => {
                          event.preventDefault();
                          setEditedProduct(true);
                        }}
                      >
                        Editar
                      </Button>
                    </div>
                  </div>
                </Header>
                {deletedProduct ? (
                  <Message>
                    <p className="negative">Atenção! O produto será deletado</p>
                    <button
                      className="negative-button"
                      onClick={async (event) => {
                        event.preventDefault();
                        setLoading(true);

                        await fetch("./../../../api/products/deleteProduct", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({ id: id }),
                        }).then(async () => {
                          router.push("/dashboard/products");
                        });
                      }}
                    >
                      OK
                    </button>
                  </Message>
                ) : null}
                {editedProduct ? (
                  <Message>
                    <p className="negative">
                      Atenção! Os dados serão sobrescritos
                    </p>
                    <Button
                      className="negative-button"
                      htmlFor="submitButton"
                    >
                      Ok e Editar
                    </Button>
                  </Message>
                ) : null}
                {errorEdit ? (
                  <Message>
                    <p className="negative">
                      Erro: {errorEdit}
                    </p>
                    <Button
                      className="negative-button"
                      onClick={() => {
                        setErrorEdit('')
                      }}
                    >
                      OK
                    </Button>
                  </Message>
                ) : null}
                <Form
                  onSubmit={(event) => {
                    event.preventDefault();
                    setLoading(true);
                    setEditedProduct(false)
                    setErrorEdit("");
                    const dataForm = new FormData(event.target);
                    const productData = {
                      id: id,
                      name: dataForm.get("name"),
                      price: dataForm.get("price"),
                      quantity: dataForm.get("quantity"),
                      createdBy: props.userName,
                    };
                    
                    fetch("../../api/products/editProduct", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(productData),
                    }).then(async (response) => {
                      if ((await response.status) === 200) {
                        setEditedProduct(false);
                        setLoading(false);
                        router.push('/dashboard/products')
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
