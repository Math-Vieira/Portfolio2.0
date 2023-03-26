import * as S from "../../style";

interface ProjectDescriptionModel {
    projectName: string;
    projectDescription: string;
    projectImage: string;
}

const ProjectDescription = (props: ProjectDescriptionModel) => {
    return (
        <S.ProjectDescription className="animeLeft" >
			<S.ProjectImage src={props.projectImage} />
            <S.ProjectName>
                {props.projectName}
            </S.ProjectName>
			<S.Paragraph>{props.projectDescription}</S.Paragraph>
        </S.ProjectDescription>
    );
};

export default ProjectDescription;
