import useMediaQuery from "../../hooks/useMediaQuery";
import { useToggle } from "../../hooks/useToggle";
import * as S from "./style";

const Header = () => {
    const isMobile = useMediaQuery("(max-width: 700px)");
    const { state: mobileNav, toggle: toggleMobileNav } = useToggle();
    return (
        <S.Header>
            <S.HeaderContentContainer className="centralizer">
                <S.Logo>
                    <a href="/">
                        <span>/*</span>M.V DEV<span>*/</span>
                    </a>
                </S.Logo>
                <S.HeaderNav mobileNav={mobileNav}>
                    <ul>
                        <li>
                            <S.Link href="#start">
                                {isMobile && <i className="fas fa-house"></i>}
                                {!isMobile && "Início"}
                            </S.Link>
                        </li>
                        <li>
                            <S.Link href="#aboutMe">
                                {isMobile && (
                                    <i className="fa-solid fa-book"></i>
                                )}
                                {!isMobile && "Sobre mim"}
                            </S.Link>
                        </li>
                        <li>
                            <S.Link href="#projects">
                                {isMobile && (
                                    <i className="fa-regular fa-pen-to-square"></i>
                                )}
                                {!isMobile && "Projetos"}
                            </S.Link>
                        </li>
                        <li>
                            <S.Link href="#certificates">
                                {isMobile && (
                                    <i className="fa-solid fa-graduation-cap"></i>
                                )}
                                {!isMobile && "Certificações"}
                            </S.Link>
                        </li>
                        <li>
                            <S.Link href="#skills">
                                {isMobile && (
                                    <i className="fa-solid fa-list"></i>
                                )}
                                {!isMobile && "Habilidades"}
                            </S.Link>
                        </li>
                    </ul>
                </S.HeaderNav>
                {isMobile && (
                    <S.MobileMenu active={mobileNav} onClick={toggleMobileNav}>
                        <i className="fa-solid fa-bars"></i>
                    </S.MobileMenu>
                )}
            </S.HeaderContentContainer>
        </S.Header>
    );
};

export default Header;
