import styled, { keyframes } from "styled-components";

const flashing = keyframes`
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
`;

const boxShadow = keyframes`
	0%, 100% {
		box-shadow: initial;
	}
`;

export const Main = styled.main`
    min-height: 100vh;
    background-color: ${({ theme }) => theme.secondaryColor};
`;

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
`;

export const Occupation = styled.p`
    color: ${({ theme }) => theme.mainColor};
    font-size: 2rem;
    margin-top: -1.5rem;

    &::after {
        content: "|";
        margin-left: 5px;
        opacity: 1;
        animation: ${flashing} 0.7s infinite;
    }
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin-left: 2px;
`


