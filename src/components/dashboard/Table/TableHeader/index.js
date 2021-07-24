import styled from "styled-components";

const TableHeader = styled.div`
  background-color: transparent;
  font-size: 14px;
  font-size: 0.875rem;
  position: relative;
  flex: 1;
  display: flex;
  justify-content: space-between;

  * {
    color: #848484;
  }
`;

export function TableHeader() {
  return (
    <TableHeader>
      <input type="checkbox" defaultChecked={true}/>
      <a>Nome</a>
      <a>Ultima atualização</a>
    </TableHeader>
  );
}
