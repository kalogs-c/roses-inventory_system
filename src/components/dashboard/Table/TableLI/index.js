import styled from "styled-components";

const Li = styled.li`
  display: flex;
  gap: 15px;
  flex: 1;
  border-bottom: 1px solid #f0f0f0;
  padding: 10px;
  text-decoration: none;
  min-width: 0;
  background: #fff;

  * {
    color: #34363a;
  }

  a {
    display: flex;
    flex: 1;
    justify-content: space-between;
  }
`;

export default function TableLI(props) {
  return (
    <>
      <Li>
        <input type="checkbox" />
        <a href={props.href}>
          <p>{props.name}</p>
          <p>{props.date}</p>
        </a>
      </Li>
    </>
  );
}
