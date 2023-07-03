import { TitleIsHidden, Section, TextAbout, TitleAbout, TitleActive, Aside, Box, SecondTitleActive, TitleBioFolderIconWrapperOrange, TitleBioArrowIconWrapper, TitleBioFolderIconWrapperViolet, TitleBioFolderIconWrapperSame } from "./AboutMe.styled";
import { GoTriangleDown } from "react-icons/go";
import { PiFolderNotchFill } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import TitleMenu from "../../component/TitleMenu/TitleMenu";

const AboutMe = () => {

    return (
        <Section>
            <TitleIsHidden>About Me</TitleIsHidden>
            <Aside>
                <TitleActive><GoTriangleDown /> <span>personal-info</span></TitleActive>
                <ul>
                    <TitleMenu active={true} color={'orange'} title={'bio'} />
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
                </ul>
            </Aside>
            <Box>
                <div><TitleAbout>personal-info</TitleAbout></div>
                <TextAbout>/**
                    * About me
                    * I have 5 years of еxperience in web
                    * development lorem ipsum dolor sit amet,
                    * consectetur adipiscing elit, sed do eiusmod
                    * tempor incididunt ut labore et dolore
                    * magna aliqua. Ut enim ad minim veniam,
                    * quis nostrud exercitation ullamco laboris
                    * nisi ut aliquip ex ea commodo consequat.
                    * Duis aute irure dolor in reprehenderit in
                    *
                    * Duis aute irure dolor in reprehenderit in
                    * voluptate velit esse cillum dolore eu fugiat
                    * nulla pariatur. Excepteur sint occaecat
                    * officia deserunt mollit anim id est laborum.
                    */</TextAbout>
            </Box>
        </Section>)
};

export default AboutMe;