import { TitleAbout } from "../Bio/Bio.styled";
import { EduContainer, EduBox, Title, Description, DateTime, DescriptionSpan } from "./Education.styled";

const Education = () => {

    return (
        <>        <TitleAbout>education</TitleAbout>
            <EduContainer>
                <EduBox>
                    <Title>GoIT</Title>
                    <Description>junior, <DescriptionSpan>Full Stack Developer</DescriptionSpan></Description>
                    <DateTime>2022-2023</DateTime>
                </EduBox>
                <EduBox>
                    <Title>Odessa National Academy of Telecommunications n.a. O.S. Popov</Title>
                    <Description>master's degree, <DescriptionSpan>Telecommunication systems and networks</DescriptionSpan></Description>
                    <DateTime>2004-2008</DateTime>
                </EduBox>
                <EduBox>
                    <Title>Kyiv College of Communication</Title>
                    <Description>vocational education, <DescriptionSpan>Telecommunications and Radio Engineering</DescriptionSpan></Description>
                    <DateTime>2004-2008</DateTime>
                </EduBox>
            </EduContainer></>)
};

export default Education;