import { Header } from "./styles";

// Components
import AddButton from "./AddButton"

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
          <span>{props.registers} Registros</span>
          <AddButton reference={props.reference} >
            <FontAwesomeIcon icon={faPlus} />
            Novo registro
          </AddButton>
        </div>
      </Header>
    </>
  );
}
