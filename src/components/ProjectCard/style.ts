import styled from "styled-components";

export const ProjectContainer = styled.div`
    position: relative;
    width: 26rem;
    height: 26rem;
    background-color: ${({ theme }) => theme.primaryColor};
    position: relative;
    cursor: grab;
    &:before,
    &:after {
        content: "";
        position: absolute;
        top: -2px;
        right: -2px;
        bottom: -2px;
        left: -2px;
        z-index: -1;
    }
    &:after {
        z-index: -2;
        filter: blur(5px);
    }
    &:nth-child(1):before,
    &:nth-child(1):after {
        background: linear-gradient(235deg, #00ad6f, #00ad6f, #00ad6f);
    }
    padding: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ProjectType = styled.div`
    color: ${({ theme }) => theme.textColor};
    font-size: 1.3rem;
    position: absolute;
    top: 0.5rem;
    right: 0.7rem;
    user-select: none;
`;

export const ProjectStatus = styled.div`
    color: ${({ theme }) => theme.textColor};
    font-size: 1.3rem;
    position: absolute;
    bottom: 0.5rem;
    left: 0.7rem;
    user-select: none;
`;

export const ProjectName = styled.h3`
    color: ${({ theme }) => theme.textColor};
    font-size: 1.5rem;
    letter-spacing: 2px;
    text-align: start;
    @media (max-width: 500px) {
        font-size: 1.5rem;
    }
    user-select: none;
`;

export const InfoContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    & li a {
        color: ${({ theme }) => theme.textColor};
        font-size: 1.3rem;
        user-select: none;
        position: relative;
        margin-top: 10px;
    }

    & li {
        margin-top: 0.1rem;
    }

    & li a:hover {
        user-select: none;
        margin-bottom: 0.3rem;
    }

    & li a::after {
        content: "";
        position: absolute;
        width: 100%;
        background-color: red;
        transform: scaleX(0);
        height: 1px;
        bottom: -5px;
        left: 0;
        background: linear-gradient(
            270deg,
            ${({ theme }) => theme.mainColor} 0%,
            #17161d 100%
        );
        transform-origin: bottom right;
        transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);
    }
    & li a:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    @media (max-width: 500px) {
        & li a {
        font-size: 1rem;
    }
    }
`;

export const ProjectNameAfterHover = styled.div`
    color: ${({ theme }) => theme.mainColor};
    font-size: 1.7rem;
    text-align: center;
    letter-spacing: 2px;
    user-select: none;
`;

export const ProjectDescription = styled.div`
    /* background-color: red; */
`

export const ProjectImage = styled.img`
    box-shadow: 0 0 5px 2px ${({ theme }) => theme.tertiaryColor};
    margin-bottom: 1rem;
`

export const Paragraph = styled.p`
    font-size: 13px;
    user-select: none;
`
