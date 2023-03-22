import * as S from "../../style";

interface CourseInfoModel {
    institution: string;
    duration: string;
    instructor: string;
    conclusion: string;
    certificate: string;
}

const CourseInfo = (props: CourseInfoModel) => {
    return (
        <>
            <S.InfoRow>
                Instituição: <span>{props.institution}</span>
            </S.InfoRow>
            <S.InfoRow>
                Duração: <span>{props.duration}</span>
            </S.InfoRow>
            <S.InfoRow>
                Instrutor: <span>{props.instructor}</span>
            </S.InfoRow>
            <S.InfoRow>
                Ano de conclusão: <span>{props.conclusion}</span>
            </S.InfoRow>
            <S.InfoRow>
                Certificado: {" "}
                <span>
                    <a href={props.certificate} target="_blank">
                        Clique aqui
                    </a>
                </span>
            </S.InfoRow>
        </>
    );
};

export default CourseInfo;
