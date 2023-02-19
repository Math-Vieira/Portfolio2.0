import styled from "styled-components";

export const ProjectContainer = styled.div`
    position: relative;
    width: 25rem;
    height: 25rem;
    background-color: ${({ theme }) => theme.primaryColor};
    position: relative;
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
`;

export const ProjectStatus = styled.div`
    color: ${({ theme }) => theme.textColor};
    font-size: 1.3rem;
    position: absolute;
    bottom: 0.5rem;
    left: 0.7rem;
`;

export const ProjectName = styled.h3`
    color: ${({ theme }) => theme.textColor};
    font-size: 2rem;
    letter-spacing: 2px;
    text-align: center;
    @media (max-width: 500px) {
        font-size: 1.5rem;
    }
`;

export const InfoContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;

    & li a {
        color: ${({ theme }) => theme.textColor};
        font-size: 1.5rem;
    }

    & li a:hover {
        color: ${({ theme }) => theme.mainColor};
    }
`;
