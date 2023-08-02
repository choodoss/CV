import { TitleAbout } from "../Bio/Bio.styled";
import { List, Item, RoseText, VioletText, OrangeText, Container } from "./ContactJSvisualisation.styled";

const ContactJSvisualisation = ({ name, email, message }) => {

    return (
        <>
            <TitleAbout>contacts</TitleAbout>
            <Container>
                <List>
                    <Item>&nbsp;1&nbsp;&nbsp;&nbsp;<RoseText>const </RoseText><VioletText>button </VioletText> <RoseText>= </RoseText><VioletText>document</VioletText>.<VioletText>querySelector</VioletText>(<OrangeText>"#sendBtn"</OrangeText>);</Item>
                    <Item>&nbsp;2&nbsp;&nbsp;&nbsp;</Item>
                    <Item>&nbsp;3&nbsp;&nbsp;&nbsp;<RoseText>const </RoseText><VioletText>message </VioletText><RoseText>= </RoseText>&#123;</Item>
                    <Item>&nbsp;4&nbsp;&nbsp;&nbsp;<VioletText>name</VioletText>: <OrangeText>"{name}"</OrangeText>,</Item>
                    <Item>&nbsp;5&nbsp;&nbsp;&nbsp;<VioletText>email</VioletText>: <OrangeText>"{email}"</OrangeText>,</Item>
                    <Item>&nbsp;6&nbsp;&nbsp;&nbsp;<VioletText>message</VioletText>: <OrangeText>"{message}"</OrangeText>,</Item>
                    <Item>&nbsp;7&nbsp;&nbsp;&nbsp;<VioletText>date</VioletText>: <OrangeText>"{new Date().toLocaleDateString()}"</OrangeText></Item>
                    <Item>&nbsp;8&nbsp;&nbsp;&nbsp;&#125;</Item>
                    <Item>&nbsp;9&nbsp;&nbsp;&nbsp;</Item>
                    <Item>10&nbsp;&nbsp;&nbsp;<VioletText>button</VioletText>.<VioletText>addEventItemstener</VioletText>(<OrangeText>"cItemck"</OrangeText>, () <RoseText>=&gt;</RoseText> &#123;</Item>
                    <Item>11&nbsp;&nbsp;&nbsp;<VioletText>form</VioletText>.<VioletText>send</VioletText>(<VioletText>message</VioletText>);</Item>
                    <Item>12&nbsp;&nbsp;&nbsp;&#125;)</Item>
                </List>
            </Container>
        </>
    );
};

export default ContactJSvisualisation;