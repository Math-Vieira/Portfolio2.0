import H2 from "../../../../components/H2";
import * as S from "../../style";
import skillJson from "./skills.json";
import SkillRow from "../../../../components/SkillRow";
import { useToggle } from "../../../../hooks/useToggle";
import { GenericButton } from "../../../../components/generics";
const { skills } = skillJson;

const skillList = skills.map(e => (
    <SkillRow
        key={e.name}
        description={e.description}
        name={e.name}
        svg={e.svg}
    />
));

const SkillsSection = () => {
    const { state: seeMore, toggle } = useToggle(false);
    return (
        <S.Section id="skills" secondary={true}>
            <H2>Habilidades</H2>
            <S.SkillsContainer seeMore={seeMore}>
                <div className="centralizer">{skillList}</div>
                <S.SeeMoreContainer>
                    <GenericButton onClick={toggle}>
                        {!seeMore ? "Ver mais" : "Ver menos"}
                    </GenericButton>
                </S.SeeMoreContainer>
            </S.SkillsContainer>
        </S.Section>
    );
};

export default SkillsSection;
