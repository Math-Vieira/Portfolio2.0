import * as S from '../../style';
import H2 from '../../../../components/H2';
import experiencesJson from './experiences.json';

const coursesSlideArray = experiencesJson.experiences.map(e => (
    <S.ExperienceContainer key={e.company}>
        <S.ExperienceTitle>{e.company}</S.ExperienceTitle>
        <p>{e.description}</p>
        <S.ExperienceFooter>
            <S.ExperienceDuration>
                {e.start} - {e.end}
            </S.ExperienceDuration>
            <a href={e.linkedin} target='_blank' rel='noreferrer'>
                Linkedin
            </a>
        </S.ExperienceFooter>
    </S.ExperienceContainer>
));

const ExperienceSection = () => {
    return (
        <S.Section secondary id='experiences'>
            <div className='centralizer'>
                <H2>Experiências</H2>
                <S.ExperiencesContainer>
                    {coursesSlideArray}
                </S.ExperiencesContainer>
            </div>
        </S.Section>
    );
};

export default ExperienceSection;
