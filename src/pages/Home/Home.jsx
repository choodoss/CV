import info from '../../info/info.json'
import { useLangCv } from '../../hooks/useContext';
import { Text, DevName, DevProfile, TextDownProfile, TextViolet, TextGreen, LinkOrange, Container, Section, TextList, HeadProfile } from "./Home.styled";

const Home = () => {
    const { selectedLang } = useLangCv();
    return <Section>
        <Container>
            <HeadProfile>
                <Text>{info.home.hiText[selectedLang]}</Text>
                <DevName>{info.home.devName[selectedLang]}</DevName>
                <DevProfile>{info.home.DevProfile[selectedLang]}</DevProfile>
            </HeadProfile>
            <TextList>
                <TextDownProfile>{info.home.TextDownProfile1[selectedLang]}</TextDownProfile>
                <TextDownProfile>{info.home.TextDownProfile2[selectedLang]}</TextDownProfile>
                <TextDownProfile><TextViolet>const</TextViolet><TextGreen> githubLink = </TextGreen><LinkOrange aria-label="Repositories on GitHub" href={info.home.TextDownProfileLink} target="_blank">{info.home.TextDownProfileLink}</LinkOrange></TextDownProfile>
            </TextList>
        </Container>
    </Section>
};

export default Home;