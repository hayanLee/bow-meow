import reset, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'omyu_pretty';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2')
    format('woff2');
    font-weight: normal;
    font-style: normal;
}
${reset}
:root {
    font-family: 'omyu_pretty', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    --bg-color: #fffef5;
    --header-color: #bc6c25;
    --box-color: #dda15e;
    --point-color: #606c38;
    --button-color: #283618;
    --text-color: #fefae0;
}    
`;

export default GlobalStyle;
