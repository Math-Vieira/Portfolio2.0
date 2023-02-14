import React from "react";
import * as S from "./style";

const ProjectCard = ({ projectName }: { projectName: string }) => {
    return <S.ProjectContainer>{projectName}</S.ProjectContainer>;
};

export default ProjectCard;
