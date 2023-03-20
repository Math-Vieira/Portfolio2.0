import * as S from "../../style";
import H2 from "../../../../components/H2";
import { Carousel } from "../../../../components/Carousel";
import ProjectCard from "../../../../components/ProjectCard";

interface MainComponent {
    isMobile: boolean;
}

const ProjectsSection = () => {
    return (
        <S.Section secondary={true} id="projects">
            <div className="centralizer">
                <H2>PROJETOS</H2>
            </div>
            <S.CarouselContainer>
                <Carousel
                    interval={4000}
                    arrows={false}
                    slides={[
                        <ProjectCard
                            projectType="Front-end"
                            projectName="Portfólio 2.0"
                            projectRepo="https://github.com/Math-Vieira/Portfolio2.0"
                            projectUrl="https://portfolio2-0-lime.vercel.app/"
                            status="Em andamento"
                        />,
                        <ProjectCard
                            projectType="Front-end"
                            projectName="Deezer app"
                            projectRepo="https://github.com/Math-Vieira/deezer-app"
                            projectUrl="https://deezer-app-mv.vercel.app/"
                            status="Concluído"
                        />,
                        <ProjectCard
                            projectType="Back-end"
                            projectName="Deezer api consumer"
                            projectRepo="https://github.com/Math-Vieira/deezer-api-consumer"
                            status="Concluído"
                        />,
                    ]}
                />
            </S.CarouselContainer>
        </S.Section>
    );
};

export default ProjectsSection;
