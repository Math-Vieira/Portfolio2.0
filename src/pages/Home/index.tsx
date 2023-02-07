import { useEffect, useRef, useState } from "react";
import MainLogo from "../../assets/svgComponents/MainLogo";
import * as S from "./style";
import { typingFunction } from "./functions";
import SocialMediaBox from "../../components/SocialBox";
import { ReactComponent as Linkedin } from "../../assets/svg/linkedin.svg";
import { ReactComponent as GitHub } from "../../assets/svg/github.svg";
import { ReactComponent as Instagram } from "../../assets/svg/instagram.svg";
import useMediaQuery from "../../hooks/useMediaQuery";

const Home = () => {
    const [isInitial, setIsInitial] = useState<boolean>(true);
    const ref = useRef<HTMLParagraphElement>(null);
    const occupation: string = "Desenvolvedor Web";
    const isMobile = useMediaQuery('(max-width: 900px)');

    useEffect(() => {
        if (!isInitial && ref!.current!.innerHTML.length !== occupation.length) {
            typingFunction(ref!.current!, occupation);
            return;
        }
        setIsInitial(false);
    }, [isInitial]);

    return (
        <S.Main>
            <div className="centralizer">
                <S.MainContentContainer>
                    <div className="nameLogoContainer">
                        <S.MyInfoContainer>
                            <S.Name>Matheus Vieira</S.Name>
                            <S.Occupation ref={ref}></S.Occupation>
                            <S.SocialMediaContainer>
                                <SocialMediaBox url='https://www.linkedin.com/in/ymatheus-vieira/'>
                                    <Linkedin />
                                </SocialMediaBox>
                                <SocialMediaBox url='https://github.com/math-vieira/'>
                                    <GitHub />
                                </SocialMediaBox>
                                <SocialMediaBox url='https://www.instagram.com/devfourdev/'>
                                    <Instagram />
                                </SocialMediaBox>                               
                            </S.SocialMediaContainer>
                        </S.MyInfoContainer>
                        {!isMobile && <MainLogo />}
                    </div>
                </S.MainContentContainer>
            </div>
        </S.Main>
    );
};

export default Home;
