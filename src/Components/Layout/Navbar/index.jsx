
import AppLogo from "@components/UI/AppLogo";
import NavbarLinks from "./Components/NavbarLinks";
import NavbarUtilities from "./Components/NavbarUtilities";
import { useState } from "react";

function Navbar({ className = "", ...props }) {
    const [navbarMenuOpen, setNavbarMenuOpen] = useState(false);

    return (
        <nav 
            className={`bg-white shadow-md shadow-blue-100 py-3 ${className}`} 
            {...props}
        >
            <div className={`container flex items-center justify-between gap-10`}>
                {/* App Logo */}
                <AppLogo />
                {/* Navbar Links */}
                <NavbarLinks
                    navbarMenuOpen={navbarMenuOpen}
                    setNavbarMenuOpen={setNavbarMenuOpen}
                />
                {/* Navbar Utilities */}
                <NavbarUtilities
                    navbarMenuOpen={navbarMenuOpen}
                    setNavbarMenuOpen={setNavbarMenuOpen}
                />
            </div>
        </nav>
    )
}

export default Navbar;
