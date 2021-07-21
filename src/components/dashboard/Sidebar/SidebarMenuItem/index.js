import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

export function SidebarMenuItem(props) {
  const router = useRouter();

  return (
    <>
      <li
        style={{ cursor: "pointer" }}
        onClick={(event) => {
          event.preventDefault();
          router.push(props.goTo);
        }}
      >
        <a className={router.pathname === props.goTo ? "active" : ""}>
          <i>
            <FontAwesomeIcon icon={props.icon} />
          </i>
          <span>{props.name}</span>
        </a>
      </li>
    </>
  );
}
