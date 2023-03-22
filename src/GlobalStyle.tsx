import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 .swiper-button-prev {
    color:  ${props => props.theme.selectItemArrow};
    left: 0;
}

.swiper-button-next {
    color:  ${props => props.theme.selectItemArrow};
    right: 0;
}
.mySmokeSwiper {
    position: relative;
}

.mySmokeSwiper::before {
    content: '';
    height: 20px;
    width: 20px;
    position: absolute;
    background-color:${props => props.theme.primaryColor};
    top: 0;
    left: 0;
    height: 100px;
    height: 100%;
    z-index: 2;
    box-shadow: 0px 0px 20px 20px ${props => props.theme.primaryColor};
}

.mySmokeSwiper::after {
    content: '';
    height: 20px;
    width: 20px;
    position: absolute;
    background-color: ${props => props.theme.primaryColor};
    top: 0;
    right: 0;
    scroll-margin-right: 0;
    height: 100px;
    height: 100%;
    z-index: 2;
    box-shadow: 0px 0px 20px 20px ${props => props.theme.primaryColor};
}

.d-flex {
    display: flex;
}

.j-center {
    justify-content: center;
}

.margin-5px-top-bottom {
    margin: 5px 0;
}
`;

export default GlobalStyle;
