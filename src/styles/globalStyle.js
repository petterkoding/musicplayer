import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: rgba(155,155,155, 0.5) transparent;
}

*::-webkit-scrollbar{
    width: 5px;
}

*::-webkit-scrollbar-track{
    background: transparent;
}

*::-webkit-scrollbar-thumb{
    background: rgba(155,155,155, 0.5);
    border-radius: 20px;
    border: transparent;

}


html, body{
    background: #eee;
    font-family: 'Red Hat Mono', monospace;
    user-select: none;
    position: relative;
}


main{
    min-height: 85vh;
}
`;

export default GlobalStyle;