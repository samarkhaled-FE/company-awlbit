import SectionHeader from "@components/Common/SectionHeader";
import { useLanguageContext } from "@contexts/LanguageContext";

const data = {
    header: {
        icon: "fa-solid fa-chart-pie",
        title: {
            ar: "التحليلات والتقارير",
            en: "Analytics & Reporting"
        },
        description: {
            ar: "نوفر ادوات تحليلية متطورة وتحول البيانات الصحية إلى رؤى قابلة للتنفيذ، مع لوحات تحكم تفاعلية مخصصة لدعم اتخاذ القرارات.",
            en: "We provide advanced analytical tools that transform healthcare data into actionable insights, with interactive dashboards customized to support decision-making."
        },
        badges: [
            { ar: "الإدارة الطبية", en: "Medical Administration" },
            { ar: "محللي البيانات", en: "Data Analysts" },
            { ar: "صناع القرار", en: "Decision Makers" },
        ]
    },
    content: [
        {
            name: { ar: "المميزات الرئيسية", en: "Key Features" },
            features: [
                { ar: "لوحات تحكم تفاعلية", en: "Interactive Dashboards" },
                { ar: "تقارير مخصصة ومرنة", en: "Customizable & Flexible Reports" },
                { ar: "تحليل البيانات الطبية", en: "Medical Data Analysis" },
                { ar: "مؤشرات الأداء الرئيسية", en: "Key Performance Indicators (KPIs)" },
                { ar: "التنبؤ والتحليل التنبئي", en: "Predictive Analytics & Forecasting" },
            ]
        },
        {
            name: { ar: "حالات الاستخدام", en: "Use Cases" },
            features: [
                { ar: "تحليل الأداء المستشفى أو العيادة", en: "Hospital or Clinic Performance Analysis" },
                { ar: "مراقبة مؤشرات الجودة الطبية", en: "Monitoring Medical Quality Metrics" },
                { ar: "تحليل رضا المرضى", en: "Patient Satisfaction Analysis" },
                { ar: "التنبؤ بالطلب على الخدمات", en: "Service Demand Forecasting" },
            ]
        },
        {
            name: { ar: "الفوائد", en: "Benefits" },
            features: [
                { ar: "اتخاذ قرارات مبنية على البيانات", en: "Data-Driven Decision Making" },
                { ar: "تحسين كفاءة العمليات", en: "Improved Operational Efficiency" },
                { ar: "تحديد الفرص للتحسين", en: "Identifying Opportunities for Improvement" },
                { ar: "مراقبة الأداء المستمر", en: "Continuous Performance Monitoring" },
            ]
        }
    ]
};

function AnalyticsAndReportsSection() {
    const { language } = useLanguageContext();

    return (
        <section className="analytics-and-reports-section py-10" id="analytics">
            <div className="container">
                <SectionHeader
                    icon={data.header.icon}
                    title={data.header.title[language]}
                    description={data.header.description[language]}
                    badges={data.header.badges.map(badge => badge[language])}
                />

                {/* Content Cards */}
                <div className="content-cards grid md:grid-cols-3 gap-6 mt-10">
                    {data.content.map((card, index) => (
                        <div
                            key={index}
                            className="content-card bg-[#f5f5f5] p-6 rounded-lg shadow border border-gray-200"
                        >
                            <h3 className="font-bold mb-4 text-xl">{card.name[language]}</h3>
                            <ul className="flex flex-col gap-2">
                                {card.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <i className="fa-solid fa-circle text-blue-700 text-[8px]"></i>
                                        <span>{feature[language]}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AnalyticsAndReportsSection;