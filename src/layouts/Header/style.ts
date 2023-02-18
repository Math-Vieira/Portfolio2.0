import styled from "styled-components";

export const Header = styled.header`
    background-color: ${props => props.theme.primaryColor};
    box-shadow: ${({ theme }) => theme.headerBoxShadow};
    position: fixed;
    width: 100%;
    padding: 0.5rem;
    top: 0;
    z-index: 1;
`;

export const HeaderContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

export const Logo = styled.div`
    font-size: 2rem;
    cursor: pointer;
    margin-top: 0.2rem;
    font-weight: lighter;
    & a {
        color: ${({ theme }) => theme.textColor};
    }

    & span {
        color: ${({ theme }) => theme.mainColor};
    }
`;

export const HeaderNav = styled.nav<{ mobileNav: boolean }>`
    & ul {
        display: flex;
        gap: 1.5rem;
    }

    & a {
        color: ${({ theme }) => theme.textColor};
        font-size: 1rem;
        font-weight: 500;
    }

    @media (max-width: 700px) {
        position: fixed;
        right: ${({ mobileNav }) => (mobileNav ? 0 : "-2.3rem")};
        top: 50%;
        transform: translateY(-50%);
        backdrop-filter: blur(3px);
        background: rgba(255, 255, 255, 0.08);
        box-shadow: 0px 0px 29px 0px rgb(0 0 0 / 32%);
        padding: 1rem;
        & ul {
            flex-direction: column;
            align-items: center;
        }
        & a {
            color: ${({ theme }) => theme.textColor};
        }
    }
`;

export const Link = styled.a`
    position: relative;
    display: block;
    &::after {
        content: "";
        position: absolute;
        width: 100%;
        background-color: red;
        transform: scaleX(0);
        height: 1px;
        bottom: -7px;
        left: 0;
        background: linear-gradient(
            270deg,
            ${({ theme }) => theme.mainColor} 0%,
            #17161d 100%
        );
        transform-origin: bottom right;
        transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);
    }
    &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    @media (max-width: 700px) {
        &::after {
            display: none;
        }
    }
`;

export const MobileMenu = styled.div<{ active: boolean }>`
    cursor: pointer;
    font-size: 2rem;
    color: ${({ active, theme }) =>
        active ? theme.mainColor : theme.textColor};
    transition: 0s;
`;
