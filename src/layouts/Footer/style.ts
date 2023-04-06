import styled from "styled-components";

export const Footer = styled.footer`
    background-color: ${({ theme }) => theme.primaryColor};
    & input[type="checkbox"] {
        background-color: red;
    }
    padding-bottom: 2rem;
`;

export const H2Container = styled.div`
    display: flex;
    align-items: center;
    gap: 11px;
    & h2 {
        font-size: 2rem;
        color: ${({ theme }) => theme.textColor};
    }
    width: 100%;
    padding: 1rem 0;
`;

export const ContactContainer = styled.div``;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 48%;
`;
