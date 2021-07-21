import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
library.add();

export function DashboardHeader(props) {
  return (
    <header>
      <h2>
        <label  for="nav-toggle">
          <i class="fas fa-bars">
            <FontAwesomeIcon icon={faBars} />
          </i>
        </label>
      </h2>

      <div class="user-wrapper">
        <h4>{props.name}</h4>
        <div>
          <i class="far fa-user">
            <FontAwesomeIcon icon={faUser} />
          </i>
        </div>
      </div>
    </header>
  );
}
