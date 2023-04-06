import styled from "styled-components";

export const GenericButton = styled.button`
    z-index: 1;
    color: ${({theme}) => theme.textColor};
    background-color: transparent;
    padding: 0.5rem 1rem;
    outline: none;
    border: solid 1px ${({theme}) => theme.mainColor};
    cursor: pointer;
    &:hover {
        box-shadow: 0px 0px 6px ${({ theme }) => theme.mainColor};
    }
`