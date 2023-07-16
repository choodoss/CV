
import { TitleIsHidden, Section, TitleActive, Aside, Box, TitleMenuList, OutletBox } from "./AboutMe.styled";
import { GoTriangleDown } from "react-icons/go";
import TitleMenu from "../../component/TitleMenu/TitleMenu";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Bio from "../../component/Bio/Bio";
import InterestsAbout from "../../component/InterestsAbout/InterestsAbout";
import Education from "../../component/Education/Education";

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
                    <div>
                        <p>contacts</p>
                        <ul>
                            <li>user@gmail.com</li>
                            <li>+3598246359</li>
                        </ul>
                    </div>
                </TitleMenuList>
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
                </Box>
            </OutletBox>
        </Section>)
};

export default AboutMe;