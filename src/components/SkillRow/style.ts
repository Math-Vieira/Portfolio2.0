import styled from "styled-components";

export const Name = styled.h3`
    color: ${({ theme }) => theme.mainColor};
    font-size: 1.7rem;
    margin-bottom: 1.5rem;
    @media (max-width: 900px) {
        font-size: 1.5rem;
        width: 100%;
        text-align: center;
    }
`;

export const SkillContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 3rem;
    @media (max-width: 900px) {
        justify-content: center;
    }
`

export const Description = styled.p`
    font-size: 1rem;
`

export const DescriptionContainer = styled.div`
    max-width: 60%;
    @media (max-width: 900px) {
        width: 100%;
        text-align: center;
    }
`

export const SvgContainer = styled.div`
    display: flex;
    justify-content: center;
    min-width: 35%;
    height: 100%;
    align-items: center;
    & svg {
        max-width: 16rem;
    }
`