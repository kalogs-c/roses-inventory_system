import React from "react";

// icons
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
      <input
        defaultChecked={true}
        type="checkbox"
        id="nav-toggle"
      />
      <div className="sidebar">
        <div className="sidebar-menu">
          <ul>
            <SidebarMenuItem
              goTo="/dashboard"
              icon={faColumns}
              name="Dashboard"
            />
            <SidebarMenuItem
              goTo="/dashboard/products"
              icon={faEye}
              name="Produtos"
            />
            <SidebarMenuItem
              goTo="/dashboard/seeSells"
              icon={faBarcode}
              name="Ver vendas"
            />
            <SidebarMenuItem
              goTo="/dashboard/users"
              icon={faUserPlus}
              name="Usuarios"
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
