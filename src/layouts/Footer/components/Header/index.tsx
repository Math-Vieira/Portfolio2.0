import * as S from "../../style";
import H2SvgIcon from "../../../../assets/svgComponents/H2SvgIcon";

const Header = () => {
    return (
        <div className="centralizer">
            <S.H2Container>
                <H2SvgIcon />
                <h2>Contato</h2>
            </S.H2Container>
        </div>
    );
};

export default Header;
