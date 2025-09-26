import AppLogo from "@components/UI/AppLogo";
import { useLanguageContext } from "@contexts/LanguageContext";
import { Link } from "react-router-dom";

function Footer() {
    const { language } = useLanguageContext();
    const year = new Date().getFullYear();

    const columns = [
        {
            title: {
                ar: "الشركة",
                en: "Company",
            },
            links: [
                { label: { ar: "من نحن", en: "About Us" }, to: "/company#about" },
                { label: { ar: "إنجازاتنا", en: "Achievements" }, to: "/company#achievements" },
                { label: { ar: "خبراتنا", en: "Expertise" }, to: "/company#expertise" },
                { label: { ar: "تواصل معنا", en: "Contact Us" }, to: "/company#contact" },
            ],
        },
        {
            title: {
                ar: "الحلول",
                en: "Solutions",
            },
            links: [
                { label: { ar: "تكامل السجل الصحي الإلكتروني مع أوراكل فيوجن", en: "EHR Integration with Oracle Fusion" }, to: "/solutions#ehr" },
            ],
        },
        {
            title: {
                ar: "الخدمات",
                en: "Services",
            },
            links: [
                { label: { ar: "بناء تطبيقات Oracle APEX", en: "Building Oracle APEX application" }, to: "/services#building" },
                { label: { ar: "الدعم الفني لأوراكل فيوجن", en: "Oracle Fusion Technical Support" }, to: "/services#oracle-fusion-support" },
            ],
        },
    ];

    return (
        <>
            {/* Footer Root */}
            <footer className="bg-[#0b1b2d] text-white pt-14">
                <div className="container">
                    <div className="grid gap-10 lg:grid-cols-12">
                        {/* Brand + Description + Address + Logo */}
                        <div className="lg:col-span-4">
                            <AppLogo />
                            
                            {/* Company short description */}
                            <p className="mt-4 text-sm text-slate-300 leading-6">
                                {language === "ar"
                                    ? "تأسست AwlBit في عام 2024، وتعد رائدة عالميًا في مجال استشارات البرمجيات والتقنيات، حيث تخدم أكثر من 1,050 عميلًا في 30 دولة مع خبرة تزيد عن 20 عامًا في تحقيق النجاح الرقمي."
                                    : "Founded in 2024, AwlBit is a global leader in software consulting and technologies, serving over 1,050 clients across 30 countries with more than 20 years of experience delivering digital success."}
                            </p>

                            {/* Company Address */}
                            <div className="mt-4 text-sm text-slate-400">
                                <div className="flex items-start gap-2">
                                    <i className="fa-solid fa-map-marker-alt text-slate-500 mt-0.5"></i>
                                    <div>
                                        <p className="font-medium text-slate-300">
                                            {language === "ar" ? "العنوان:" : "Address:"}
                                        </p>
                                        <p className="leading-5">
                                            {language === "ar" 
                                                ? "القليوبية - مدينة العبور - الحي الأول"
                                                : "Qalyubia - Obour City - First District"
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Company Footer Logo */}
                            <div className="mt-6">
                                <img 
                                    src="/assets/images/footerlogo.webp" 
                                    alt="AwlBit Footer Logo"
                                    className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                                    onError={(e) => {
                                        console.error('Footer logo failed to load:', e.target.src);
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>

                            {/* ❌ تم حذف الـ Badges */}

                            {/* Social Media Links - مباشرة بعد اللوجو */}
                            <div className="mt-6 flex items-center gap-4">
                                <a
                                    href="https://www.linkedin.com/company/awlbit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764 0-.973.784-1.764 1.75-1.764s1.75.791 1.75 1.764c0 .974-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.027-3.058-1.864-3.058-1.865 0-2.151 1.455-2.151 2.958v5.704h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.04 0 3.602 2.002 3.602 4.604v5.592z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://wa.me/201004677036"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="WhatsApp"
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white hover:opacity-90 transition"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-5 w-5 fill-current">
                                        <path d="M19.11 17.17c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.62.14-.19.27-.71.88-.87 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.43-2.2-1.37-.81-.72-1.36-1.6-1.52-1.87-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.62-1.49-.85-2.04-.22-.53-.44-.46-.62-.46-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.25.27-.95.92-.95 2.25 0 1.33.97 2.6 1.11 2.77.14.18 1.9 2.9 4.62 4.04.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
                                        <path d="M26.88 5.12A13.94 13.94 0 0 0 16 1.3C8.33 1.3 2.09 7.54 2.09 15.21c0 2.47.64 4.85 1.86 6.96L2 30.7l8.73-1.83a13.86 13.86 0 0 0 6.28 1.5h.01c7.67 0 13.91-6.24 13.91-13.91 0-3.72-1.45-7.21-4.05-9.81zm-10.88 23.5h-.01a11.93 11.93 0 0 1-6.07-1.66l-.44-.26-5.19 1.09 1.1-5.06-.29-.52a11.9 11.9 0 0 1-1.7-6.01c0-6.58 5.35-11.93 11.94-11.93 3.19 0 6.19 1.24 8.45 3.49a11.87 11.87 0 0 1 3.49 8.45c0 6.59-5.35 11.93-11.93 11.93z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.facebook.com/awlbit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                                        <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12.82v-9.294H9.692V11.08h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.626h-3.123V24h6.127C23.406 24 24 23.406 24 22.676V1.325C24 .593 23.406 0 22.675 0z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Links Columns */}
                        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8">
                            {columns.map((col) => (
                                <div key={col.title.en}>
                                    <h4 className="mb-3 text-sm font-semibold text-slate-200 uppercase tracking-wide">
                                        {col.title[language]}
                                    </h4>
                                    <ul className="space-y-2 text-slate-300">
                                        {col.links.map((l) => (
                                            <li key={l.label.en}>
                                                <Link
                                                    to={l.to}
                                                    className="hover:text-white transition-colors duration-150"
                                                >
                                                    {l.label[language]}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="my-8 border-white/10" />

                    {/* Bottom bar */}
                    <div className="pb-8">
                        <p className="text-xs text-slate-400">
                            {year} AwlBit. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/201004677036"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl ring-1 ring-black/5 transition-transform hover:scale-105 active:scale-95"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-7 w-7 fill-current">
                    <path d="M19.11 17.17c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.62.14-.19.27-.71.88-.87 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.43-2.2-1.37-.81-.72-1.36-1.6-1.52-1.87-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.62-1.49-.85-2.04-.22-.53-.44-.46-.62-.46-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.25.27-.95.92-.95 2.25 0 1.33.97 2.6 1.11 2.77.14.18 1.9 2.9 4.62 4.04.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
                    <path d="M26.88 5.12A13.94 13.94 0 0 0 16 1.3C8.33 1.3 2.09 7.54 2.09 15.21c0 2.47.64 4.85 1.86 6.96L2 30.7l8.73-1.83a13.86 13.86 0 0 0 6.28 1.5h.01c7.67 0 13.91-6.24 13.91-13.91 0-3.72-1.45-7.21-4.05-9.81zm-10.88 23.5h-.01a11.93 11.93 0 0 1-6.07-1.66l-.44-.26-5.19 1.09 1.1-5.06-.29-.52a11.9 11.9 0 0 1-1.7-6.01c0-6.58 5.35-11.93 11.94-11.93 3.19 0 6.19 1.24 8.45 3.49a11.87 11.87 0 0 1 3.49 8.45c0 6.59-5.35 11.93-11.93 11.93z" />
                </svg>
            </a>
        </>
    );
}

export default Footer;
