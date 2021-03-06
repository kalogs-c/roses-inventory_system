import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { Header } from "./styles";
library.add();

export function DashboardHeader(props) {
  return (
    <Header>
      <h2>
        <label htmlFor="nav-toggle">
          <i>
            <FontAwesomeIcon icon={faBars} />
          </i>
        </label>
      </h2>

      <div className="user-wrapper">
        <h4>{props.userName}</h4>
        <i className="far fa-user">
          <FontAwesomeIcon icon={faUser} />
        </i>
      </div>
    </Header>
  );
}

