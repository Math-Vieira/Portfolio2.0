import * as S from "../../style";
import H2 from "../../../../components/H2";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper";
import CourseCard from "../../../../components/CourseCard";
import coursesJson from "./courses.json";
import useMediaQuery from "../../../../hooks/useMediaQuery";

const coursesSlideArray = coursesJson.courses.map(e => (
    <SwiperSlide key={e.courseName} className="d-flex j-center margin-5px-top-bottom">
        <CourseCard
            courseName={e.courseName}
            institution={e.institution}
            duration={e.duration}
            instructor={e.instructor}
            certificate={e.certificate}
            conclusion={e.conclusion}
        />
    </SwiperSlide>
));

const CoursesSection = () => {
    const isMobile = useMediaQuery("(max-width: 1000px)");
    return (
        <S.Section id="courses">
            <div className="centralizer pb-5">
                <H2>Cursos</H2>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper mySmokeSwiper"
                    slidesPerView={isMobile ? 1 : 3}
                >
                    {coursesSlideArray}
                </Swiper>
            </div>
        </S.Section>
    );
};

export default CoursesSection;
