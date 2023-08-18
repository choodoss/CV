import SubTitle from "../SubTitle/SubTitle";
import Box from "../Box/Box";
import { Container, Title, SecondTitle, Item, List, Body, Img, TextBody, Text, Link, Icon } from "./FilteredProjects.styled";
import { FaReact } from "react-icons/fa";
import pic1 from '../../img/1.jpg';

const FilteredProjects = () => {


    return (
        <Box>
            <SubTitle text={'Projects'} />
            <Container>
                <List>
                    <Item>
                        <Title>Project 1 <SecondTitle>&#47;&#47; Web Studio</SecondTitle></Title>
                        <Body>
                            <Img src={pic1} alt="preview project 1" />
                            <TextBody>
                                <Text>Duis aute irure dolor in velit esse cillum dolore.</Text>
                                <Link target="_blank" href="https://choodoss.github.io/goit-markup-hw-08/">view-project</Link>
                            </TextBody>
                            <Icon><FaReact style={{ fontSize: "28px" }} /></Icon>
                        </Body>
                    </Item>
                    <Item>
                        <Title>Project 1 <SecondTitle>&#47;&#47; _ui-animations</SecondTitle></Title>
                        <Body>
                            <Img src={pic1} alt="preview project 1" />
                            <TextBody>
                                <Text>Duis aute irure dolor in velit esse cillum dolore.</Text>
                                <Link target="_blank" href="https://choodoss.github.io/goit-markup-hw-08/">view-project</Link>
                            </TextBody>
                        </Body>
                    </Item>                    <Item>
                        <Title>Project 1 <SecondTitle>&#47;&#47; _ui-animations</SecondTitle></Title>
                        <Body>
                            <Img src={pic1} alt="preview project 1" />
                            <TextBody>
                                <Text>Duis aute irure dolor in velit esse cillum dolore.</Text>
                                <Link target="_blank" href="https://choodoss.github.io/goit-markup-hw-08/">view-project</Link>
                            </TextBody>
                        </Body>
                    </Item>                    <Item>
                        <Title>Project 1 <SecondTitle>&#47;&#47; _ui-animations</SecondTitle></Title>
                        <Body>
                            <Img src={pic1} alt="preview project 1" />
                            <TextBody>
                                <Text>Duis aute irure dolor in velit esse cillum dolore.</Text>
                                <Link target="_blank" href="https://choodoss.github.io/goit-markup-hw-08/">view-project</Link>
                            </TextBody>
                        </Body>
                    </Item>
                </List>
            </Container >
        </Box>)
};

export default FilteredProjects;