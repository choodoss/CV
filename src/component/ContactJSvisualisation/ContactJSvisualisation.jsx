import SubTitle from "../SubTitle/SubTitle";
import { List, Item, RoseText, VioletText, OrangeText, Container, Text, Section } from "./ContactJSvisualisation.styled";

const ContactJSvisualisation = ({ name, email, message }) => {

    return (
        <Section>
            <SubTitle text={'send-to-telegram'} />
            <Container>
                <List>
                    <Item>&nbsp;1<Text><RoseText>const&nbsp;</RoseText><VioletText>button&nbsp;</VioletText> <RoseText>=&nbsp;</RoseText><VioletText>document</VioletText>.<VioletText>querySelector</VioletText>(<OrangeText>"#sendBtn"</OrangeText>);</Text></Item>
                    <Item>&nbsp;2</Item>
                    <Item>&nbsp;3<Text><RoseText>const&nbsp;</RoseText><VioletText>message&nbsp;</VioletText><RoseText>=&nbsp;</RoseText>&#123;</Text></Item>
                    <Item>&nbsp;4<Text><VioletText>name</VioletText>:&nbsp;<OrangeText>"{name}"</OrangeText>,</Text></Item>
                    <Item>&nbsp;5<Text><VioletText>email</VioletText>:&nbsp;<OrangeText>"{email}"</OrangeText>,</Text></Item>
                    <Item>&nbsp;6<Text><VioletText>message</VioletText>:&nbsp;<OrangeText>"{message}"</OrangeText>,</Text></Item>
                    <Item>&nbsp;7<Text><VioletText>date</VioletText>:&nbsp;<OrangeText>"{new Date().toLocaleDateString()}"</OrangeText></Text></Item>
                    <Item>&nbsp;8<Text>&#125;</Text></Item>
                    <Item>&nbsp;9<Text></Text></Item>
                    <Item>10<Text><VioletText>button</VioletText>.<VioletText>addEventListener</VioletText>(<OrangeText>"click"</OrangeText>,&nbsp;()&nbsp;<RoseText>=&gt;</RoseText>&nbsp;&#123;</Text></Item>
                    <Item>11<Text><VioletText>form</VioletText>.<VioletText>send</VioletText>(<VioletText>message</VioletText>);</Text></Item>
                    <Item>12<Text>&#125;)</Text></Item>
                </List>
            </Container>
        </Section>
    );
};

export default ContactJSvisualisation;