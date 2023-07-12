import info from '../../info/info.json'
import { useLangCv } from '../../hooks/useContext';
import { TitleIsHidden, Section, TitleActive, Aside, Box, TitleMenuList } from "./AboutMe.styled";
import { GoTriangleDown } from "react-icons/go";
import TitleMenu from "../../component/TitleMenu/TitleMenu";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Bio from "../../component/Bio/Bio";
import InterestsAbout from "../../component/InterestsAbout/InterestsAbout";

const AboutMe = () => {
    const [actualTitle, setActualTitle] = useState(false);
    const { selectedLang } = useLangCv();

    console.log(info.aboutMe[selectedLang].map(i => i.bio))

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
                <TitleActive><GoTriangleDown /> <span>{info.aboutMe[selectedLang][0].bio.title}</span></TitleActive>
                <TitleMenuList>
                    {/* {Object.entries(info.aboutMe[selectedLang].map(i => (
                        <TitleMenu color={i.color} title={i.title} />
                    )))} */}
                    {/* {info.aboutMe[selectedLang].map(i => <TitleMenu color={i.color} title={Object.keys(i).join('')} />)} */}
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
            <Box>
                {actualTitle === 'bio' ? <Bio /> : null}
                {actualTitle === 'interests' ? <InterestsAbout /> : null}
            </Box>
        </Section>)
};

export default AboutMe;

