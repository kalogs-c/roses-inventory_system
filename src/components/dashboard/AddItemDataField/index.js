import { Input, Container } from "./styles";

export default function AddItemDataField(props) {
  return (
    <Container>
      <label htmlFor={props.dataName}>
        <span>{props.name}</span>
      </label>
      <Input
        type={props.type}
        placeholder={props.name}
        name={props.dataName}
        required
        autoComplete="off"
      />
    </Container>
  );
}
