import styled from "styled-components";

export const Header = styled.div`
  background-color: transparent;
  font-size: 14px;
  font-size: 0.875rem;
  position: relative;
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding: 10px;

  div {
    display: flex;
    gap: 15px;
  }

  * {
    color: #848484;
  }
`;

export function TableHeader() {
  return (
    <Header>
      <div>
        <a>Quantidade</a>
        <a>Nome</a>
      </div>
      <div>
        <a>Ultima atualização</a>
        <a>Preço</a>
      </div>
    </Header>
  );
}
