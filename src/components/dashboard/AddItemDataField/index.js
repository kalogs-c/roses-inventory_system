import { Input, Container } from "./styles";

export default function AddItemDataField(props) {
  const required = props.required === false ? false : true;

  return (
    <Container>
      <label htmlFor={props.dataName}>
        <span>{props.name}</span>
      </label>
      <Input
        type={props.type}
        placeholder={props.name}
        name={props.dataName}
        required={required}
        autoComplete="off"
      />
    </Container>
  );
}
