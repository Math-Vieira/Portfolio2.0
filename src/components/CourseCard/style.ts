import styled from "styled-components";

export const CardContainer = styled.div`
    background-color: ${({ theme }) => theme.secondaryColor};
    width: 70%;
    padding: 0.5rem;
    box-shadow: 0px 0px 6px ${({ theme }) => theme.mainColor};
    border: solid 1px ${({ theme }) => theme.secondaryColor};
    padding-bottom: 2rem;
`;

export const H3 = styled.h3`
    color: ${({ theme }) => theme.mainColor};
    font-size: 1.7rem;
    font-weight: 400;
    margin: 1rem 0;
`;

export const InfoRow = styled.p`
    font-size: 12.5px;
    color: ${({ theme }) => theme.quaternaryColor};
    & span {
        color: white;
    }

    & span a {
        color: white;
    }
`
