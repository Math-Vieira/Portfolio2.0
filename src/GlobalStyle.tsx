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

.pb-5 {
    padding-bottom: 5rem;
}

.pt-5 {
    padding-top: 5rem;
}

.pb-3 {
    padding-bottom: 3rem;
}

.pt-3 {
    padding-top: 3rem;
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

::-webkit-scrollbar {
  width: 5px;
  background-color: ${props => props.theme.tertiaryColor};
}

::-webkit-scrollbar-thumb {
  background-color: ${props => props.theme.mainColor};
  border-radius: 10px;
}

`;

export default GlobalStyle;
