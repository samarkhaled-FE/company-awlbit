import { Link } from "react-router-dom";

function AppLogo({ className = "" }) {
    const handleClick = () => {
        // Smooth scroll to top when navigating to home
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <Link
            to={'/'}
            onClick={handleClick}
            className={`app-logo inline-flex items-center gap-2 ${className}`}
            aria-label="AwlBit Home"
        >
            <img
                src="/assets/images/logo-m.jpeg"
                alt="AwlBit logo"
                className="h-10 w-10 object-contain rounded-full bg-white p-0.5 shadow-sm ring-1 ring-[#0B1A2C]/20 cursor-pointer hover:scale-105 transition-transform duration-200"
                loading="eager"
            />
            <span className="font-extrabold" style={{ color: "#0B1A2C", fontSize: "2rem", lineHeight: 1 }}>
                AwlBit
            </span>
        </Link>
    )
}

export default AppLogo;