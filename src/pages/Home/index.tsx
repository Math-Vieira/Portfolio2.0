import useMediaQuery from "../../hooks/useMediaQuery";
import AboutMeSection from "./components/AboutMeSection";
import ProjectsSection from "./components/ProjectsSection";
import MainComponent from "./components/MainComponent";
import CertificatesSection from "./components/CertificatesSection";
import SkillsSection from "./components/SkillsSection";

const Home = () => {
    const isMobile = useMediaQuery("(max-width: 900px)");

    return (
        <>
            <MainComponent isMobile={isMobile} />
            <AboutMeSection isMobile={isMobile} />
            <ProjectsSection />
            <CertificatesSection />
            <SkillsSection />
        </>
    );
};

export default Home;
