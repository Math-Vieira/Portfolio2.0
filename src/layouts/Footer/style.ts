import styled from "styled-components";

export const Footer = styled.footer`
    background-color: ${({ theme }) => theme.primaryColor};
    & input[type="checkbox"] {
        background-color: red;
    }
    padding-bottom: 1rem;
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

export const ContactContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media (max-width: 700px) {
        flex-direction: column;
        gap: 2rem;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 48%;
    @media (max-width: 700px) {
        width: 100%;
    }
`;

export const BottomMessage = styled.div`
    padding-top: 2rem;
    color: ${({ theme }) => theme.textColor};
    text-align: center;
`;

export const SocialMediaContainer = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    gap: 3.3rem;
    @media (max-width: 700px) {
        width: 100%;
    }
`;
export const Title = styled.div`
    color: ${({ theme }) => theme.mainColor};
    font-size: 2rem;
    margin-top: -0.7rem;
`;

export const Text = styled.div`
    color: ${({ theme }) => theme.textColor};
    font-size: 1rem;
    margin-left: 0.3rem;
`

export const LinksContainer = styled.div`
    padding-top: 1.1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const MediaContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) => theme.textColor};
`