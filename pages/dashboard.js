import styled from "styled-components";

// Components
import { Sidebar } from "./../src/components/Sidebar";
import { DashboardHeader } from "./../src/components/DashboardHeader";
import { Card } from "./../src/components/Card";
import DashboardContentBox from "./../src/components/DashboardContentBox";

//icon
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCashRegister,
  faPiggyBank,
  faGem,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogleWallet } from "@fortawesome/free-brands-svg-icons";
library.add();



export default function Dashboard() {
  return (
    <DashboardContentBox>
      <Sidebar />

      <div class="main-content">
        <DashboardHeader name='Carlos Henrique' />
        <main>
          <div class="cards">
            <Card amount="28" name="Produtos" icon={faGem} />
            <Card amount="21" name="Vendas" icon={faCashRegister} />
            <Card amount="R$4500" name="Entrada" icon={faPiggyBank} />
            <Card amount="R$370000" name="Saldo" icon={faGoogleWallet} />
          </div>
        </main>
      </div>
    </DashboardContentBox>
  );
}
