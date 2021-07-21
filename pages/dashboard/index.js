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

export default function Dashboard() {
  return (
    <DashboardContentBox>
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
        </main>
      </div>
    </DashboardContentBox>
  );
}
