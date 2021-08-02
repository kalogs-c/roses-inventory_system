import React from "react";
import { useRouter } from "next/router";

import nookies from 'nookies';

// icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faColumns,
  faEye,
  faBarcode,
  faUserPlus,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
library.add();

// Components
import { SidebarMenuItem } from "./SidebarMenuItem";

export function Sidebar() {
  const router = useRouter();
  return (
    <>
      <input defaultChecked={true} type="checkbox" id="nav-toggle" />
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
              goTo="/dashboard/sells"
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

        <a
          onClick={(event) => {
            event.preventDefault();
            nookies.destroy(null, 'USER_TOKEN')
            router.push("/");
          }}
          className="sign-out-btn"
          style={{ cursor: "pointer" }}
        >
          <i>
            <FontAwesomeIcon icon={faSignOutAlt} />
          </i>
          <p>Sair</p>
        </a>
      </div>
    </>
  );
}
