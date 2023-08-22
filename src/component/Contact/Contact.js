import { RiMailFill, RiPhoneFill } from "react-icons/ri";
import { TitleContacList, TitleContacItem, ContactLink, Container } from "./Contact.styled";
import AsideMainTitle from "../../component/AsideMainTitle/AsideMainTitle";
import { useState } from "react";


const Contact = ({ open = false }) => {
    const [openMenu, setOpenMenu] = useState(open);

    const hendleOpenSubMenu = () => {
        setOpenMenu(prev => !prev);
    };

    return (
        <Container>
            <AsideMainTitle hendleOpenSubMenu={hendleOpenSubMenu} open={openMenu} text={'contacts'} />
            <TitleContacList className={openMenu ? "open" : "close"}>
                <TitleContacItem><ContactLink href="mailto:dimkakhomenko@gmail.com"><RiMailFill style={{ fontSize: "16px" }} /> <span>dimkakhomenko@gmail.com</span> </ContactLink></TitleContacItem>
                <TitleContacItem><ContactLink href="tel:+380674037429"><RiPhoneFill style={{ fontSize: "16px" }} /><span>+38 0674037429</span></ContactLink></TitleContacItem>
            </TitleContacList>
        </Container>)
};

export default Contact;