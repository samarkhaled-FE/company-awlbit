import { LanguageContextProvider } from "./LanguageContext";

function ContextsProvider({ children }) {
    return (
        <div className="contexts-provider">
            <LanguageContextProvider>
                {children}
            </LanguageContextProvider>
        </div>
    )
}

export default ContextsProvider;