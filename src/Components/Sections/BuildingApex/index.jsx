// Components/Sections/BuildingApex.jsx
import { useLanguageContext } from "@contexts/LanguageContext";
import { Link } from "react-router-dom";

const data = {
    apexService: {
        title: {
            ar: "بناء تطبيقات Oracle APEX",
            en: "Building Oracle APEX Applications",
        },
        subtitle: {
            ar: "منصة التطوير منخفضة التعليمات البرمجية الرائدة عالمياً",
            en: "World's Leading Low-Code Development Platform",
        },
        description: {
            ar: "في AwlBit، نتخصص في تطوير تطبيقات قوية وقابلة للتطوير وآمنة باستخدام Oracle APEX. نحن نساعدك في بناء تطبيقات متجاوبة ومتطورة أسرع بـ 38 مرة من الطرق التقليدية، مع إمكانية الوصول من أي جهاز بمتصفح حديث.",
            en: "At AwlBit, we specialize in developing powerful, scalable, and secure applications using Oracle APEX. We help you build responsive, modern applications 38x faster than traditional methods, accessible from any device with a modern browser.",
        },
        features: [
            {
                ar: "تطوير أسرع بـ 38 مرة من الطرق التقليدية",
                en: "38x faster development than traditional methods",
            },
            {
                ar: "أمان عالي ومتوافق مع معايير المؤسسات",
                en: "Enterprise-grade security and compliance",
            },
            {
                ar: "واجهة مستخدم حديثة وسهلة الاستخدام",
                en: "Modern and intuitive user interface",
            }
        ],
        benefits: [
            {
                ar: "تقليل التكاليف والوقت اللازم للتطوير",
                en: "Reduced development costs and time",
            },
            {
                ar: "حلول مخصصة لاحتياجات عملك المحددة",
                en: "Custom solutions for your specific business needs",
            },
            {
                ar: "إمكانية التوسع والنمو مع نمو عملك",
                en: "Scalable solutions that grow with your business",
            },
        ],
    },
};

function BuildingApex() {
    const { language } = useLanguageContext();
    const isArabic = language === 'ar';

    return (
        <section className="building-apex-section py-16 bg-white">
            <div className="container mx-auto px-6">
                {/* Oracle APEX Service */}
                <div className="apex-service">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image - Left Side */}
                        <div className="hero order-2 lg:order-1">
                            <div className="relative">
                                <img
                                    src="/assets/images/servicesorcalapex.png"
                                    alt="Oracle APEX Development"
                                    className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-2xl"></div>
                            </div>
                        </div>

                        {/* Content - Right Side */}
                        <div className="content order-1 lg:order-2">
                            {/* Header Badge */}
                            <div className="service-badge inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                                <i className="fa-solid fa-code mr-2"></i>
                                {isArabic ? "تطوير التطبيقات" : "Application Development"}
                            </div>
                            
                            {/* Title */}
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                {data.apexService.title[language]}
                            </h1>
                            
                            {/* Subtitle */}
                            <p className="text-lg font-medium text-blue-600 mb-6">
                                {data.apexService.subtitle[language]}
                            </p>
                            
                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed mb-8 text-base">
                                {data.apexService.description[language]}
                            </p>

                            {/* Key Features */}
                            <div className="features mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {isArabic ? "المميزات الرئيسية:" : "Key Features:"}
                                </h3>
                                <div className="space-y-3">
                                    {data.apexService.features.map((feature, index) => (
                                        <div className="feature-item flex items-start gap-3" key={index}>
                                            <i className="fa-solid fa-check-circle text-green-500 text-sm mt-0.5"></i>
                                            <span className="text-gray-700 text-sm">{feature[language]}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Benefits */}
                            <div className="benefits">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {isArabic ? "الفوائد:" : "Benefits:"}
                                </h3>
                                <div className="space-y-3">
                                    {data.apexService.benefits.map((benefit, index) => (
                                        <div className="benefit-item flex items-start gap-3" key={index}>
                                            <i className="fa-solid fa-star text-yellow-500 text-sm mt-0.5"></i>
                                            <span className="text-gray-700 text-sm">{benefit[language]}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 shadow-2xl">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            {isArabic ? "جاهز لبناء تطبيق APEX الخاص بك؟" : "Ready to Build Your APEX Application?"}
                        </h3>
                        <p className="text-lg mb-8 opacity-90">
                            {isArabic 
                                ? "تواصل معنا اليوم للحصول على استشارة مجانية وتقييم شامل لاحتياجاتك"
                                : "Contact us today for a free consultation and comprehensive assessment of your needs"
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
    );
}

export default BuildingApex;
