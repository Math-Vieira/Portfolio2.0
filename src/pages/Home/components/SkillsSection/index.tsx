import H2 from "../../../../components/H2";
import * as S from "../../style";
import skillJson from "./skills.json";
import SkillRow from "../../../../components/SkillRow";
import { useToggle } from "../../../../hooks/useToggle";
const { skills } = skillJson;

const skillList = skills.map(e => (
    <SkillRow description={e.description} name={e.name} svg={e.svg} />
));

const SkillsSection = () => {
    const { state: seeMore, toggle } = useToggle(false);
    return (
        <S.Section id="skills" secondary={true}>
            <H2>Habilidades</H2>
            <S.SkillsContainer seeMore={seeMore}>
                <div className="centralizer">{skillList}</div>
                <S.SeeMoreContainer>
                    <S.GenericButton onClick={toggle}>
                        {!seeMore ? "Ver mais" : "Ver menos"}
                    </S.GenericButton>
                </S.SeeMoreContainer>
            </S.SkillsContainer>
        </S.Section>
    );
};

export default SkillsSection;
