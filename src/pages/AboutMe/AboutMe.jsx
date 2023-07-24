
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

const AboutMe = () => {
    const [actualTitle, setActualTitle] = useState(false);

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
                    <TitleMenu color={'violet'} title={'exprians'} />
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
                <Box>
                    {actualTitle === 'bio' ? <Bio /> : null}
                    {actualTitle === 'interests' ? <InterestsAbout /> : null}
                    {actualTitle === 'education' ? <Education /> : null}
                </Box>
                <Box>
                    {actualTitle === 'bio' ? <Bio /> : null}
                    {actualTitle === 'interests' ? <InterestsAbout /> : null}
                    {actualTitle === 'education' ? <EduTechSkill /> : null}
                </Box>
            </OutletBox>
        </Section >)
};

export default AboutMe;