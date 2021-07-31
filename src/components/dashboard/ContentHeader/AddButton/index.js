import { useRouter } from "next/router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add();

export default function AddButton(props) {
  const router = useRouter();
  return (
    <a onClick={() => {
      router.push(`/dashboard/${props.reference}/new`)
    }}>
      <FontAwesomeIcon icon={faPlus} />
      Novo registro
    </a>
  );
}
