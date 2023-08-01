import { GoTriangleDown } from "react-icons/go";
import { FiExternalLink } from "react-icons/fi";
import { Title, Item, LinkItem, List, Container } from "./FindMe.styled";

const FindMe = () => {


    return (
        <Container>
            <Title><GoTriangleDown /> <span>find-me-also-in</span></Title>
            <List>
                <Item><LinkItem target="_blank" href="https://www.instagram.com/dmytro_khomenko/"><FiExternalLink style={{ fontSize: "16px" }} /> <span>Instagram accaunt</span> </LinkItem></Item>
                <Item><LinkItem target="_blank" href="https://www.facebook.com/dim4a" ><FiExternalLink style={{ fontSize: "16px" }} /> <span>Facebook accaunt</span> </LinkItem></Item>
                <Item><LinkItem target="_blank" href="https://discord.com/users/choodoss"><FiExternalLink style={{ fontSize: "16px" }} /> <span>Discord profile</span> </LinkItem></Item>
                <Item><LinkItem target="_blank" href="https://www.linkedin.com/in/dmytro-khomenko-97b4b643/"><FiExternalLink style={{ fontSize: "16px" }} /> <span>LinkedIn profile</span> </LinkItem></Item>
            </List>
        </Container>)
};

export default FindMe;