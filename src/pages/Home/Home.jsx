import { Text, DevName, DevProfile, TextDownProfile, TextViolet, TextGreen, LinkOrange, Container, Section, TextList, HeadProfile, BlueLight, GreenLight } from "./Home.styled";

const Home = () => {

    return <Section>
        <BlueLight>
        </BlueLight>
        <GreenLight>
        </GreenLight>
        <Container>
            <HeadProfile>
                <Text>Hi all. I am</Text>
                <DevName>Dmytro Khomenko</DevName>
                <DevProfile>> Front-end developer</DevProfile>
            </HeadProfile>
            <TextList>
                <TextDownProfile>complete the game to continue</TextDownProfile>
                <TextDownProfile>you can also see it on my Github page</TextDownProfile>
                <TextDownProfile><TextViolet>const</TextViolet><TextGreen> githubLink = </TextGreen><LinkOrange aria-label="Repositories on GitHub" href="https://github.com/choodoss" target="_blank">“https://github.com/choodoss”</LinkOrange></TextDownProfile>
            </TextList>
        </Container>
    </Section>
};

export default Home;