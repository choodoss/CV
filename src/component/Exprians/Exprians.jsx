import { TitleAbout } from "../Bio/Bio.styled";
import { Container, Box, Title, Description, DescriptionSpan, DateTime } from "./Exprians.styled";

const Expirians = () => {

    return (
        <>
            <TitleAbout>expirians</TitleAbout>
            <Container>
                <Box>
                    <Title>ERC Distribution</Title>
                    <DateTime>June 2023 - until now</DateTime>
                    <DescriptionSpan>Full-time</DescriptionSpan>
                    <Description></Description>
                </Box>
                <Box>
                    <Title>Odessa National Academy of Telecommunications n.a. O.S. Popov</Title>
                    <Description>master's degree, <DescriptionSpan>Telecommunication systems and networks</DescriptionSpan></Description>
                    <DateTime>2004-2008</DateTime>
                </Box>
                <Box>
                    <Title>Kyiv College of Communication</Title>
                    <Description>vocational education, <DescriptionSpan>Telecommunications and Radio Engineering</DescriptionSpan></Description>
                    <DateTime>2004-2008</DateTime>
                </Box>
            </Container>
        </>)
};

export default Expirians;