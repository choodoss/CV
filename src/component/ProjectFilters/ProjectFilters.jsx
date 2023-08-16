import { Form, Link, Container, CheckBoxContainer, CheckBoxLabel, CheckBoxInput, CheckBoxCustom } from "./ProjectFilters.styled";
import AsideMainTitle from "../../component/AsideMainTitle/AsideMainTitle";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


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
    }, [selectedFilters]);

    return (
        <Container>
            <AsideMainTitle text={"Projects"} />
            <Form onClick={hendleSetSelectedFilters}>
                <CheckBoxContainer>
                    <CheckBoxInput id="checkHTML" type="checkbox" name="HTML" />
                    <CheckBoxCustom></CheckBoxCustom>
                    <CheckBoxLabel htmlFor="checkHTML">HTML</CheckBoxLabel>
                </CheckBoxContainer>
                <CheckBoxContainer>
                    <CheckBoxInput id="checkCSS" type="checkbox" name="CSS" />
                    <CheckBoxCustom></CheckBoxCustom>
                    <CheckBoxLabel htmlFor="checkCSS">CSS/SASS</CheckBoxLabel>
                </CheckBoxContainer>
                <CheckBoxContainer>
                    <CheckBoxInput id="checkReact" type="checkbox" name="React" />
                    <CheckBoxCustom></CheckBoxCustom>
                    <CheckBoxLabel htmlFor="checkReact">React</CheckBoxLabel>
                </CheckBoxContainer>
                <CheckBoxContainer>
                    <CheckBoxInput id="checkJS" type="checkbox" name="JS" />
                    <CheckBoxCustom></CheckBoxCustom>
                    <CheckBoxLabel htmlFor="checkJS">JavaScript</CheckBoxLabel>
                </CheckBoxContainer>
            </Form>
        </Container>)
};

export default ProjectFilters;


