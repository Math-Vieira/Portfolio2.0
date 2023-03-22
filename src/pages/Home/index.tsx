import useMediaQuery from "../../hooks/useMediaQuery";
import AboutMeSection from "./components/AboutMeSection";
import ProjectsSection from "./components/ProjectsSection";
import MainComponent from "./components/MainComponent";
import CoursesSection from "./components/CoursesSection";

const Home = () => {
    const isMobile = useMediaQuery("(max-width: 900px)");

    return (
        <>
            <MainComponent isMobile={isMobile} />
            <AboutMeSection isMobile={isMobile} />
            <ProjectsSection />
            <CoursesSection />
        </>
    );
};

export default Home;
