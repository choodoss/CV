
import { TitleIsHidden, Section, TitleActive, Aside, Box, TitleMenuList, OutletBox, TitleContacItem, TitleContacList, TitleContact, ContactLink } from "./AboutMe.styled";
import { GoTriangleDown } from "react-icons/go";
import { RiMailFill, RiPhoneFill } from "react-icons/ri";
import TitleMenu from "../../component/TitleMenu/TitleMenu";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Bio from "../../component/Bio/Bio";
import InterestsAbout from "../../component/InterestsAbout/InterestsAbout";
import Education from "../../component/Education/Education";
import EduTechSkill from "../../component/EduTechSkill/EduTechSkill";
import Expirians from "../../component/Exprians/Exprians";

const AboutMe = () => {
    const [actualTitle, setActualTitle] = useState(false);
    console.log(actualTitle)
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === '/about-me') navigate("bio");
        const actualPathName = pathname.split('/');
        setActualTitle(actualPathName[actualPathName.length - 1])
    }, [navigate, pathname]);

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
                <div>
                    <TitleContact><GoTriangleDown /> <span>contacts</span></TitleContact>
                    <TitleContacList>
                        <TitleContacItem><ContactLink href="mailto:dimkakhomenko@gmail.com"><RiMailFill style={{ fontSize: "16px" }} /> <span>dimkakhomenko@gmail.com</span> </ContactLink></TitleContacItem>
                        <TitleContacItem><ContactLink href="tel:+380674037429"><RiPhoneFill style={{ fontSize: "16px" }} /><span>+380674037429</span></ContactLink></TitleContacItem>
                    </TitleContacList>
                </div>
            </Aside>
            <OutletBox>
                {actualTitle === 'bio' ? <Box size={1}><Bio /></Box> : null}
                {actualTitle === 'interests' ? <Box size={1}><InterestsAbout /></Box> : null}
                {actualTitle === 'education' ? <Box size={2}><Education /></Box> : null}
                {actualTitle === 'education' ? <Box size={2}><EduTechSkill /></Box> : null}
                {actualTitle === 'expirians' ? <Box size={1}><Expirians /></Box> : null}
            </OutletBox >
        </Section >)
};

export default AboutMe;