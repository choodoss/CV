import Box from "../Box/Box";
import SubTitle from "../SubTitle/SubTitle";
import { EduContainer, EduBox, Title, Description, DateTime, DescriptionSpan } from "./Education.styled";
import EduTechSkill from "../EduTechSkill/EduTechSkill";
const Education = () => {

    return (<>
        <Box size={2}>
            <SubTitle text={'education'} />
            <EduContainer>
                <EduBox>
                    <Title>GoIT</Title>
                    <Description><DescriptionSpan>Full Stack Developer</DescriptionSpan></Description>
                    <DateTime>2022-2023</DateTime>
                </EduBox>
                <EduBox>
                    <Title>Odessa National Academy of Telecommunications n.a. O.S. Popov</Title>
                    <Description>master's degree, <DescriptionSpan>Telecommunication systems and networks</DescriptionSpan></Description>
                    <DateTime>2011-2012</DateTime>
                </EduBox>
                <EduBox>
                    <Title>Odessa National Academy of Telecommunications n.a. O.S. Popov</Title>
                    <Description>bachelor degree, <DescriptionSpan>Telecommunication systems and networks</DescriptionSpan></Description>
                    <DateTime>2008-2011</DateTime>
                </EduBox>
                <EduBox>
                    <Title>Kyiv College of Communication</Title>
                    <Description>vocational education, <DescriptionSpan>Telecommunications and Radio Engineering</DescriptionSpan></Description>
                    <DateTime>2004-2008</DateTime>
                </EduBox>
            </EduContainer>
        </Box>
        <Box size={2}>
            <EduTechSkill />
        </Box>
    </>)
};

export default Education;