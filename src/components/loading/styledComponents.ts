import styled from "styled-components";

const LoadingComponent = styled.div`
  position: relative;
  .loader {
    border: 10px solid #f3f3f3; /* Light grey */
    border-top: 10px solid #009879;
    border-bottom: 10px solid #009879;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
  }
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
}`;

export default LoadingComponent;