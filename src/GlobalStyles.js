import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
        --gray-100: #38343d;
        --gray-200: #686071;
        --gray-300: #797085;
        --gray-400: #F4EFFA;
        --gray-500: #FDFCFE;
        --red: #AA2222;
        --purple-100: #9245F1;
        --purple-200: #935FD3;

        font-family: 'Heebo', sans-serif;
        font-size: 62.5%;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-size: 1.6rem;
        color: var(--gray-100);
    }

    .App{
        width: 100%;
        height: 100vh;
        background: linear-gradient(to left, var(--purple-100), var(--purple-200));
    }

    .flex{
        display: flex;
    }
`;

export default GlobalStyle;