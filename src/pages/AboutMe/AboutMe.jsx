import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { TitleIsHidden, Section, TitleMenuList } from "./AboutMe.styled";
import TitleMenu from "../../component/TitleMenu/TitleMenu";
import Contact from "../../component/Contact/Contact";
import Aside from "../../component/Aside/Aside";
import AsideMainTitle from "../../component/AsideMainTitle/AsideMainTitle";

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
                <AsideMainTitle text={'info'} />
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