import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  position: relative;
  justify-content: space-between;
  border: 1px solid #f0f0f0;
  background-color: #fff;
  flex-shrink: 0;
`;

export const Button = styled.label`
  padding: 7px 15px;
  background-color: #02ccf1;
  border: none;
  border-radius: 7px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;

export const DeleteButton = styled.label`
  padding: 7px 15px;
  background-color: #F48498;
  border: none;
  border-radius: 7px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;

export const Form = styled.form`
  padding: 20px 3rem;
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex: 1;
`;

export const Message = styled.div`
  padding: 20px 0 0 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;

  button {
    border-radius: 50px;
    width: 45px;
    border: none;
    background-color: #ACD8AA;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }

  .negative-button {
    background-color: #F48498;
  }

  p {
    width: max-content;
    padding: 10px;
  }

  .positive {
    border: 1px solid #ACD8AA;
    border-radius: 4px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.04);
  }

  .negative {
    border: 1px solid #F48498;
    border-radius: 4px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.04);
  }
`