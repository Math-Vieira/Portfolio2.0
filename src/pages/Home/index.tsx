import useMediaQuery from "../../hooks/useMediaQuery";
import AboutMeSection from "./components/AboutMeSection";
import ProjectsSection from "./components/ProjectsSection";
import MainComponent from "./components/MainComponent";

const Home = () => {
    const isMobile = useMediaQuery("(max-width: 900px)");

    return (
        <>
            <MainComponent isMobile={isMobile} />
            <AboutMeSection isMobile={isMobile} />
            <ProjectsSection />
        </>
    );
};

export default Home;
