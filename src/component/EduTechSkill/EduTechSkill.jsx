import { nanoid } from "nanoid";
import { EduContainer, List, Item, Title, Text } from "./EduTechSkill.styled";
import SubTitle from "../SubTitle/SubTitle";

const EduTechSkill = () => {
    const skillsAndQualities = [
        "Process Analysis and Improvement", "Content Quality Control and Optimization", "High-Quality Content Creation", "Team Leadership", "Project Management", "Planning and Coordination", "Team Coordination", "Design Team Coordination", "Content Management", "Layout Design", "Problem Solving", "Multitasking", "Creativity and Innovation", "Event Planning", "Stakeholder Relationship Management", "Data Analysis and Reporting", "Technical Skillset", "Project Planning", "Budget Management", "Organization Skills", "Time Management", "Quick Decision-Making in Stressful Conditions", "Professional Responsibility", "Creative Approach", "Communication", "Self-Organization", "High Empathy"];
    const techSkils = ["HTML5/CSS3/SASS", "Responsive/Adaptive design", "git", "JavaScript", "React", "React Nativ", "Redux", "REST API", "Webpack", "Parcel", "Node.js", "Figma", "Zeplin", "Office 365", "Planner", "Trello"];

    return (
        <>
            <SubTitle text={'tech-soft-skills'} />
            <EduContainer>
                <Title>&#47;&#47;tech-skills</Title>
                <List>
                    {techSkils.map((item, index) => (
                        <Item key={nanoid()}>
                            <Text>{index <= 9 ? "\u00a0" : null}{index}:&nbsp;</Text>
                            {item}
                        </Item>
                    ))}
                </List>
                <Title>&#47;&#47;soft-skills</Title>
                <List>
                    {skillsAndQualities.map((item, index) => (
                        <Item key={nanoid()}>
                            <Text>{index <= 9 ? "\u00a0" : null}{index}:&nbsp;</Text>
                            {item}
                        </Item>
                    ))}
                </List>
            </EduContainer></>
    );
};

export default EduTechSkill;