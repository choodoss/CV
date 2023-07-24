import { nanoid } from "nanoid";
import { EduContainer, List, Item } from "./EduTechSkill.styled";
import { TitleAbout } from "../Bio/Bio.styled";

const EduTechSkill = () => {
    return (
        <>
            <TitleAbout>tech-skills</TitleAbout>
            <EduContainer>
                <List>
                    {["HTML5/CSS3/SASS", "Responsive/Adaptive design", "git", "JavaScript", "React", "React Nativ", "Redux", "REST API", "Webpack", "Parcel", "Node.js", "Figma", "Zeplin", "Office 360", "Planner", "Trello"].map((item, index) => (
                        <Item key={nanoid()}>
                            <span>{index <= 9 ? "\u00a0" : null}{index}:&nbsp;</span>
                            {item}
                        </Item>
                    ))}
                </List>
            </EduContainer></>
    );
};

export default EduTechSkill;