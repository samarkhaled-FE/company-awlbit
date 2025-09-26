
import React from "react";
import BuildingApex from "@components/Sections/BuildingApex";
import OracleFusionSupport from "@components/Sections/OracleFusionSupport";
import useScrollToHash from "@hooks/useScrollToHash";
import Navbar from "@components/Layout/Navbar"; // ضروري استيراد الناف بار

function ServicesPage() {
    useScrollToHash();

    return (
        <div className="services-page" style={{ background: "#f8fafc" }}>
            {/* ✅ Navbar ثابت دائماً أعلى الصفحة */}
            <Navbar className="navbar" />
            {/* ✅ تعويض ارتفاع الناف بار في بقية الصفحة */}
            <div style={{ paddingTop: "72px" }}>
                <BuildingApex />
                <OracleFusionSupport />
            </div>
        </div>
    );
}

export default ServicesPage;
