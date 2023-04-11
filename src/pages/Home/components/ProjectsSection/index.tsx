import * as S from "../../style";
import H2 from "../../../../components/H2";
import { Carousel } from "../../../../components/Carousel";
import ProjectCard from "../../../../components/ProjectCard";
import portData from "./portData.json";
import Calendar from "../../../../components/Calendar";

const projectCards = portData.projects.map(e => (
    <ProjectCard
        projectType={e.projectType}
        projectName={e.projectName}
        projectRepo={e.projectRepo}
        projectUrl={e.projectUrl}
        status={e.status}
        projectImage={e.projectImage}
        projectDescription={e.projectDescription}
    />
));

const ProjectsSection = () => {
    return (
        <S.Section secondary={true} id="projects">
            <div className="centralizer">
                <H2>Projetos</H2>
                <S.CarouselContainer>
                    <Carousel interval={4000} slides={projectCards} />
                </S.CarouselContainer>
            </div>
            <Calendar />
        </S.Section>
    );
};

export default ProjectsSection;
