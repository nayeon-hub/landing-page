import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;1,700&display=swap');
${reset};
*{
    box-sizing : border-box;
}

a{
    text-decoration : none;
    
}
h2{
    font-family : 'Roboto', sans-serif;
    font-size : 23px;
}

`;
export default GlobalStyles;
