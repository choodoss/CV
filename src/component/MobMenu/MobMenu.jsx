import Footer from "../Foooter/Footer";
import { LinkItem, LinkList, Container, LinkPage } from "./MobMenu.styled";

const MobMenu = ({ closeMenu }) => {

    return (
        <Container>
            <LinkList>
                <LinkItem><LinkPage onClick={closeMenu} to="/">_hello</LinkPage></LinkItem>
                <LinkItem><LinkPage onClick={closeMenu} to='/about-me'>_about-me</LinkPage></LinkItem>
                <LinkItem><LinkPage onClick={closeMenu} to='/projects'>_projects</LinkPage></LinkItem>
                <LinkItem><LinkPage onClick={closeMenu} to='/contact-me'>_contact-me</LinkPage></LinkItem>
            </LinkList>
            <Footer />
        </Container>
    );
};

export default MobMenu;

