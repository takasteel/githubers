import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --yellow: #FFCE00;
    --grey: #383838;
    --green: #63bf1f;
    --red: #a30d29;
    --black: #1f1f1f;
    --bg: #292929;
  }
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      color: #fff;
    }

    html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--bg);
    
    a {
      text-decoration: none;
      transition: color 0.2s;
    }

    a:hover, :focus {
      color: var(--yellow)
    }
  }
`;