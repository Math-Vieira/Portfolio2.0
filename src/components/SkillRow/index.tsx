import * as S from "./style";
import { SkillRowModel } from "./model";
import { useEffect, useRef } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

const SkillRow = (props: SkillRowModel) => {
    const ref = useRef<HTMLDivElement>(null);
    const isMobile = useMediaQuery("(max-width: 900px)");
    useEffect(() => {
        const svgContainer = ref.current;
        if (svgContainer) {
            svgContainer.innerHTML = props.svg;
        }
    }, [props.svg, isMobile]);
    return (
        <S.SkillContainer>
            <S.DescriptionContainer>
                <S.Name>{props.name}</S.Name>
                <S.Description>{props.description}</S.Description>
            </S.DescriptionContainer>
            {!isMobile && <S.SvgContainer ref={ref}></S.SvgContainer>}
        </S.SkillContainer>
    );
};

export default SkillRow;
