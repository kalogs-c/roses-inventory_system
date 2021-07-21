import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Card(props) {
  return (
    <>
      <div class="card-single">
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
