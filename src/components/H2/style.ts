import styled from "styled-components";

export const H2Container = styled.div`
    display: flex;
    align-items: center;
    gap: 11px;
    & h2 {
        font-size: 2rem;
        color: ${({theme}) => theme.textColor};
    }
    width: 100%;
    justify-content: center;
    padding: 3rem 0;
`

