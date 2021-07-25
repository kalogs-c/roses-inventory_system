import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px 1.25rem;
  border-radius: 3px;
  border-bottom: 2px solid #f0f0f0;

  .searchDiv {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    border: 1.5px solid #f0f0f0;
    border-radius: 50px;

    input {
      border: 0;
      background: transparent;
      width: auto;
      flex: 1;
      padding: 0 10px;
      height: 100%;
    }
  }

  .addDiv {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    a {
      padding: 1rem;
      background-color: #02ccf1;
      border-radius: 7px;
      color: #fff;
      display: flex;
      gap: 10px;
      transition: all 0.2s ease-in-out;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;
