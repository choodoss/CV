import { RiMailFill, RiPhoneFill } from "react-icons/ri";
import { TitleContacList, TitleContacItem, ContactLink, Container } from "./Contact.styled";
import AsideMainTitle from "../../component/AsideMainTitle/AsideMainTitle";


const Contact = () => {

    return (
        <Container>
            <AsideMainTitle text={'contacts'} />
            <TitleContacList>
                <TitleContacItem><ContactLink href="mailto:dimkakhomenko@gmail.com"><RiMailFill style={{ fontSize: "16px" }} /> <span>dimkakhomenko@gmail.com</span> </ContactLink></TitleContacItem>
                <TitleContacItem><ContactLink href="tel:+380674037429"><RiPhoneFill style={{ fontSize: "16px" }} /><span>+38 0674037429</span></ContactLink></TitleContacItem>
            </TitleContacList>
        </Container>)
};

export default Contact;