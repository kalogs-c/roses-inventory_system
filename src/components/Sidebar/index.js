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

export function Sidebar() {
  return (
    <>
      <input type="checkbox" id="nav-toggle" />
      <div className="sidebar">
        <div className="sidebar-menu">
          <ul>
            
            <li>
              <a href="#">
                <i className="fas fa-eye">
                  <FontAwesomeIcon icon={faEye} />
                </i>
                <span>Ver produtos</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-file-signature">
                  <FontAwesomeIcon icon={faFileSignature} />
                </i>
                <span>Cadastrar produto</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-barcode">
                  <FontAwesomeIcon icon={faBarcode} />
                </i>
                <span>Ver vendas</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-user-plus">
                  <FontAwesomeIcon icon={faUserPlus} />
                </i>
                <span>Adicionar usuario</span>
              </a>
            </li>
          </ul>
        </div>

        <a href="#" className="sign-out-btn">
          <i className="fas fa-sign-out-alt">
            <FontAwesomeIcon icon={faSignOutAlt} />
          </i>
          <p>Sair</p>
        </a>
      </div>
    </>
  );
}
