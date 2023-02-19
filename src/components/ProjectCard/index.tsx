import { useState } from "react";
import * as S from "./style";

interface ProjectInterface {
    projectName: string;
    projectRepo: string;
    projectUrl?: string;
    projectType: string;
    status: string;
}

const ProjectCard = (props: ProjectInterface) => {
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
            <S.ProjectType>{props.projectType}</S.ProjectType>
            <S.ProjectStatus>{props.status}</S.ProjectStatus>
            {!infoVisible ? (
                <S.ProjectName className="animeLeft">
                    {props.projectName}
                </S.ProjectName>
            ) : (
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
            )}
        </S.ProjectContainer>
    );
};

export default ProjectCard;
