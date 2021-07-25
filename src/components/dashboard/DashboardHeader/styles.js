import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.2rem;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  top: 0;
  height: 65px;
  z-index: 100;

  h2 {
    color: #222;

    label {
      cursor: pointer;
      i {
        padding-right: 0.25rem;
      }
    }
  }

  .user-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;

    i {
      font-size: 1.5rem;
    }
  }
`;
