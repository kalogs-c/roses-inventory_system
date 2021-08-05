import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

export function Card(props) {
  const router = useRouter();
  return (
    <>
      <div
        className="card-single"
        onClick={(event) => {
          event.preventDefault();
          router.push(props.goTo);
        }}
      >
        <div>
          <h1>{props.amount}</h1>
          <span>{props.name}</span>
        </div>
        <div>
          <i>
            <FontAwesomeIcon icon={props.icon} />
          </i>
        </div>
      </div>
    </>
  );
}
