import React from "react";

const LanguageContext = React.createContext();

export const LanguageContextProvider = ({ children }) => {

    const [language, setLanguage] = React.useState("ar");

    return (<LanguageContext.Provider
        value={{
            language, setLanguage
        }}
    >
        {children}
    </LanguageContext.Provider>)
};

export const useLanguageContext = () => React.useContext(LanguageContext);