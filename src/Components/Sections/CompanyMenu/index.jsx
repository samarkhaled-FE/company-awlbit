import React from "react";
import { Link } from "react-router-dom";
import { useLanguageContext } from "@contexts/LanguageContext";
import "./styles.css";

const companyItems = [
  {
    to: "/company/about",
    icon: "fa-solid fa-circle-info",
    label: { ar: "عنا", en: "About Us" },
    description: { ar: "تعرف على المزيد حول قصتنا ورسالتنا.", en: "Learn more about our story and mission." },
  },
  {
    to: "/company/expertise",
    icon: "fa-solid fa-briefcase",
    label: { ar: "خبرتنا", en: "Expertise" },
    description: { ar: "نحن نقدم حلولاً متخصصة عبر قطاعات متعددة.", en: "We deliver specialized solutions across multiple sectors." },
  },
  {
    to: "/company/achievements",
    icon: "fa-solid fa-trophy",
    label: { ar: "الأنجازات", en: "Achievements" },
    description: { ar: "أهم النتائج والتأثير الذي حققناه.", en: "Highlights of the results and impact we've achieved." },
  },
  {
    to: "/company/contact",
    icon: "fa-solid fa-envelope",
    label: { ar: "تواصل معنا", en: "Contact Us" },
    description: { ar: "تواصل مع فريقنا.", en: "Get in touch with our team." },
  },
];

export default function CompanyMenu() {
  const { language } = useLanguageContext();
  const isAr = language === "ar";

  return (
    <section className="company-menu" dir={isAr ? "rtl" : "ltr"}>
      <div className="container">
        <header className="cm-head">
          <h2>{isAr ? "الشركة" : "Company"}</h2>
          <p>{isAr ? "تعرّف على جميع أقسام الشركة" : "Explore all company sections"}</p>
        </header>
        <div className="cm-grid">
          {companyItems.map((item, idx) => (
            <Link key={idx} to={item.to} className="cm-card">
              <span className="cm-icon">
                <i className={`${item.icon} fa-fw`} aria-hidden="true"></i>
              </span>
              <div className="cm-body">
                <h3 className="cm-title">{item.label[language]}</h3>
                <p className="cm-desc">{item.description[language]}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
