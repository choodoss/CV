
import { TitleIsHidden, Section, TitleActive, Aside, TitleMenuList } from "./AboutMe.styled";
import { GoTriangleDown } from "react-icons/go";
import TitleMenu from "../../component/TitleMenu/TitleMenu";
// import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
// import Bio from "../../component/Bio/Bio";
// import InterestsAbout from "../../component/InterestsAbout/InterestsAbout";
// import Education from "../../component/Education/Education";
// import EduTechSkill from "../../component/EduTechSkill/EduTechSkill";
// import Expirians from "../../component/Exprians/Exprians";
import Contact from "../../component/Contact/Contact";

const AboutMe = () => {
    // const [actualTitle, setActualTitle] = useState(false);
    // const navigate = useNavigate();
    // const { pathname } = useLocation();

    // useEffect(() => {
    //     if (pathname === '/about-me') navigate("bio");
    //     const actualPathName = pathname.split('/');
    //     setActualTitle(actualPathName[actualPathName.length - 1])
    // }, [navigate, pathname]);

    return (
        <Section>
            <TitleIsHidden>About Me</TitleIsHidden>
            <Aside>
                <TitleActive><GoTriangleDown /> <span>personal-info</span></TitleActive>
                <TitleMenuList>
                    <TitleMenu color={'orange'} title={'bio'} />
                    <TitleMenu color={'green'} title={'interests'} />
                    <TitleMenu color={'blue'} title={'education'} />
                    <TitleMenu color={'violet'} title={'expirians'} />
                </TitleMenuList>
                <Contact />
            </Aside>
            <Outlet />
            {/* <OutletBox>
                {actualTitle === 'bio' ? <Box size={1}><Bio /></Box> : null}
                {actualTitle === 'interests' ? <Box size={1}><InterestsAbout /></Box> : null}
                {actualTitle === 'education' ? <Box size={2}><Education /></Box> : null}
                {actualTitle === 'education' ? <Box size={2}><EduTechSkill /></Box> : null}
                {actualTitle === 'expirians' ? <Box size={1}><Expirians /></Box> : null}
            </OutletBox > */}
        </Section >)
};

export default AboutMe;