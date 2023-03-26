import * as S from "./style";
import CourseInfo from "./components/CourseInfo";
import useMediaQuery from "../../hooks/useMediaQuery";
interface CourseCardModel {
    courseName: string;
    institution: string;
    duration: string;
    instructor: string;
    conclusion: string;
    certificate: string;
}

const CourseCard = (props: CourseCardModel) => {
    const isMobile = useMediaQuery("(max-width: 1000px)");
    return (
        <S.CardContainer isMobile={isMobile}>
            <S.H3>{props.courseName}</S.H3>
            <CourseInfo
                institution={props.institution}
                duration={props.duration}
                instructor={props.instructor}
				conclusion={props.conclusion}
				certificate={props.certificate}
            />
        </S.CardContainer>
    );
};

export default CourseCard;
