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

export const Form = styled.form`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex: 1;
  height: 100%;
`;
