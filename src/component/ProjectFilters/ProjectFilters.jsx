import { Form, Container, CheckBoxContainer, CheckBoxLabel, CheckBoxInput, CheckBoxCustom } from "./ProjectFilters.styled";
import AsideMainTitle from "../../component/AsideMainTitle/AsideMainTitle";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaReact, FaHtml5, FaSass } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";

const ProjectFilters = () => {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const navigate = useNavigate()
    const hendleSetSelectedFilters = ({ target }) => {
        const filter = target.getAttribute("name");
        if (target.checked) {
            if (!selectedFilters.includes(filter))
                setSelectedFilters(prevFilters => [...prevFilters, filter]);
        }
        if (!target.checked) {
            if (selectedFilters.includes(filter))
                setSelectedFilters(selectedFilters.filter(i => i !== filter));
        }
    };

    useEffect(() => {
        navigate(selectedFilters.join('&'));
    }, [selectedFilters, navigate]);

    return (
        <Container>
            <AsideMainTitle text={"Projects"} />
            <Form onClick={hendleSetSelectedFilters}>
                <CheckBoxContainer>
                    <CheckBoxInput id="checkHTML" type="checkbox" name="HTML" />
                    <CheckBoxCustom></CheckBoxCustom>
                    <CheckBoxLabel htmlFor="checkHTML"><FaHtml5 style={{ fontSize: "20px" }} /><span>HTML</span></CheckBoxLabel>
                </CheckBoxContainer>
                <CheckBoxContainer>
                    <CheckBoxInput id="checkCSS" type="checkbox" name="CSS" />
                    <CheckBoxCustom></CheckBoxCustom>
                    <CheckBoxLabel htmlFor="checkCSS"><FaSass style={{ fontSize: "20px" }} /><span>CSS/SASS</span></CheckBoxLabel>
                </CheckBoxContainer>
                <CheckBoxContainer>
                    <CheckBoxInput id="checkReact" type="checkbox" name="React" />
                    <CheckBoxCustom></CheckBoxCustom>
                    <CheckBoxLabel htmlFor="checkReact"><FaReact style={{ fontSize: "20px" }} /><span>React</span></CheckBoxLabel>
                </CheckBoxContainer>
                <CheckBoxContainer>
                    <CheckBoxInput id="checkJS" type="checkbox" name="JS" />
                    <CheckBoxCustom></CheckBoxCustom>
                    <CheckBoxLabel htmlFor="checkJS"><DiJavascript1 style={{ fontSize: "20px" }} /><span>JavaScript</span></CheckBoxLabel>
                </CheckBoxContainer>
            </Form>
        </Container>)
};

export default ProjectFilters;


