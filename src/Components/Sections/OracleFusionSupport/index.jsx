// Components/Sections/OracleFusionSupport.jsx
import { useLanguageContext } from "@contexts/LanguageContext";
import { Link } from "react-router-dom";

function OracleFusionSupport() {
    const { language } = useLanguageContext();
    const isArabic = language === 'ar';

    // Data للمحتوى
    const integrationPoints = [
        {
            ar: "أنظمة إدارة المعلومات المختبرية",
            en: "Laboratory Information Management Systems",
            icon: "fa-solid fa-link"
        },
        {
            ar: "أنظمة التصوير الطبي والأشعة",
            en: "Medical Imaging and Radiology Systems", 
            icon: "fa-solid fa-link"
        },
        {
            ar: "أنظمة الصيدلة وإدارة الأدوية",
            en: "Pharmacy and Medication Management",
            icon: "fa-solid fa-link"
        },
        {
            ar: "أنظمة مراقبة المرضى والأجهزة الطبية",
            en: "Patient Monitoring and Medical Devices",
            icon: "fa-solid fa-link"
        }
    ];

    const keyFeatures = [
        {
            ar: "تكامل شامل مع السجلات الطبية الإلكترونية (EMR)",
            en: "Complete integration with Electronic Medical Records (EMR)",
            icon: "fa-solid fa-check-circle"
        },
        {
            ar: "ربط أنظمة إدارة المستشفيات (HMS) بسلاسة",
            en: "Seamless Hospital Management Systems (HMS) connectivity",
            icon: "fa-solid fa-check-circle"
        },
        {
            ar: "تكامل أنظمة المختبرات والتشخيص (LIMS)",
            en: "Laboratory Information Systems (LIMS) integration",
            icon: "fa-solid fa-check-circle"
        },
        {
            ar: "ربط أنظمة إدارة الصيدليات والأدوية",
            en: "Pharmacy Management Systems integration",
            icon: "fa-solid fa-check-circle"
        },
        {
            ar: "تزامن البيانات في الوقت الفعلي",
            en: "Real-time data synchronization",
            icon: "fa-solid fa-check-circle"
        },
        {
            ar: "امتثال كامل لمعايير HIPAA وأمان البيانات",
            en: "Full HIPAA compliance and data security",
            icon: "fa-solid fa-check-circle"
        }
    ];

    const benefits = [
        {
            ar: "تحسين جودة الرعاية الصحية وسلامة المرضى",
            en: "Enhanced healthcare quality and patient safety",
            icon: "fa-solid fa-heart"
        },
        {
            ar: "تقليل الأخطاء الطبية وتحسين دقة البيانات",
            en: "Reduced medical errors and improved data accuracy",
            icon: "fa-solid fa-heart"
        },
        {
            ar: "توفير رؤية شاملة وموحدة لجميع العمليات",
            en: "Comprehensive unified view of all operations",
            icon: "fa-solid fa-heart"
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
                            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <i className="fa-solid fa-hospital"></i>
                                <span>{isArabic ? "تكامل الأنظمة الطبية" : "Medical Systems Integration"}</span>
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                {isArabic ? " الدعم التقني ل Orcal Fusion" : "Medical Systems Integration with Oracle Fusion"}
                            </h1>

                            {/* Subtitle */}
                            <p className="text-lg font-medium text-emerald-600 mb-6">
                                {isArabic ? "حلول تكامل شاملة للرعاية الصحية الذكية" : "Comprehensive Healthcare Integration Solutions"}
                            </p>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed mb-8 text-base">
                                {isArabic 
                                    ? "نقدم حلول تكامل متطورة تربط جميع الأنظمة الطبية والإدارية في مؤسستك الصحية مع منصة Oracle Fusion Cloud. نحن نضمن تدفق البيانات الموحد والآمن بين السجلات الطبية الإلكترونية، أنظمة إدارة المستشفيات، المختبرات، والصيدليات لتحسين جودة الرعاية وكفاءة العمليات."
                                    : "We provide advanced integration solutions that connect all medical and administrative systems in your healthcare institution with Oracle Fusion Cloud platform. We ensure unified and secure data flow between Electronic Medical Records, Hospital Management Systems, Laboratories, and Pharmacies to improve care quality and operational efficiency."
                                }
                            </p>

                            {/* Integration Points */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {isArabic ? "نقاط التكامل:" : "Integration Points:"}
                                </h3>
                                <div className="space-y-3">
                                    {integrationPoints.map((point, index) => (
                                        <div className="flex items-center gap-3" key={index}>
                                            <i className="fa-solid fa-link text-blue-500 text-sm"></i>
                                            <span className="text-gray-700 text-sm">{point[language]}</span>
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
                                            <i className="fa-solid fa-heart text-red-500 text-sm mt-0.5"></i>
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
                                <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8">
                                    <img
                                        src="/assets/images/servicesorcalfusion.png"
                                        alt="Oracle Fusion Medical Integration"
                                        className="w-full h-auto object-contain rounded-xl shadow-lg"
                                        onError={(e) => {
                                            // Fallback to a placeholder or different image
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                    
                                    {/* Fallback content if image fails to load */}
                                    <div className="flex flex-col items-center justify-center h-64 text-center">
                                        <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4">
                                            <i className="fa-solid fa-hospital text-3xl text-emerald-600"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {isArabic ? "نظام Oracle Fusion الطبي" : "Oracle Fusion Medical System"}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {isArabic ? "تكامل شامل للأنظمة الطبية" : "Comprehensive Medical Systems Integration"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 text-center">
                        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-2xl p-8 shadow-2xl">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                {isArabic ? "جاهز لتحسين أنظمتك الطبية؟" : "Ready to Enhance Your Medical Systems?"}
                            </h3>
                            <p className="text-lg mb-8 opacity-90">
                                {isArabic 
                                    ? "تواصل معنا اليوم للحصول على استشارة مجانية وتقييم شامل لاحتياجات مؤسستك الطبية"
                                    : "Contact us today for a free consultation and comprehensive assessment of your medical institution's needs"
                                }
                            </p>
                            
                            <Link 
                                to="/contact"
                                className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl text-emerald-600"
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
