import styled from "styled-components";

// Components
import { Sidebar } from "./../../src/components/dashboard/Sidebar";
import { DashboardHeader } from "./../../src/components/dashboard/DashboardHeader";
import { Card } from "./../../src/components/dashboard/Card";
import DashboardContentBox from "./../../src/components/dashboard/DashboardContentBox";

// icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCashRegister,
  faPiggyBank,
  faGem,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogleWallet } from "@fortawesome/free-brands-svg-icons";
library.add();

const H1 = styled.h1`
    
`

export default function Dashboard() {
  return (
    <DashboardContentBox style={{maxHeight: '100vh', overflow: 'hidden'}}>
      <Sidebar />

      <div className="main-content">
        <DashboardHeader name="Carlos Henrique" />
        <main>
          <div className="cards">
            <Card amount="28" name="Produtos" icon={faGem} />
            <Card amount="21" name="Vendas" icon={faCashRegister} />
            <Card amount="R$4500" name="Entrada" icon={faPiggyBank} />
            <Card amount="R$370000" name="Saldo" icon={faGoogleWallet} />
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column",
            height: '60%',
            justifyContent: "center",
            alignItems: "center",
          }}>
            <h1 style={{
              fontWeight: 500,
              letterSpacing: '-.04em',
              fontSize: 50,
              marginBottom: '.75rem',
              lineHeight: 1,
              color: '#34363a',
            }}>
              Olá, Admin
            </h1>
            <span style={{
              fontSize: '1.5rem',
              maxWidth: 500,
              textAlign: 'center',
            }}>Por favor, selecione o conteúdo que gostaria de editar na barra lateral esquerda</span>
          </div>
        </main>
      </div>
    </DashboardContentBox>
  );
}
