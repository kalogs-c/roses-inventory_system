import styled from "styled-components";

const Header = styled.div`
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
        <input type="checkbox" defaultChecked={false} />
        <a>Nome</a>
      </div>
      <a>Ultima atualização</a>
    </Header>
  );
}
