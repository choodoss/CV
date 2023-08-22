import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { TitleIsHidden, Section } from "./AboutMe.styled";
import Contact from "../../component/Contact/Contact";
import Aside from "../../component/Aside/Aside";
import Info from "../../component/Info/Info";


const AboutMe = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === '/about-me') navigate("bio");
    }, [navigate, pathname]);


    return (
        <Section>
            <TitleIsHidden>_about-me</TitleIsHidden>
            <Aside>
                <Info />
                <Contact />
            </Aside>
            <Outlet />
        </Section >)
};

export default AboutMe;



