import { createContext, useContext, useState } from "react";

const languageContext = createContext();

export const useLangCv = () => useContext(languageContext);

export const LangProvider = ({ children }) => {
    const [selectedLang, setSelectedLang] = useState('en');

    return (
        <languageContext.Provider value={{ selectedLang, setSelectedLang }}>
            {children}
        </languageContext.Provider>
    );
};

export default LangProvider;