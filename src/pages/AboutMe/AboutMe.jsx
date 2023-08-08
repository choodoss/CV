import { TitleIsHidden, Section, TitleActive, Aside, TitleMenuList } from "./AboutMe.styled";
import { GoTriangleDown } from "react-icons/go";
import TitleMenu from "../../component/TitleMenu/TitleMenu";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Contact from "../../component/Contact/Contact";
import { useEffect } from "react";

const AboutMe = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === '/about-me') navigate("bio");
    }, [navigate, pathname]);

    return (
        <Section>
            <TitleIsHidden>About Me</TitleIsHidden>
            <Aside>
                <TitleActive><GoTriangleDown /><span>personal-info</span></TitleActive>
                <TitleMenuList>
                    <TitleMenu color={'orange'} title={'bio'} />
                    <TitleMenu color={'green'} title={'interests'} />
                    <TitleMenu color={'blue'} title={'education'} />
                    <TitleMenu color={'violet'} title={'expirians'} />
                </TitleMenuList>
                <Contact />
            </Aside>
            <Outlet />
        </Section >)
};

export default AboutMe;