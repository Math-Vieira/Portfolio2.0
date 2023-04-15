import { useState } from "react";
import ProjectDescription from "./components/ProjectDescription";
import * as S from "./style";
import { ProjectModel } from "./model";


const ProjectCard = (props: ProjectModel) => {
    const [infoVisible, setInfoVisible] = useState<boolean>(false);
    const turnInfoVisibleFalse = () => {
        setInfoVisible(false);
    };
    const turnInfoVisibleTrue = () => {
        setInfoVisible(true);
    };
    return (
        <S.ProjectContainer
            onMouseOut={turnInfoVisibleFalse}
            onMouseOver={turnInfoVisibleTrue}
        >
            {!infoVisible ? (
                <ProjectDescription
                    projectDescription={props.projectDescription}
                    projectImage={props.projectImage}
                    projectName={props.projectName}
                />
            ) : (
                <>
                    <S.ProjectType className="animeLeft">{props.projectType}</S.ProjectType>
                    <S.ProjectStatus className="animeLeft">{props.status}</S.ProjectStatus>
                    <S.ProjectNameAfterHover className="animeLeft">
                        {props.projectName}
                    </S.ProjectNameAfterHover>
                    <S.InfoContainer className="animeLeft">
                        <li>
                            <a
                                href={props.projectRepo}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Repositório
                            </a>
                        </li>
                        {props.projectUrl && (
                            <li>
                                <a
                                    href={props.projectUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Aplicação no ar
                                </a>
                            </li>
                        )}
                    </S.InfoContainer>
                </>
            )}
        </S.ProjectContainer>
    );
};

export default ProjectCard;
