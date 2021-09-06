import styled from 'styled-components';

const Main = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  .logo {
    height: 100px;
    position: absolute;
    top: 40px;
  }

  .wave {
    position: absolute;
    bottom: 0;
    z-index: -100;
  }

  .form-div {
    width: 100%;
    max-width: 400px;
    padding: 35px;
    border-radius: 25px;
    background-color: transparent;

    h1 {
      text-align: center;
      margin: 0;
      color: #5f6368;
      margin-bottom: 20px;
    }

    form {
      display: flex;
      gap: 7px;
      flex-direction: column;

      input {
        border: none;
        border-radius: 7px;
        color: #000;
        background-color: #dedede;
        padding: 10px;
      }

      input:first-child {
        margin-bottom: 10px;
      }

      button {
        border: none;
        border-radius: 15px;
        margin-top: 5px;
        height: 40px;
        color: #fff;
        font-size: 1.05rem;
        font-weight: bolder;
        cursor: pointer;
        letter-spacing: 1px;
        background-color: #A03D60;
        transition: 0.3s ease-in-out all;

        &:hover {
          opacity: 0.7;
          letter-spacing: 1.5px;
        }
      }
    }
  }
`;

export default Main;