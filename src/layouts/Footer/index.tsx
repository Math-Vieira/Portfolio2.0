import Form from "./components/Form";
import Header from "./components/Header";
import * as S from "./style";

const Footer = () => {
    return (
        <S.Footer>
            <Header />
            <div className="centralizer">
                <S.ContactContainer>
                    <Form />
                </S.ContactContainer>
            </div>
        </S.Footer>
    );
};

export default Footer;
