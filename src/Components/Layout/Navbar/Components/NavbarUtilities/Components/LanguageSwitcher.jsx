import { useLanguageContext } from "@contexts/LanguageContext";

function LanguageSwitcher() {

    const { language, setLanguage } = useLanguageContext();
    const arabic = language === "ar";

    return (
        <div className="language-switcher relative group">
            <button
                onClick={() => setLanguage(arabic ? "en" : "ar")}
                className="py-1 px-2 sm:py-2 sm:px-4 text-xl rounded-md transition bg-blue-700 sm:hover:bg-blue-800 text-white font-medium"
            >
                <i className="fa-solid fa-globe fa-fw"></i>
            </button>
            {/* Tooltip */}
            <div className="tooltip py-2 px-4 text-sm rounded-md font-medium shadow-md bg-blue-500 text-white text-nowrap absolute z-50 left-1/2 -translate-x-1/2 top-full transition mt-7 pointer-events-none opacity-0 group-hover:-translate-y-2 group-hover:opacity-100">
                {
                    arabic ? "التبديل الي الأنجليزية" : "Switch to Arabic"
                }
            </div>
        </div>
    )
}

export default LanguageSwitcher;