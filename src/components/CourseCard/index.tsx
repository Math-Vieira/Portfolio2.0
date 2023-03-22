import * as S from "./style";
import CourseInfo from "./components/CourseInfo";

interface CourseCardModel {
    courseName: string;
    institution: string;
    duration: string;
    instructor: string;
    conclusion: string;
    certificate: string;
}

const CourseCard = (props: CourseCardModel) => {
    return (
        <S.CardContainer>
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
