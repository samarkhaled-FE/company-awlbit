
// Components/Sections/OracleFusionSupport.jsx
import { useLanguageContext } from "@contexts/LanguageContext";
import { Link } from "react-router-dom";

function OracleFusionSupport() {
    const { language } = useLanguageContext();
    const isArabic = language === 'ar';

    // Data للخدمات
    const services = [
        {
            ar: "إنشاء التقارير والداشبورد: تصميم وتطوير تقارير مخصصة ولوحات تحكم تفاعلية لتمكين متخذي القرار من متابعة الأداء بدقة.",
            en: "Reports & Dashboards: Design and develop custom reports and interactive dashboards to empower decision-makers with accurate, real-time insights.",
            icon: "fa-solid fa-chart-line"
        },
        {
            ar: "استخراج البيانات عبر BICC: إعداد وتخصيص عمليات استخراج البيانات (BICC) لتوفير بيانات دقيقة وموثوقة للتحليلات أو التكامل.",
            en: "Data Extraction with BICC: Configure and optimize BI Cloud Connector (BICC) for reliable and efficient data extraction and analytics.",
            icon: "fa-solid fa-database"
        },
        {
            ar: "تكامل الأنظمة الخارجية: ربط Oracle Fusion مع الأنظمة الداخلية أو تطبيقات الطرف الثالث لضمان تدفق سلس وآمن للبيانات.",
            en: "External System Integration: Connect Oracle Fusion with third-party applications or internal systems to ensure seamless and secure data flow.",
            icon: "fa-solid fa-link"
        },
        {
            ar: "إدارة وصيانة النظام: معالجة المشكلات اليومية، تحديثات النظام، وضبط الأداء لتحقيق أعلى مستوى من الاستقرار.",
            en: "System Management & Maintenance: Troubleshoot issues, apply updates, and fine-tune system performance to maintain stability.",
            icon: "fa-solid fa-cogs"
        },
        {
            ar: "استشارات تقنية: تقديم توصيات وأفضل الممارسات لتعزيز قيمة الاستثمار في Oracle Fusion.",
            en: "Technical Consultation: Provide best-practice recommendations to enhance your Oracle Fusion environment.",
            icon: "fa-solid fa-lightbulb"
        }
    ];

    const keyFeatures = [
        {
            ar: "دعم مرن حسب احتياجات شركتك",
            en: "Flexible support tailored to your business needs",
            icon: "fa-solid fa-check-circle"
        },
        {
            ar: "فريق متخصص بخبرة في Oracle Fusion",
            en: "Expert team with hands-on Oracle Fusion experience",
            icon: "fa-solid fa-check-circle"
        },
        {
            ar: "تقارير دقيقة وتحليلات متقدمة",
            en: "Accurate reporting and advanced analytics",
            icon: "fa-solid fa-check-circle"
        },
        {
            ar: "ضمان أمان وتكامل البيانات",
            en: "Secure and reliable data integration",
            icon: "fa-solid fa-check-circle"
        },
        {
            ar: "سرعة استجابة وحلول عملية",
            en: "Fast response and practical solutions",
            icon: "fa-solid fa-check-circle"
        }
    ];

    const benefits = [
        {
            ar: "تحسين كفاءة الأعمال والعمليات",
            en: "Improve business efficiency and process automation",
            icon: "fa-solid fa-arrow-up"
        },
        {
            ar: "الحصول على رؤية واضحة وشاملة عبر البيانات",
            en: "Gain clear, unified visibility across your operations",
            icon: "fa-solid fa-eye"
        },
        {
            ar: "تسهيل اتخاذ القرارات الاستراتيجية",
            en: "Enable better, data-driven decision-making",
            icon: "fa-solid fa-brain"
        },
        {
            ar: "تقليل الأخطاء وزيادة الاعتمادية",
            en: "Minimize errors and increase reliability",
            icon: "fa-solid fa-shield-check"
        },
        {
            ar: "تعزيز الإنتاجية وتوفير الوقت",
            en: "Save time and boost productivity",
            icon: "fa-solid fa-clock"
        }
    ];

    return (
        <div className="oracle-fusion-support-page bg-white">
            {/* Main Section */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Right Side - Content */}
                        <div className="order-2 lg:order-1">
                            {/* Header Badge */}
                            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <i className="fa-solid fa-cloud"></i>
                                <span>{isArabic ? "دعم Oracle Fusion" : "Oracle Fusion Support"}</span>
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                {isArabic ? "الدعم التقني لعملاء Oracle Fusion" : "Oracle Fusion Technical Support"}
                            </h1>

                            {/* Subtitle */}
                            <p className="text-lg font-medium text-blue-600 mb-6">
                                {isArabic ? "حلول تقنية متكاملة لرفع كفاءة أعمالك" : "Comprehensive Solutions to Optimize Your Business"}
                            </p>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed mb-8 text-base">
                                {isArabic 
                                    ? "نقدم خدمات دعم تقني متخصصة لمستخدمي Oracle Fusion Cloud، لمساعدتك في الاستفادة القصوى من المنصة وتحويل البيانات إلى قيمة حقيقية لأعمالك."
                                    : "We provide specialized technical support services for Oracle Fusion Cloud users, helping you maximize the value of your investment and turn data into actionable insights."
                                }
                            </p>

                            {/* Services */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {isArabic ? "مجالات الدعم:" : "Our Services:"}
                                </h3>
                                <div className="space-y-4">
                                    {services.map((service, index) => (
                                        <div className="flex items-start gap-3" key={index}>
                                            <i className={`${service.icon} text-blue-500 text-sm mt-1`}></i>
                                            <span className="text-gray-700 text-sm leading-relaxed">{service[language]}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Key Features */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {isArabic ? "المميزات الرئيسية:" : "Key Features:"}
                                </h3>
                                <div className="space-y-3">
                                    {keyFeatures.map((feature, index) => (
                                        <div className="flex items-start gap-3" key={index}>
                                            <i className="fa-solid fa-check-circle text-emerald-500 text-sm mt-0.5"></i>
                                            <span className="text-gray-700 text-sm">{feature[language]}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Benefits */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {isArabic ? "الفوائد:" : "Benefits:"}
                                </h3>
                                <div className="space-y-3">
                                    {benefits.map((benefit, index) => (
                                        <div className="flex items-start gap-3" key={index}>
                                            <i className={`${benefit.icon} text-orange-500 text-sm mt-0.5`}></i>
                                            <span className="text-gray-700 text-sm">{benefit[language]}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Left Side - Image */}
                        <div className="order-1 lg:order-2">
                            <div className="relative">
                                {/* Main Image Container */}
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                                    <img
                                        src="/assets/images/servicesorcalfusion.png"
                                        alt="Oracle Fusion Technical Support"
                                        className="w-full h-auto object-contain rounded-xl shadow-lg"
                                        onError={(e) => {
                                            // Fallback to a placeholder or different image
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                    
                                    {/* Fallback content if image fails to load */}
                                    <div className="flex flex-col items-center justify-center h-64 text-center">
                                        <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                                            <i className="fa-solid fa-cloud text-3xl text-blue-600"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {isArabic ? "Oracle Fusion Cloud" : "Oracle Fusion Cloud"}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {isArabic ? "الدعم التقني المتخصص" : "Specialized Technical Support"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 text-center">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 shadow-2xl">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                {isArabic ? "جاهز لتحسين أداء Oracle Fusion؟" : "Ready to Optimize Your Oracle Fusion Performance?"}
                            </h3>
                            <p className="text-lg mb-8 opacity-90">
                                {isArabic 
                                    ? "تواصل معنا اليوم للحصول على استشارة مجانية وتقييم شامل لاحتياجات شركتك"
                                    : "Contact us today for a free consultation and comprehensive assessment of your business needs"
                                }
                            </p>
                            
                            <Link 
                                to="/contact"
                                className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl text-blue-600"
                            >
                                <i className="fa-solid fa-calendar-days"></i>
                                <span>{isArabic ? "احجز استشارة مجانية" : "Book Free Consultation"}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default OracleFusionSupport;
