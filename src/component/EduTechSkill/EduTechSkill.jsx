import { nanoid } from "nanoid";
import { EduContainer, List, Title, Item } from "./EduTechSkill.styled";

const EduTechSkill = () => {
    return (
        <EduContainer>
            <Title>TECH SKILLS</Title>
            <List>
                {["HTML5/CSS3/SASS", "Responsive/Adaptive design", "git", "JavaScript", "React", "React Nativ", "Redux", "REST API", "Webpack", "Parcel", "Node.js"].map((item, index) => (
                    <Item key={nanoid()}>
                        <span>{index > 9 ? index : " " + index}: </span>
                        {item}
                    </Item>
                ))}
            </List>
        </EduContainer>
    );
};

export default EduTechSkill;