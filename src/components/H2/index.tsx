import React from "react";
import H2SvgIcon from "../../assets/svgComponents/H2SvgIcon";
import * as S from "./style";

const H2 = ({ children }: { children: React.ReactNode }) => {
    return (
        <S.H2Container>
            <H2SvgIcon />
            <h2>{children}</h2>
            <H2SvgIcon />
        </S.H2Container>
    );
};

export default H2;
