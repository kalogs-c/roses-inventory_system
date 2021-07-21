import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faColumns,
  faEye,
  faFileSignature,
  faBarcode,
  faUserPlus,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
library.add();

// Components
import { SidebarMenuItem } from "./SidebarMenuItem";

export function Sidebar() {
  return (
    <>
      <input type="checkbox" id="nav-toggle" />
      <div className="sidebar">
        <div className="sidebar-menu">
          <ul>
            <SidebarMenuItem goTo="/" icon={faColumns} name="Dashboard" />
            <SidebarMenuItem
              goTo="/viewProducts"
              icon={faEye}
              name="Ver produtos"
            />
            <SidebarMenuItem
              goTo="/addProduct"
              icon={faFileSignature}
              name="Cadastrar produto"
            />
            <SidebarMenuItem
              goTo="/seeSells"
              icon={faBarcode}
              name="Ver vendas"
            />
            <SidebarMenuItem
              goTo="/viewUsers"
              icon={faUserPlus}
              name="Adicionar usuario"
            />
          </ul>
        </div>

        <a href="#" className="sign-out-btn">
          <i>
            <FontAwesomeIcon icon={faSignOutAlt} />
          </i>
          <p>Sair</p>
        </a>
      </div>
    </>
  );
}
