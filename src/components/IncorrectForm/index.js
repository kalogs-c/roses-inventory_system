import styled from "styled-components";

export const IncorrectForm = styled.p`
  // layout
  position: relative;
  max-width: 25rem;

  // looks
  background-color: #fff;
  padding: 1.125em 1.5em;
  margin-top: 20px; 
  color: #ed4337;
  font-size: 1.25em;
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3),
    0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);

  &::before {
    // layout
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    bottom: 100%;
    left: 1.5em; // offset should move with padding of parent
    border: 0.75rem solid transparent;
    border-top: none;

    // looks
    border-bottom-color: #fff;
    filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, 0.3));
  }
`;
