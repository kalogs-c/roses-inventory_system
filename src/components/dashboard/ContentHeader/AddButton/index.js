export default function AddButton(props) {
  return (
    <a href={`/dashboard/${props.reference}/addItem`}>
      <FontAwesomeIcon icon={faPlus} />
      Novo registro
    </a>
  );
}
