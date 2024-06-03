import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    @font-face {
        font-family: 'omyu_pretty';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2')
        format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    :root {
        font-family: 'omyu_pretty', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        --bg-color: #fff;
        --header-color: #fff;
        --box-color: #F1F1F1;
        --point-color: #7E7165;
        --button-color: #DACFC6;
        --text-color: #000;
    } 
    html, body{
        width: 100%;
        height: 100%;
        background-color: var(--bg-color);
        box-sizing: border-box;
    }
    *{
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
