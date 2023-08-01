import { GoTriangleDown } from "react-icons/go";
import { RiMailFill, RiPhoneFill } from "react-icons/ri";
import { TitleContact, TitleContacList, TitleContacItem, ContactLink, Container } from "./Contact.styled";

const Contact = () => {


    return (
        <Container>
            <TitleContact><GoTriangleDown /> <span>contacts</span></TitleContact>
            <TitleContacList>
                <TitleContacItem><ContactLink href="mailto:dimkakhomenko@gmail.com"><RiMailFill style={{ fontSize: "16px" }} /> <span>dimkakhomenko@gmail.com</span> </ContactLink></TitleContacItem>
                <TitleContacItem><ContactLink href="tel:+380674037429"><RiPhoneFill style={{ fontSize: "16px" }} /><span>+380674037429</span></ContactLink></TitleContacItem>
            </TitleContacList>
        </Container>)
};

export default Contact;