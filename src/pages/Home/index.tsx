import { useEffect, useRef, useState } from "react";
import MainLogo from "../../assets/svgComponents/MainLogo";
import * as S from "./style";
import { typingFunction } from "./functions";
import SocialMediaBox from "../../components/SocialBox";
import { ReactComponent as Linkedin } from "../../assets/svg/linkedin.svg";
import { ReactComponent as GitHub } from "../../assets/svg/github.svg";
import { ReactComponent as Instagram } from "../../assets/svg/instagram.svg";
import useMediaQuery from "../../hooks/useMediaQuery";
import H2 from "../../components/H2";
import Circle from "../../assets/svgComponents/Circle";

const Home = () => {
    const [isInitial, setIsInitial] = useState<boolean>(true);
    const ref = useRef<HTMLParagraphElement>(null);
    const occupation: string = "Desenvolvedor Web";
    const isMobile = useMediaQuery("(max-width: 900px)");

    useEffect(() => {
        if (
            !isInitial &&
            ref!.current!.innerHTML.length !== occupation.length
        ) {
            typingFunction(ref!.current!, occupation);
            return;
        }
        setIsInitial(false);
    }, [isInitial]);

    return (
        <>
            <S.Main id="start">
                <div className="centralizer">
                    <S.MainContentContainer>
                        <div className="nameLogoContainer">
                            <S.MyInfoContainer>
                                <S.Name>Matheus Vieira</S.Name>
                                <S.Occupation ref={ref}></S.Occupation>
                                <S.SocialMediaContainer>
                                    <SocialMediaBox url="https://www.linkedin.com/in/ymatheus-vieira/">
                                        <Linkedin />
                                    </SocialMediaBox>
                                    <SocialMediaBox url="https://github.com/math-vieira/">
                                        <GitHub />
                                    </SocialMediaBox>
                                    <SocialMediaBox url="https://www.instagram.com/devfourdev/">
                                        <Instagram />
                                    </SocialMediaBox>
                                </S.SocialMediaContainer>
                            </S.MyInfoContainer>
                            {!isMobile && <MainLogo />}
                        </div>
                    </S.MainContentContainer>
                </div>
            </S.Main>
            <S.Section id="aboutMe">
                <div className="centralizer">
                    <H2>SOBRE MIM</H2>
                    <S.AboutMeContainer>
                        <div>
                            <p>
                                Meu nome é Matheus Vieira e eu sou um apaixonado
                                por tecnologia que decidiu trilhar o caminho da
                                programação. Trabalhei com projetos envolvendo
                                gestão educacional, API's e banco de dados.
                            </p>
                            <br />
                            <p>
                                Atualmente estou cursando análise e
                                desenvolvimento de sistemas (ADS) e focando no
                                desenvolvimento FullStack, visto que me
                                interesso por todas as etapas de desenvolvimento
                                de um software.
                            </p>
                        </div>
                        {!isMobile && (
                            <div className="svgContainer">
                                <Circle />
                            </div>
                        )}
                    </S.AboutMeContainer>
                </div>
            </S.Section>
            <S.Section secondary={true} id="projects">
                <div className="centralizer">
                    <H2>PROJETOS</H2>
                    
                </div>
            </S.Section>
        </>
    );
};

export default Home;
