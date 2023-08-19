import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubTitle from "../SubTitle/SubTitle";
import Box from "../Box/Box";
import { Container, Title, SecondTitle, Item, List, Body, Img, TextBody, Text, Link, IconHtml, IconReact, IconSass, IconJs } from "./FilteredProjects.styled";
import { FaReact, FaHtml5, FaSass } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";

import pic1 from '../../img/1.jpg';
import pic2 from '../../img/2.jpg';
import pic3 from '../../img/3.jpg';
import pic4 from '../../img/4.jpg';
import pic5 from '../../img/5.jpg';

const iconHtml = <IconHtml><FaHtml5 style={{ fontSize: "20px" }} /></IconHtml>;
const iconReact = <IconReact><FaReact style={{ fontSize: "20px" }} /></IconReact>;
const iconSass = <IconSass><FaSass style={{ fontSize: "20px" }} /></IconSass>;
const iconJs = <IconJs><DiJavascript1 style={{ fontSize: "20px" }} /></IconJs>;

const FilteredProjects = () => {
    const [filters, setFilters] = useState([]);
    const params = useParams();

    useEffect(() => {
        try {
            const filter = params.filters.split('&')
            setFilters(filter)
        } catch {
            setFilters([])
        }
    }, [params])

    return (
        <Box>
            <SubTitle text={'Projects'} />
            <Container>
                <List>
                    {(filters.length === 0 || filters.includes('HTML' || 'CSS')) && <Item>
                        <Title>Project 1 <SecondTitle>&#47;&#47; Web Studio</SecondTitle></Title>
                        <Body>
                            <Img src={pic1} alt="preview project 1" />
                            <TextBody>
                                <Text>Independent layout creation according to the design.</Text>
                                <Link target="_blank" href="https://choodoss.github.io/goit-markup-hw-08/">view-project</Link>
                            </TextBody>
                            {iconHtml}
                            {iconSass}
                        </Body>
                    </Item>}
                    {(filters.length === 0 || filters.includes('HTML' || 'CSS')) && <Item>
                        <Title>Project 2 <SecondTitle>&#47;&#47; ICE CREAM</SecondTitle></Title>
                        <Body>
                            <Img src={pic2} alt="preview project 2" width="370" />
                            <TextBody>
                                <Text>Team collaboration, my role on the project was a team lead.</Text>
                                <Link target="_blank" href="https://choodoss.github.io/project-group-5/">view-project</Link>
                            </TextBody>
                            {iconHtml}
                            {iconSass}
                        </Body>
                    </Item>}
                    {(filters.length === 0 || filters.includes('JS')) && <Item>
                        <Title>Project 3 <SecondTitle>&#47;&#47; Filmoteka</SecondTitle></Title>
                        <Body>
                            <Img src={pic3} alt="preview project 3" width="370" />
                            <TextBody>
                                <Text>Team collaboration, my role on the project was a team lead.</Text>
                                <Link target="_blank" href="https://choodoss.github.io/project-group-1-js/">view-project</Link>
                            </TextBody>
                            {iconJs}
                        </Body>
                    </Item>}
                    {(filters.length === 0 || filters.includes('React')) && <Item>
                        <Title>Project 4 <SecondTitle>&#47;&#47; Phonebook</SecondTitle></Title>
                        <Body>
                            <Img src={pic4} alt="preview project 4" width="370" />
                            <TextBody>
                                <Text>Independent work, React, Redux Toolkit (RTK), and Material-UI (MUI) for design.</Text>
                                <Link target="_blank" href="https://choodoss.github.io/project-group-1-js/">view-project</Link>
                            </TextBody>
                            {iconReact}
                        </Body>
                    </Item>}
                    {(filters.length === 0 || filters.includes('React')) && <Item>
                        <Title>Project 5<SecondTitle>&#47;&#47; CV</SecondTitle></Title>
                        <Body>
                            <Img src={pic5} alt="preview project 5" width="370" />
                            <TextBody>
                                <Text>Independent work on React, utilized React Router DOM and React Icons, everything else was hand-written.</Text>
                                <Link target="_blank" href="https://choodoss.github.io/project-group-1-js/">view-project</Link>
                            </TextBody>
                            {iconReact}
                        </Body>
                    </Item>}
                </List>
            </Container >
        </Box>)
};

export default FilteredProjects;