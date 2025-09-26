import { useLanguageContext } from "@contexts/LanguageContext";
import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GetDemoBtn from "../Common/GetDemoBtn";

// إضافة كلاس .navbar أعلى عنصر هذا المكون عند الاستدعاء في الصفحة، ولا تنسى CSS التالي (غالبا في ملف App أو Layout):
// .navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; height: 72px; background: #fff; box-shadow: 0 2px 12px rgba(11, 27, 45, 0.04); }

const links = [
    {
        label: { ar: "نبذة عنا", en: "About Us" },
        key: "CompanyLinks",
        nestedLinks: [
            {
                to: "/about",
                icon: "fa-solid fa-circle-info",
                label: { ar: "عنا", en: "About Us" },
                description: { ar: "تعرف على المزيد حول قصتنا ورسالتنا.", en: "Learn more about our story and mission." },
                colorType: "blue"
            },
            {
                to: "/achievements",
                icon: "fa-solid fa-trophy",
                label: { ar: "الإنجازات", en: "Achievements" },
                description: { ar: "أهم النتائج والتأثير الذي حققناه.", en: "Highlights of the results and impact we've achieved." },
                colorType: "green"
            },
            {
                to: "/expertise",
                icon: "fa-solid fa-briefcase",
                label: { ar: "خبرتنا", en: "Expertise" },
                description: { ar: "نحن نقدم حلولاً متخصصة عبر قطاعات متعددة.", en: "We deliver specialized solutions across multiple sectors." },
                colorType: "blue"
            },
            {
                to: "/contact-only",
                icon: "fa-solid fa-envelope",
                label: { ar: "تواصل معنا", en: "Contact Us" },
                description: { ar: "تواصل مع فريقنا.", en: "Get in touch with our team." },
                colorType: "dark"
            },
        ]
    },
    {
        label: { ar: "الحلول", en: "Solutions" },
        key: "SolutionsLinks",
        nestedLinks: [
            {
                to: "/solutions#ehr-systems",
                icon: "fa-solid fa-hospital",
                label: { ar: "EHR Systems", en: "EHR Systems" },
                description: { ar: "حلول متكاملة لإدارة السجلات الصحية الإلكترونية.", en: "Comprehensive solutions for Electronic Health Records management." },
                colorType: "blue"
            }
        ]
    },
    {
        label: { ar: "الخدمات", en: "Services" },
        key: "ServicesLinks",
        nestedLinks: [
            {
                to: "/services/building-apex",
                icon: "fa-solid fa-cubes",
                label: { ar: "بناء تطبيق Oracle APEX", en: "Building Oracle APEX Application" },
                description: { ar: "تطوير تطبيقات قوية باستخدام Oracle APEX لدعم أعمالك.", en: "Develop robust applications using Oracle APEX to support your business." },
                colorType: "blue"
            },
            {
                to: "/services/oracle-fusion-support",
                icon: "fa-solid fa-headset",
                label: { ar: "الدعم التقني لOracle Fusion", en: "Oracle Fusion Technical Support" },
                description: { ar: "خدمات دعم فني متخصصة لضمان كفاءة أنظمة Oracle Fusion.", en: "Specialized technical support to ensure efficiency of Oracle Fusion systems." },
                colorType: "green"
            }
        ]
    },
    {
        label: { ar: "لماذا AwlBit؟", en: "Why AwlBit?" },
        key: "WhyAwlbitLink",
        directLink: true,
        to: "/why-awlbit"
    }
];

function NavbarLinks({ navbarMenuOpen = false, setNavbarMenuOpen = () => { } }) {
    const [openedLinks, setOpenedLinks] = useState(null);
    const { language } = useLanguageContext();
    const isArabic = language === "ar";

    const stopPropagationHandler = useCallback((e) => { e.stopPropagation(); }, []);
    const closeNestedLinksHandler = useCallback(() => { setOpenedLinks(null); }, []);

    const handleOpenNestedLinks = (e, key) => {
        stopPropagationHandler(e);
        setOpenedLinks(prev => prev === key ? null : key)
    };

    useEffect(() => {
        const handleClickOut = () => {
            closeNestedLinksHandler();
            setNavbarMenuOpen(false);
        };
        document.addEventListener("click", handleClickOut);
        return () => document.removeEventListener("click", handleClickOut);
    }, [closeNestedLinksHandler, setNavbarMenuOpen]);

    const handleNavigatePage = () => {
        closeNestedLinksHandler();
        setNavbarMenuOpen(false);
    };

    const getColorStyles = (colorType, isActive = false) => {
        const styles = {
            blue: {
                bg: isActive ? '#0066FF' : 'rgba(0, 102, 255, 0.1)',
                hoverBg: 'rgba(0, 102, 255, 0.15)',
                text: isActive ? '#fff' : '#0066FF',
                iconBg: isActive ? 'rgba(255,255,255,0.2)' : 'rgba(0,102,255,0.15)',
                iconText: isActive ? '#fff' : '#0066FF',
                border: 'rgba(0,102,255,0.3)'
            },
            green: {
                bg: isActive ? '#77D04C' : 'rgba(119,208,76,0.1)',
                hoverBg: 'rgba(119,208,76,0.15)',
                text: isActive ? '#fff' : '#77D04C',
                iconBg: isActive ? 'rgba(255,255,255,0.2)' : 'rgba(119,208,76,0.15)',
                iconText: isActive ? '#fff' : '#77D04C',
                border: 'rgba(119,208,76,0.3)'
            },
            dark: {
                bg: isActive ? '#0B1B2D' : 'rgba(11,27,45,0.1)',
                hoverBg: 'rgba(11,27,45,0.15)',
                text: isActive ? '#fff' : '#0B1B2D',
                iconBg: isActive ? 'rgba(255,255,255,0.2)' : 'rgba(11,27,45,0.15)',
                iconText: isActive ? '#fff' : '#0B1B2D',
                border: 'rgba(11,27,45,0.3)'
            }
        };
        return styles[colorType] || styles.blue;
    };

    return (
        <div className={`navbar-links flex-1 max-lg:absolute max-lg:left-0 max-lg:top-full max-lg:mt-3 max-lg:w-full transition ${navbarMenuOpen ? "" : "max-lg:pointer-events-none max-lg:opacity-0"}`}>
            <div className="max-lg:container">
                <ul className="links-items flex lg:items-center gap-2 max-lg:flex-col max-lg:bg-white max-lg:shadow-md max-lg:border max-lg:border-gray-200 max-lg:rounded-md max-lg:p-3">
                    {
                        links.map((link, index) => (
                            <li className="links-item relative" key={index}>
                                {link.directLink ? (
                                    <NavLink
                                        to={link.to}
                                        onClick={handleNavigatePage}
                                        className={({ isActive }) =>
                                            `flex items-center justify-center w-full gap-2 py-2 px-4 rounded-md transition font-medium text-lg ${
                                                isActive
                                                    ? "text-white bg-blue-600"
                                                    : "text-gray-700 hover:text-blue-500 hover:bg-blue-50"
                                            }`
                                        }
                                    >
                                        <span>{link.label[language]}</span>
                                    </NavLink>
                                ) : (
                                    <>
                                        <button
                                            type="button"
                                            aria-label={`${link.label} Links`}
                                            onClick={e => handleOpenNestedLinks(e, link.key)}
                                            className={`flex items-center justify-between w-full gap-2 py-2 px-4 rounded-md transition ${openedLinks === link.key ? "text-white" : "sm:hover:text-blue-500 "}`}
                                            style={{
                                                backgroundColor: openedLinks === link.key ? '#0066FF' : 'transparent'
                                            }}
                                        >
                                            <span className="font-medium text-lg">{link.label[language]}</span>
                                            <div className={`arrow-icon transition ${openedLinks === link.key ? "rotate-180" : ""}`}>
                                                <i className="fa-solid fa-angle-down fa-fw"></i>
                                            </div>
                                        </button>
                                        <div
                                            onClick={stopPropagationHandler}
                                            className={`dropdown-links bg-white rounded-xl shadow-2xl absolute z-50 border border-gray-100 min-w-[320px] max-w-[400px] ${isArabic ? 'right-0' : 'left-0'} top-full mt-3 transition-all duration-300 ${
                                                openedLinks === link.key
                                                    ? "opacity-100 visible transform translate-y-0"
                                                    : "opacity-0 invisible transform -translate-y-4"
                                            }`}
                                        >
                                            <div className="p-3 space-y-2">
                                                {link.nestedLinks?.map((nestedLink, linkIndex) => {
                                                    const colorStyle = getColorStyles(nestedLink.colorType);
                                                    return (
                                                        <NavLink
                                                            key={linkIndex}
                                                            to={nestedLink.to}
                                                            onClick={handleNavigatePage}
                                                            className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                                                            style={{
                                                                backgroundColor: colorStyle.bg,
                                                                color: colorStyle.text
                                                            }}
                                                            onMouseEnter={e => { e.target.style.backgroundColor = colorStyle.hoverBg; }}
                                                            onMouseLeave={e => { e.target.style.backgroundColor = colorStyle.bg; }}
                                                        >
                                                            <span
                                                                className="shrink-0 w-12 h-12 grid place-items-center rounded-xl transition-all duration-300 group-hover:scale-110"
                                                                style={{
                                                                    backgroundColor: colorStyle.iconBg,
                                                                    color: colorStyle.iconText
                                                                }}
                                                            >
                                                                <i className={`${nestedLink.icon || "fa-regular fa-square"} fa-fw text-lg`}></i>
                                                            </span>
                                                            <span className="flex-1">
                                                                <span className="block font-bold text-base leading-5 mb-1">
                                                                    {nestedLink.label[language]}
                                                                </span>
                                                                <span
                                                                    className="block text-sm leading-5 opacity-80"
                                                                    style={{ color: colorStyle.text }}
                                                                >
                                                                    {nestedLink.description[language]}
                                                                </span>
                                                            </span>
                                                            <div
                                                                className="shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                                                                style={{ color: colorStyle.text }}
                                                            >
                                                                <i className={`fa-solid fa-arrow-${isArabic ? 'left' : 'right'} text-lg`}></i>
                                                            </div>
                                                        </NavLink>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </li>
                        ))
                    }
                    <li className="sm:hidden pt-3 border-t border-t-inherit">
                        <GetDemoBtn className="justify-between" />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavbarLinks;
