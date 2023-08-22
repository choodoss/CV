import { useState } from "react";
import { Section, OutletBox } from "./ContactMe.styled";
import { sendMessageToTelegram } from "../../util/sendMessage/sendTelegramMessage";
import Contact from "../../component/Contact/Contact";
import FindMe from "../../component/FindMe/FindMe";
import FeedbackForm from "../../component/FeedbackForm/FeedbackForm";
import ContactJSvisualisation from "../../component/ContactJSvisualisation/ContactJSvisualisation";
import Aside from "../../component/Aside/Aside";
import Box from "../../component/Box/Box";
import Message from "../../component/Message/Message";

const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [done, setDone] = useState(false)

    const hendleSetParam = ({ target: { value, name } }) => {
        if (name === 'name') setName(value)
        if (name === 'email') setEmail(value)
        if (name === 'message') setMessage(value)
    }
    const hendleOnSubmit = (e) => {
        e.preventDefault();
        const telegramMessage = `New message from CV:\nІм'я: ${name}\nEmail: ${email}\nПовідомлення: ${message}`;
        sendMessageToTelegram(telegramMessage);
        setDone(prev => !prev);
        setName('');
        setEmail('');
        setMessage('');
    };
    const hendleReset = () => {
        setDone(prev => !prev)
    };

    return (
        <Section>
            <Aside>
                <Contact open={true} />
                <FindMe open={true} />
            </Aside>
            <OutletBox>
                {done ? <Message hendleReset={hendleReset} titleMessage="Thank you! 🤘" textMessage="Your message has been accepted. You will recieve answer really soon!" /> : <Box size={2}><FeedbackForm hendleOnSubmit={hendleOnSubmit} hendleSetParam={hendleSetParam} name={name} email={email} message={message} /></Box>}
                <Box size={2}><ContactJSvisualisation name={name} email={email} message={message} /></Box>
            </OutletBox >
        </Section>
    )
};

export default ContactMe;