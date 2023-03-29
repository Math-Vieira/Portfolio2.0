import styled, { keyframes } from "styled-components";

//section 1
const flashing = keyframes`
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
`;

export const Main = styled.main`
    min-height: 100vh;
    background-color: ${({ theme }) => theme.secondaryColor};
`;

export const MainImgContainer = styled.div`
    display: flex;
    position: relative;
    &::before {
        position: absolute;
        border-radius: 100%;
        content: "";
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.mainColor};
        opacity: 0.2;
        filter: blur(4rem);
    }
`

export const MainContentContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & .nameLogoContainer {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 2rem 0;
    }
`;

export const Name = styled.h1`
    font-size: 3.7rem;
    color: ${({ theme }) => theme.textColor};
    @media (max-width: 900px) {
        font-size: 3rem;
        text-align: center;
    }
    @media (max-width: 500px) {
        font-size: 2.5rem;
    }
`;

export const Occupation = styled.p`
    color: ${({ theme }) => theme.mainColor};
    font-size: 2rem;
    margin-top: -1.5rem;
    position: relative;
    text-shadow: 0 0 10px ${({ theme }) => theme.mainColor};

    &::after {
        content: "|";
        margin-left: 5px;
        opacity: 1;
        animation: ${flashing} 0.7s infinite;
    }
    @media (max-width: 500px) {
        font-size: 2rem;
        text-align: center;
    }
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin-left: 2px;
`;

export const MyInfoContainer = styled.div`
    @media (max-width: 900px) {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
`;

//section 2

export const AboutMeContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1.5rem;
    font-size: 1.2rem;
    align-items: center;
    padding-bottom: 5rem;
    & .svgContainer {
        display: flex;
        justify-content: center;
    }
    @media (max-width: 900px) {
        width: 80%;
        margin: 0 auto;
        display: block;
        text-align: center;
    }
`;

export const CarouselContainer = styled.div`
    min-height: 28rem;
`;

export const Section = styled.section<{ padding?: number; secondary?: boolean }>`
    background-color: ${({ theme, secondary }) =>
        !secondary ? theme.primaryColor : theme.secondaryColor};
    color: ${({ theme }) => theme.textColor};
    padding-bottom: ${({ padding }) => padding + "rem"};
    &
        .react-3d-carousel
        .slider-container
        .slider-content
        .slider-single
        .slider-single-content {
        box-shadow: none;
    }
`;
