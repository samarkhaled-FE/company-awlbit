
import React, { useState } from 'react';
import { useLanguageContext } from "@contexts/LanguageContext";
import EHRSection from "@components/Sections/EHRSection";
import useScrollToHash from "@hooks/useScrollToHash";
import Navbar from "@components/Layout/Navbar"; // ✅ إضافة الاستيراد

function SolutionsPage() {
    const { language } = useLanguageContext();
    const isArabic = language === "ar";
    const [showEHRDirect, setShowEHRDirect] = useState(false);

    // Scroll to hash on load
    useScrollToHash();

    // دالة التمرير للوصول لبداية EHR Section مع إخفاء Hero
    const handleScrollToEHR = (e) => {
        e.preventDefault();
        setShowEHRDirect(true); // ✅ إظهار الـ EHR
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            setTimeout(() => {
                window.history.pushState(null, null, '#ehr-systems');
            }, 300);
        }, 100);
    };

    return (
        <div className="solutions-page">
            {/* ✅ الناف بار في الأعلى */}
            <Navbar className="navbar" />

            {/* Hero Section */}
            {!showEHRDirect && (
                <section 
                    className="hero-section py-20 text-white relative overflow-hidden"
                    style={{
                        background: 'linear-gradient(135deg, #0B1A2C 0%, #1e3a8a 50%, #059669 100%)',
                        minHeight: '100vh',
                        paddingTop: '72px' // ✅ عشان الـ Navbar ثابت
                    }}
                >
                    {/* خلفيات متحركة */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
                        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-lg transform rotate-45 animate-bounce"></div>
                        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-ping"></div>
                        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-white rounded-full animate-pulse opacity-30"></div>
                        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-white rounded-lg animate-bounce opacity-40"></div>
                    </div>

                    <div className="container mx-auto px-6 text-center relative z-10 flex flex-col justify-center min-h-screen">
                        <div className="max-w-5xl mx-auto">
                            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                {isArabic ? "أنظمة السجلات الطبية الإلكترونية EHR" : "EHR Systems"}
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 opacity-90 font-light">
                                {isArabic 
                                    ? "تكامل احترافي مع Oracle Fusion لإدارة طبية متطورة"
                                    : "Professional Oracle Fusion Integration for Advanced Medical Management"
                                }
                            </p>
                            <p className="text-lg max-w-4xl mx-auto opacity-80 leading-relaxed mb-12">
                                {isArabic 
                                    ? "نقدم أنظمة سجلات طبية إلكترونية متكاملة مع Oracle Fusion تجمع بين السهولة والأمان، لتحسين تجربة المرضى وكفاءة الأطباء والإداريين في المؤسسات الصحية"
                                    : "We provide comprehensive Electronic Health Records systems integrated with Oracle Fusion that combine ease of use and security, improving patient experience and efficiency for doctors and administrators in healthcare institutions"
                                }
                            </p>

                            {/* مميزات سريعة في الهيرو */}
                            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <i className="fa-solid fa-shield-check text-2xl text-white"></i>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">
                                        {isArabic ? "أمان متقدم" : "Advanced Security"}
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        {isArabic ? "حماية فائقة للبيانات الطبية" : "Superior medical data protection"}
                                    </p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <i className="fa-solid fa-bolt text-2xl text-white"></i>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">
                                        {isArabic ? "سرعة فائقة" : "Lightning Fast"}
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        {isArabic ? "وصول فوري للسجلات الطبية" : "Instant access to medical records"}
                                    </p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <i className="fa-solid fa-users text-2xl text-white"></i>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">
                                        {isArabic ? "سهل الاستخدام" : "User Friendly"}
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        {isArabic ? "واجهة بديهية لجميع المستخدمين" : "Intuitive interface for all users"}
                                    </p>
                                </div>
                            </div>

                            {/* زر CTA */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                                <button 
                                    onClick={handleScrollToEHR}
                                    className="inline-flex items-center gap-3 bg-white text-[#0B1A2C] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl cursor-pointer"
                                >
                                    <i className="fa-solid fa-hospital-user"></i>
                                    <span>{isArabic ? "استكشف أنظمة EHR" : "Explore EHR Systems"}</span>
                                </button>
                            </div>
                            {/* الثقة والشهادات */}
                            <div className="flex justify-center items-center gap-8 opacity-70">
                                <div className="text-center">
                                    <div className="text-sm font-semibold">HL7 FHIR</div>
                                    <div className="text-xs opacity-80">Ready</div>
                                </div>
                                <div className="w-px h-8 bg-white opacity-30"></div>
                                <div className="text-center">
                                    <div className="text-sm font-semibold">Oracle</div>
                                    <div className="text-xs opacity-80">Partner</div>
                                </div>
                                <div className="w-px h-8 bg-white opacity-30"></div>
                                <div className="text-center">
                                    <div className="text-sm font-semibold">SOC 2</div>
                                    <div className="text-xs opacity-80">Certified</div>
                                </div>
                                <div className="w-px h-8 bg-white opacity-30"></div>
                                <div className="text-center">
                                    <div className="text-sm font-semibold">HIPAA</div>
                                    <div className="text-xs opacity-80">Compliant</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* ✅ EHR Section المباشر بدون زر العودة */}
            {showEHRDirect && (
                <div className="ehr-direct-view">
                    <section className="bg-white py-16" style={{marginTop: '72px'}}>
                        <div className="container mx-auto px-6">
                            {/* ... نفس كود بقية EHR Section ... */}
                            {/* يمكنك إبقاء نفس الكود لديك هنا أو وضع EHRSection مباشرة إذا أردت */}
                            <EHRSection />
                        </div>
                    </section>
                </div>
            )}

            {/* EHR Section العادي */}
            {!showEHRDirect && (
                <section id="ehr" className="bg-white pt-20 pb-20">
                    <EHRSection />
                </section>
            )}
        </div>
    )
}

export default SolutionsPage;
