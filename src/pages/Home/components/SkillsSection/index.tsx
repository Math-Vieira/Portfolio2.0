import H2 from "../../../../components/H2";
import * as S from "../../style";
import skillJson from "./skills.json";
import SkillRow from "../../../../components/SkillRow";
const { skills } = skillJson;

const skillList = skills.map(e => (
    <SkillRow description={e.description} name={e.name} svg={e.svg} />
));

const SkillsSection = () => {
    return (
        <S.Section id="skills" secondary={true}>
            <H2>Habilidades</H2>
            <div className="centralizer">{skillList}</div>
        </S.Section>
    );
};

export default SkillsSection;
