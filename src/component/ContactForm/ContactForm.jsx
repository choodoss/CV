import { TitleAbout } from "../Bio/Bio.styled";
import { Input, Label, InputWrapper, Container, Textarea, Button, Form } from "./ContactForm.styled";


const ContactForm = ({ hendleOnSubmit, hendleSetParam, name, email, message }) => {

    return (<>
        <TitleAbout>contacts</TitleAbout>
        <Container>
            <Form onSubmit={hendleOnSubmit} >
                <InputWrapper>
                    <Label htmlFor="name">_name:</Label>
                    <Input onChange={hendleSetParam}
                        type="text"
                        name="name"
                        id="name"
                        placeholder=" "
                        pattern="^[A-Za-z\u0080-\uFFFF ']+$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        value={name}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="email">_email:</Label>
                    <Input onChange={hendleSetParam}
                        type="email"
                        name="email"
                        id="email"
                        placeholder=" "
                        value={email}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="message">_message:</Label>
                    <Textarea onChange={hendleSetParam}
                        id="message"
                        name="message"
                        rows="6"
                        placeholder=" "
                        value={message}
                    />
                </InputWrapper>
                <Button disabled={!name || !email || !message} type="submit">submit-message</Button>
            </Form>
        </Container>
    </>);
};

export default ContactForm;