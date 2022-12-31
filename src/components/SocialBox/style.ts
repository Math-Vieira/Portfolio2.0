import styled from "styled-components";

export const SocialContainer = styled.div`
    cursor: pointer;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 5px;
    background-color: ${({theme}) => theme.tertiaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    &:hover > svg path {
        fill: ${({theme}) => theme.mainColor};
    }
`