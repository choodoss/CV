import { Text, DevName, DevProfile, TextDownProfile, TextViolet, TextGreen, LinkOrange, Container, Section, TextList, HeadProfile } from "./Home.styled";

const Home = () => {

    return <Section>
        <Container>
            <HeadProfile>
                <Text>Hi all. I am</Text>
                <DevName>Dmytro Khomenko</DevName>
                <DevProfile>> Front-end developer</DevProfile>
            </HeadProfile>
            <TextList>
                <TextDownProfile>//this resume is built with react</TextDownProfile>
                <TextDownProfile>//context is used for language switching</TextDownProfile>
                <TextDownProfile><TextViolet>const</TextViolet><TextGreen> githubLink = </TextGreen><LinkOrange aria-label="Repositories on GitHub" href="https://github.com/choodoss" target="_blank">https://github.com/choodoss</LinkOrange></TextDownProfile>
            </TextList>
        </Container>
    </Section>
};

export default Home;