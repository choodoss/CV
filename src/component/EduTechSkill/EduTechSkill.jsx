import { nanoid } from "nanoid";
import { EduContainer, List, Item } from "./EduTechSkill.styled";
import SubTitle from "../SubTitle/SubTitle";

const EduTechSkill = () => {
    return (
        <>
            <SubTitle text={'tech-skills'} />
            <EduContainer>
                <List>
                    {["HTML5/CSS3/SASS", "Responsive/Adaptive design", "git", "JavaScript", "React", "React Nativ", "Redux", "REST API", "Webpack", "Parcel", "Node.js", "Figma", "Zeplin", "Office 365", "Planner", "Trello"].map((item, index) => (
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