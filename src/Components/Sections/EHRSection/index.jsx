import SectionHeader from "@components/Common/SectionHeader";
import { useLanguageContext } from "@contexts/LanguageContext";

const data = {
    header: {
        icon: "fa-solid fa-hospital",
        title: {
            ar: "أنظمة المستشفيات المتكاملة",
            en: "Integrated Hospital Systems"
        },
        description: {
            ar: "نوفر أنظمة متكاملة لإدارة المستشفيات تشمل إدارة المرضى، الصيدلية، المختبرات، الأشعة، والفواتير. حلول مصممة لتحسين الكفاءة وضمان جودة الرعاية الصحية.",
            en: "We provide integrated hospital management systems covering patient care, pharmacy, labs, radiology, and billing. Solutions designed to improve efficiency and ensure quality healthcare."
        },
        badges: [
            { ar: "المستشفيات الكبيرة", en: "Large Hospitals" },
            { ar: "المراكز الطبية المتخصصة", en: "Specialized Medical Centers" },
            { ar: "المجمعات الطبية", en: "Medical Complexes" },
        ]
    },
    content: [
        {
            name: { ar: "المميزات الرئيسية", en: "Key Features" },
            features: [
                { ar: "نظام إدارة المرضى الإلكتروني", en: "Electronic Patient Management System" },
                { ar: "تكامل مع أنظمة المختبرات والأشعة", en: "Integration with Labs and Radiology Systems" },
                { ar: "إدارة الصيدلية والمخزون الطبي", en: "Pharmacy and Medical Inventory Management" },
                { ar: "نظام الفواتير والتأمين الطبي", en: "Billing and Medical Insurance System" },
                { ar: "تقارير إدارية وطبية", en: "Administrative and Medical Reports" }
            ]
        },
        {
            name: { ar: "حالات الاستخدام", en: "Use Cases" },
            features: [
                { ar: "تسجيل ومتابعة المرضى من الدخول للخروج", en: "Patient Admission and Discharge Tracking" },
                { ar: "إدارة المواعيد والعمليات الجراحية", en: "Appointment and Surgery Management" },
                { ar: "تتبع النتائج المخبرية والأشعة", en: "Tracking Lab and Radiology Results" },
                { ar: "إدارة الأدوية والجرعات", en: "Medication and Dosage Management" }
            ]
        },
        {
            name: { ar: "الفوائد", en: "Benefits" },
            features: [
                { ar: "تقليل وقت انتظار المرضى بنسبة 40%", en: "Reduce Patient Waiting Time by 40%" },
                { ar: "تحسين دقة التشخيص والعلاج", en: "Improve Diagnostic and Treatment Accuracy" },
                { ar: "تقليل الأخطاء الطبية والإدارية", en: "Reduce Medical and Administrative Errors" },
                { ar: "توفير الوقت للكادر الطبي", en: "Save Time for Medical Staff" }
            ]
        }
    ]
}

function EHRSection() {
    const { language } = useLanguageContext();

    return (
        <section className="ehr-section py-10" id="ehr">
            <div className="container">
                <SectionHeader
                    icon={data.header.icon}
                    title={data.header.title[language]}
                    description={data.header.description[language]}
                    badges={data.header.badges.map(badge => badge[language])}
                />

                {/* Content Cards */}
                <div className="content-cards grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        data.content.map((card, index) => (
                            <div className="content-card bg-[#f5f5f5] p-5 rounded-md shadow-sm border border-gray-200" key={index}>
                                <h3 className="font-bold mb-4 text-xl">{card.name[language]}</h3>
                                <ul>
                                    {
                                        card.features.map((feature, idx) => (
                                            <li className="flex items-center gap-2 [&>i]:text-[8px] [&>i]:text-blue-700" key={idx}>
                                                <i className='fa-solid fa-circle fa-fw'></i>
                                                <span>{feature[language]}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default EHRSection;