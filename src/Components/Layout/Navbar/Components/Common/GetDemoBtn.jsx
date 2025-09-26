import { useLanguageContext } from "@contexts/LanguageContext";
import { Link } from "react-router-dom";

function GetDemoBtn({ className = "" }) {
    const { language } = useLanguageContext();
    const arabic = language === "ar";

    return (
        <Link
            to="/contact" // 🔥 تغيير المسار من "/company#contact" إلى "/contact" مباشرة
            className={`flex items-center gap-2 py-2 px-4 rounded-md text-white bg-blue-700 font-medium transition sm:hover:bg-blue-800 text-nowrap ${className}`}
        >
            <span>{arabic ? "الحصول على عرض تجريبي" : "Get Demo"}</span>
            <i className={`fa-solid fa-arrow-${arabic ? "left" : "right"}`}></i>
        </Link>
    )
}

export default GetDemoBtn;
