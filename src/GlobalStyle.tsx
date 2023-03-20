import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 .swiper-button-prev {
    color:  ${props => props.theme.selectItemArrow};
}

.swiper-button-next {
    color:  ${props => props.theme.selectItemArrow};
}
`;

export default GlobalStyle;
