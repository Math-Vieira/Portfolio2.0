import styled from "styled-components";

export const ProjectContainer = styled.div`
    width: 25rem;
    height: 25rem;
    margin-bottom: 4rem;
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
        background: linear-gradient(235deg, #00AD6F, #00AD6F, #00AD6F);
    }
`;
