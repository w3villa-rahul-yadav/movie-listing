import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap');

  body {
    font-family: 'Titillium Web', sans-serif;
    background-color: #171717;
    color: #ffffff;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  * {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  }

  *::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
  }

  .titillium-web-extralight {
    font-family: "Titillium Web", sans-serif;
    font-weight: 200;
    font-style: normal;
  }

  .titillium-web-light {
    font-family: "Titillium Web", sans-serif;
    font-weight: 300;
    font-style: normal;
  }

  .titillium-web-regular {
    font-family: "Titillium Web", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .titillium-web-semibold {
    font-family: "Titillium Web", sans-serif;
    font-weight: 600;
    font-style: normal;
  }

  .titillium-web-bold {
    font-family: "Titillium Web", sans-serif;
    font-weight: 700;
    font-style: normal;
  }

  .titillium-web-black {
    font-family: "Titillium Web", sans-serif;
    font-weight: 900;
    font-style: normal;
  }

  .titillium-web-extralight-italic {
    font-family: "Titillium Web", sans-serif;
    font-weight: 200;
    font-style: italic;
  }

  .titillium-web-light-italic {
    font-family: "Titillium Web", sans-serif;
    font-weight: 300;
    font-style: italic;
  }

  .titillium-web-regular-italic {
    font-family: "Titillium Web", sans-serif;
    font-weight: 400;
    font-style: italic;
  }

  .titillium-web-semibold-italic {
    font-family: "Titillium Web", sans-serif;
    font-weight: 600;
    font-style: italic;
  }

  .titillium-web-bold-italic {
    font-family: "Titillium Web", sans-serif;
    font-weight: 700;
    font-style: italic;
  }
`;
