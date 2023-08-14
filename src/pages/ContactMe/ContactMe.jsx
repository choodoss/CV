import { useState } from "react";
import { Section, OutletBox } from "./ContactMe.styled";
import { sendMessageToTelegram } from "../../util/sendMessage/sendTelegramMessage";
import Contact from "../../component/Contact/Contact";
import FindMe from "../../component/FindMe/FindMe";
import FeedbackForm from "../../component/FeedbackForm/FeedbackForm";
import ContactJSvisualisation from "../../component/ContactJSvisualisation/ContactJSvisualisation";
import Aside from "../../component/Aside/Aside";
import Box from "../../component/Box/Box";

const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const hendleSetParam = ({ target: { value, name } }) => {
        if (name === 'name') setName(value)
        if (name === 'email') setEmail(value)
        if (name === 'message') setMessage(value)
    }
    const hendleOnSubmit = (e) => {
        e.preventDefault();
        const telegramMessage = `New message from CV:\nІм'я: ${name}\nEmail: ${email}\nПовідомлення: ${message}`;
        sendMessageToTelegram(telegramMessage);
    };


    return (<Section>
        <Aside>
            <Contact />
            <FindMe />
        </Aside>
        <OutletBox>
            <Box size={2}><FeedbackForm hendleOnSubmit={hendleOnSubmit} hendleSetParam={hendleSetParam} name={name} email={email} message={message} /></Box>
            <Box size={2}><ContactJSvisualisation name={name} email={email} message={message} /></Box>
        </OutletBox >
    </Section>
    )
};

export default ContactMe;