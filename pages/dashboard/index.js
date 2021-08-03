import nookies from "nookies";
import jwt from "jsonwebtoken";

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

export default function Dashboard(props) {
  return (
    <DashboardContentBox style={{ maxHeight: "100vh", overflow: "hidden" }}>
      <Sidebar />

      <div className="main-content">
        <DashboardHeader userName={props.userName}/>
        <main>
          <div className="cards">
            <Card amount="28" name="Produtos" icon={faGem} />
            <Card amount="21" name="Vendas" icon={faCashRegister} />
            <Card amount="R$370000" name="Entrada" icon={faPiggyBank} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "70%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                fontWeight: 500,
                letterSpacing: "-.04em",
                fontSize: 50,
                marginBottom: ".75rem",
                lineHeight: 1,
                color: "#34363a",
              }}
            >
              Olá, {props.userName}
            </h1>
            <span
              style={{
                fontSize: "1.5rem",
                maxWidth: 500,
                textAlign: "center",
              }}
            >
              Por favor, selecione o conteúdo que gostaria de editar na barra
              lateral esquerda
            </span>
          </div>
        </main>
      </div>
    </DashboardContentBox>
  );
}
export async function getServerSideProps(ctx) {
  const cookie = nookies.get(ctx);
  const decodedCookie = jwt.decode(cookie.USER_TOKEN);
  
  const { isAuthorized } = await fetch(
    "http://localhost:3000/api/authentication",
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
    },
  };
}
