import { useState } from "react";
import Contact from "../../component/Contact/Contact";
import FindMe from "../../component/FindMe/FindMe";
import { Aside } from "../AboutMe/AboutMe.styled";
import { Section, OutletBox, Box } from "./ContactMe.styled";
import ContactForm from "../../component/ContactForm/ContactForm";
import ContactJSvisualisation from "../../component/ContactJSvisualisation/ContactJSvisualisation";

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
        console.log(e)
    };


    return (<Section>
        <Aside>
            <Contact />
            <FindMe />
        </Aside>
        <OutletBox>
            <Box size={2}><ContactForm hendleOnSubmit={hendleOnSubmit} hendleSetParam={hendleSetParam} name={name} email={email} message={message} /></Box>
            <Box size={2}><ContactJSvisualisation name={name} email={email} message={message} /></Box>
        </OutletBox >
    </Section>
    )
};

export default ContactMe;