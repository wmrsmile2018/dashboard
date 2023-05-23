import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    background-color: transparent;
    font-family: Inter;
    line-height: 125%;
    letter-spacing: 0.7px;
  }

  input {
    background-color: transparent;
    outline:none;
  }
  
  .ant-drawer-content-wrapper {
    max-width: 600px !important;
    width: 100% !important;
  }

`;
