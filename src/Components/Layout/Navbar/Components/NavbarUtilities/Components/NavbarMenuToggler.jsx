function NavbarMenuToggler({ navbarMenuOpen = false, setNavbarMenuOpen = () => { } }) {
    return (
        <button
            type="button"
            onClick={e => {
                e.stopPropagation();
                setNavbarMenuOpen(prev => !prev)
            }}
            className="text-4xl lg:hidden text-blue-700"
        >
            <i className={`fa-solid fa-${navbarMenuOpen ? "xmark" : "bars"} fa-fw`}></i>
        </button>
    )
}

export default NavbarMenuToggler;