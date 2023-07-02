import { LinkItem, LinkList, LinkPage, Nav, LinkIcon, Text, LinkGitHub } from "./Footer.styled";
import { FaLinkedinIn, FaFacebookF, FaDiscord, FaGithub } from "react-icons/fa";

const Footer = () => {

    return (<Nav>
        <LinkList>
            <LinkItem><LinkPage to='/' end>find me in:</LinkPage></LinkItem>
            <LinkItem><LinkIcon to='/'><FaLinkedinIn style={{ fontSize: "24px" }} /></LinkIcon></LinkItem>
            <LinkItem><LinkIcon to='/about-me'><FaFacebookF style={{ fontSize: "24px" }} /></LinkIcon></LinkItem>
            <LinkItem><LinkIcon to='/about-me'><FaDiscord style={{ fontSize: "24px" }} /></LinkIcon></LinkItem>
            <LinkItem><LinkGitHub to='/projects'><Text>@choodoss</Text> <FaGithub style={{ fontSize: "24px" }} /></LinkGitHub></LinkItem>
        </LinkList>
    </Nav>)
};

export default Footer;