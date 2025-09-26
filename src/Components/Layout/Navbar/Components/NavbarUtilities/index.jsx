import NavbarMenuToggler from "./Components/NavbarMenuToggler";
import LanguageSwitcher from "./Components/LanguageSwitcher";
import GetDemoBtn from "../Common/GetDemoBtn";

function NavbarUtilities({ navbarMenuOpen = false, setNavbarMenuOpen = () => { } }) {
    return (
        <div className="navbar-utilities flex gap-2">
            {/* Language Switcher */}
            <LanguageSwitcher />
            {/* Get Demo Btn */}
            <GetDemoBtn className="max-sm:hidden" />
            {/* Navbar Menu Toggler */}
            <NavbarMenuToggler
                navbarMenuOpen={navbarMenuOpen}
                setNavbarMenuOpen={setNavbarMenuOpen}
            />
        </div>
    )
}

export default NavbarUtilities;