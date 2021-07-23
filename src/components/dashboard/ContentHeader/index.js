import { Header } from "./styles";

// icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add();

export default function ContentHeader(props) {
  return (
    <>
      <Header>
        <div style={{ display: "flex", gap: 30, alignItems: "center" }}>
          <h2>{props.title}</h2>
          <div className="searchDiv">
            <FontAwesomeIcon icon={faSearch} />
            <input placeholder="Pesquisar" />
          </div>
        </div>
        <div className="addDiv">
          <span>2 registros</span>
          <a>
            <FontAwesomeIcon icon={faPlus} />
            Novo registro
          </a>
        </div>
      </Header>
    </>
  );
}
