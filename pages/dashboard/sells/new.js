import styled from "styled-components";

import { useRouter } from "next/router";

import { Sidebar } from "../../../src/components/dashboard/Sidebar";
import { DashboardHeader } from "../../../src/components/dashboard/DashboardHeader";
import DashboardContentBox from "../../../src/components/dashboard/DashboardContentBox";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add();

const Header = styled.header`
  display: flex;
  position: relative;
  justify-content: space-between;
  border: 1px solid #f0f0f0;
  background-color: #fff;
  flex-shrink: 0;
`;

const Button = styled.button`
  padding: 7px 15px;
  background-color: #02ccf1;
  border: none;
  border-radius: 7px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;

export default function AddItem(props) {
  const router = useRouter();
  const id = router.query.id;
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
                <Button>Registrar</Button>
              </div>
            </div>
          </Header>
        </main>
      </div>
    </DashboardContentBox>
  );
}
