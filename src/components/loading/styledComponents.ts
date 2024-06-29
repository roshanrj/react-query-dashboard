import styled from "styled-components";

const LoadingComponent = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  // CSS for center align the spinner
  & .spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  & .loader-line {
        width: 100%;
        height: 5px;
        position: relative;
        overflow: hidden;
        background-color: #ddd;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
    }
  & .loader-line::before {
        content: "";
        position: absolute;
        left: -50%;
        height: 5px;
        width: 40%;
        background-color: $primary--color;
        -webkit-animation: lineAnim 1s linear infinite;
        -moz-animation: lineAnim 1s linear infinite;
        animation: lineAnim 1s linear infinite;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
    }
@keyframes lineAnim {
  0% {
      left: -40%;
  }
  50% {
      left: 20%;
      width: 80%;
  }
  100% {
      left: 100%;
      width: 100%;
  }
}`;

export default LoadingComponent;