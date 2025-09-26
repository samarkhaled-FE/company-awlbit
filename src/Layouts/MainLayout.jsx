import Navbar from "@components/Layout/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "@components/Layout/Footer";

function MainLayout() {
    return (
        <div className="main-layout w-full relative overflow-x-hidden">
            {/* Header */}
            <Navbar className="navbar" />
            {/* Outlet */}
            <Outlet />
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default MainLayout;