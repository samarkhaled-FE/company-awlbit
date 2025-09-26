// Components/Sections/ServicesSection.jsx (إنشاء ملف جديد)
import { useLanguageContext } from "@contexts/LanguageContext";
import { Link } from "react-router-dom";

function ServicesSection() {
    const { language } = useLanguageContext();

    return (
        <section className="services-section py-16 bg-gray-50" id="services">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0B1A2C' }}>
                        {language === 'ar' ? 'خدماتنا' : 'Our Services'}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        {language === 'ar' 
                            ? 'نقدم حلول تقنية متطورة ومتكاملة لتطوير الأعمال'
                            : 'We provide advanced and integrated technical solutions for business development'
                        }
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                    {/* Oracle APEX Service */}
                    <Link 
                        to="/services/building-apex"
                        className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <div className="text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                                <i className="fa-solid fa-code text-3xl text-blue-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-4" style={{ color: '#0B1A2C' }}>
                                {language === 'ar' ? 'بناء تطبيقات Oracle APEX' : 'Oracle APEX Development'}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {language === 'ar' 
                                    ? 'تطوير تطبيقات قوية وسريعة باستخدام منصة Oracle APEX منخفضة التعليمات البرمجية'
                                    : 'Develop powerful and fast applications using Oracle APEX low-code platform'
                                }
                            </p>
                        </div>
                    </Link>

                    {/* Oracle Fusion Support Service */}
                    <Link 
                        to="/services/oracle-fusion-support"
                        className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <div className="text-center">
                            <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                                <i className="fa-solid fa-hospital text-3xl text-emerald-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-4" style={{ color: '#0B1A2C' }}>
                                {language === 'ar' ? 'دعم Oracle Fusion الطبي' : 'Oracle Fusion Medical Support'}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {language === 'ar' 
                                    ? 'دمج وتطوير الأنظمة الطبية مع Oracle Fusion لحلول رعاية صحية متكاملة'
                                    : 'Integrate and develop medical systems with Oracle Fusion for comprehensive healthcare solutions'
                                }
                            </p>
                        </div>
                    </Link>
                </div>

                {/* CTA Section */}
                <div className="cta-section">
                    <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-2xl p-8 text-center shadow-2xl">
                        <div className="max-w-2xl mx-auto">
                            <h3 className="text-3xl font-bold mb-4">
                                {language === 'ar' 
                                    ? 'احصل على دعم Oracle Fusion اليوم' 
                                    : 'Get Oracle Fusion Support Today'
                                }
                            </h3>
                            <p className="text-lg mb-8 text-blue-50 leading-relaxed">
                                {language === 'ar'
                                    ? 'تواصل مع خبرائنا للحصول على استشارة مجانية وتقييم شامل لاحتياجاتك'
                                    : 'Contact our experts for a free consultation and comprehensive assessment of your needs'
                                }
                            </p>
                            
                            <Link 
                                to="/contact" 
                                className="inline-flex items-center gap-3 bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                            >
                                <i className="fa-solid fa-calendar-check text-lg"></i>
                                <span className="text-lg">
                                    {language === 'ar' ? 'طلب استشارة مجانية' : 'Request Free Consultation'}
                                </span>
                            </Link>
                            
                            <p className="mt-6 text-sm text-blue-100">
                                {language === 'ar'
                                    ? '🚀 استشارة مجانية • 📞 رد سريع خلال 24 ساعة • ✅ خبراء معتمدين'
                                    : '🚀 Free Consultation • 📞 Quick Response within 24h • ✅ Certified Experts'
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
