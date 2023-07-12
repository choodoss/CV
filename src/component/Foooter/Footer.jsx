import { LinkItem, LinkList, FootText, Nav, LinkIcon, Text, LinkGitHub } from "./Footer.styled";
import { FaLinkedinIn, FaFacebookF, FaDiscord, FaGithub } from "react-icons/fa";

const Footer = () => {

    return (<Nav>
        <LinkList>
            <LinkItem><FootText>find me in:</FootText></LinkItem>
            <LinkItem><LinkIcon aria-label="LinkedIn" href="https://www.linkedin.com/in/dmytro-khomenko-97b4b643/" target="_blank"><FaLinkedinIn style={{ fontSize: "24px" }} /></LinkIcon></LinkItem>
            <LinkItem><LinkIcon aria-label="Facebook" href="https://www.facebook.com/dim4a" target="_blank"><FaFacebookF style={{ fontSize: "24px" }} /></LinkIcon></LinkItem>
            <LinkItem><LinkIcon aria-label="Discord" href="https://discord.com/users/choodoss" target="_blank"><FaDiscord style={{ fontSize: "24px" }} /></LinkIcon></LinkItem>
            <LinkItem><LinkGitHub aria-label="GitHub" href="https://github.com/choodoss" target="_blank"><Text>@choodoss</Text> <FaGithub style={{ fontSize: "24px" }} /></LinkGitHub></LinkItem>
        </LinkList>
    </Nav>)
};

export default Footer;