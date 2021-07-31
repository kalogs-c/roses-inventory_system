import { useRouter } from "next/router";
import { useState } from "react";

// Components
import { Sidebar } from "./../../../../src/components/dashboard/Sidebar";
import { DashboardHeader } from "./../../../../src/components/dashboard/DashboardHeader";
import DashboardContentBox from "./../../../../src/components/dashboard/DashboardContentBox";
import AddItemDataField from "../../../../src/components/dashboard/AddItemDataField";
import { Header, Button, Form } from "./styles";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add();

export default function AddItem() {
  const [createdUser, setCreatedUser] = useState(true);
  const [serverResponse, setServerResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <DashboardContentBox style={{ maxHeight: "100vh", overflow: "hidden" }}>
      <Sidebar />

      <div className="main-content">
        <DashboardHeader name={"Carlos Henrique"} />
        <main>
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
                router.back()
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
              };

              fetch("../../api/createUser", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
              }).then(async (response) => {
                if (await response.status === 200) {
                  setCreatedUser(true);
                  setLoading(false);
                  return
                }
                setLoading(false);
                setCreatedUser(false);
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
        </main>
      </div>
    </DashboardContentBox>
  );
}
