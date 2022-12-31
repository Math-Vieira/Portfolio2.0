import * as S from "./style";
import { Props } from "./model";

const SocialMediaBox = ({ children, url }: Props) => {
    return (
        <a href={url} target="_blank" rel="noreferrer">
            <S.SocialContainer>{children}</S.SocialContainer>
        </a>
    );
};

export default SocialMediaBox;
