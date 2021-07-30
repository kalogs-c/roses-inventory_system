import styled from "styled-components";

const Screen = styled.div`
  width: 100vw;
  height: 100vh;

  .wrapper {
    position: absolute;
    display: flex;
    gap: 5px;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .circle {
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: transparent;
    border-radius: 50%;
    animation: loading 1.5s cubic-bezier(0.8, 0.5, 0.2, 1.4) infinite;
    transform-origin: bottom center;
    position: relative;
  }
  @keyframes loading {
    0% {
      transform: translateY(0px);
      background-color: transparent;
    }
    50% {
      transform: translateY(50px);
      background-color: #03cbef;
    }
    100% {
      transform: translateY(0px);
      background-color: transparent;
    }
  }
  .circle-1 {
    animation-delay: 0.1s;
  }
  .circle-2 {
    animation-delay: 0.2s;
  }
  .circle-3 {
    animation-delay: 0.3s;
  }
  .circle-4 {
    animation-delay: 0.4s;
  }
  .circle-5 {
    animation-delay: 0.5s;
  }
  .circle-6 {
    animation-delay: 0.6s;
  }
  .circle-7 {
    animation-delay: 0.7s;
  }
  .circle-8 {
    animation-delay: 0.8s;
  }

  @keyframes youtubeAnim {
    0%,
    100% {
      color: #c9110f;
    }
    50% {
      color: #ff0000;
    }
  }
  /* footer  */
`;

export default function LoadingScreen() {
  return (
    <Screen>
      <div className="wrapper">
        <span className="circle circle-1"></span>
        <span className="circle circle-2"></span>
        <span className="circle circle-3"></span>
        <span className="circle circle-4"></span>
        <span className="circle circle-5"></span>
        <span className="circle circle-6"></span>
        <span className="circle circle-7"></span>
        <span className="circle circle-8"></span>
      </div>
    </Screen>
  );
}
