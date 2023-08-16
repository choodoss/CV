import { Outlet } from "react-router-dom";
import Aside from "../../component/Aside/Aside";
import Box from "../../component/Box/Box";
import { OutletBox, Section } from "./Projects.styled";
import { TitleIsHidden } from "../AboutMe/AboutMe.styled";
import ProjectFilters from "../../component/ProjectFilters/ProjectFilters";

const Projects = () => {

    return (<Section>
        <TitleIsHidden>Projects</TitleIsHidden>
        <Aside>
            <ProjectFilters />
        </Aside>
        <OutletBox>
            <Outlet />
        </OutletBox >
    </Section>)
};

export default Projects;