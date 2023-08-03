import { TitleAbout } from "../Bio/Bio.styled";
import { List, Item, RoseText, VioletText, OrangeText, Container, Text } from "./ContactJSvisualisation.styled";

const ContactJSvisualisation = ({ name, email, message }) => {

    return (
        <>
            <TitleAbout>contacts</TitleAbout>
            <Container>
                <List>
                    <Item>&nbsp;1<Text><RoseText>const </RoseText><VioletText>button </VioletText> <RoseText>= </RoseText><VioletText>document</VioletText>.<VioletText>querySelector</VioletText>(<OrangeText>"#sendBtn"</OrangeText>);</Text></Item>
                    <Item>&nbsp;2</Item>
                    <Item>&nbsp;3<Text><RoseText>const </RoseText><VioletText>message </VioletText><RoseText>= </RoseText>&#123;</Text></Item>
                    <Item>&nbsp;4<Text><VioletText>name</VioletText>: <OrangeText>"{name}"</OrangeText>,</Text></Item>
                    <Item>&nbsp;5<Text><VioletText>email</VioletText>: <OrangeText>"{email}"</OrangeText>,</Text></Item>
                    <Item>&nbsp;6<Text><VioletText>message</VioletText>: <OrangeText>"{message}"</OrangeText>,</Text></Item>
                    <Item>&nbsp;7<Text><VioletText>date</VioletText>: <OrangeText>"{new Date().toLocaleDateString()}"</OrangeText></Text></Item>
                    <Item>&nbsp;8<Text>&#125;</Text></Item>
                    <Item>&nbsp;9<Text></Text></Item>
                    <Item>10<Text><VioletText>button</VioletText>.<VioletText>addEventListener</VioletText>(<OrangeText>"click"</OrangeText>, () <RoseText>=&gt;</RoseText> &#123;</Text></Item>
                    <Item>11<Text><VioletText>form</VioletText>.<VioletText>send</VioletText>(<VioletText>message</VioletText>);</Text></Item>
                    <Item>12<Text>&#125;)</Text></Item>
                </List>
            </Container>
        </>
    );
};

export default ContactJSvisualisation;