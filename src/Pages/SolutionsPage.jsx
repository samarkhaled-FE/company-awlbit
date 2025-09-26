import React, { useState, useEffect } from 'react';
import { useLanguageContext } from "@contexts/LanguageContext";
import { useLocation } from 'react-router-dom';
import EHRSection from "@components/Sections/EHRSection";
import useScrollToHash from "@hooks/useScrollToHash";
import Navbar from "@components/Layout/Navbar";

function SolutionsPage() {
    const { language } = useLanguageContext();
    const isArabic = language === "ar";
    const [showEHRDirect, setShowEHRDirect] = useState(false);
    const location = useLocation();

    // ✅ حل مشكلة السكرول
    useEffect(() => {
        // أول حاجة: اسكرول لأعلى مهما كان
        window.scrollTo(0, 0);
        
        // إذا كان الـ URL فيه #ehr-systems
        if (location.hash === '#ehr-systems') {
            setShowEHRDirect(true);
            
            // تأكد من السكرول لأعلى بعد delays مختلفة
            const timeouts = [
                setTimeout(() => window.scrollTo(0, 0), 100),
                setTimeout(() => window.scrollTo(0, 0), 300),
                setTimeout(() => window.scrollTo(0, 0), 500),
                setTimeout(() => window.scrollTo(0, 0), 800)
            ];
            
            return () => timeouts.forEach(clearTimeout);
        } else {
            setShowEHRDirect(false);
        }
    }, [location.pathname, location.hash]);

    // ✅ تعطيل useScrollToHash للصفحة دي مؤقتاً
    // useScrollToHash(); // علق عليها

    const handleScrollToEHR = (e) => {
        e.preventDefault();
        setShowEHRDirect(true);
        window.scrollTo(0, 0);
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
            <Navbar className="navbar" />

            {/* Hero Section */}
            {!showEHRDirect && (
                <section 
                    className="hero-section py-20 text-white relative overflow-hidden"
                    style={{
                        background: 'linear-gradient(135deg, #0B1A2C 0%, #1e3a8a 50%, #059669 100%)',
                        minHeight: '100vh',
                        paddingTop: '72px'
                    }}
                >
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
                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                                <button 
                                    onClick={handleScrollToEHR}
                                    className="inline-flex items-center gap-3 bg-white text-[#0B1A2C] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl cursor-pointer"
                                >
                                    <i className="fa-solid fa-hospital-user"></i>
                                    <span>{isArabic ? "استكشف أنظمة EHR" : "Explore EHR Systems"}</span>
                                </button>
                            </div>
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

            {/* EHR Section المباشر بدون زر العودة */}
            {showEHRDirect && (
                <div className="ehr-direct-view">
                    <section className="bg-white py-16" style={{marginTop: '72px'}}>
                        <div className="container mx-auto px-6">
                            <EHRSection />
                            
                            {/* القسم الجديد مباشرة بعد EHRSection */}
                            <section className="bg-white py-16">
                                <div className="container mx-auto px-6">
                                    <div className="text-center mb-12">
                                        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{color:'#0B1B2D'}}>
                                            {isArabic ? "فوائد استخدام أنظمة EHR" : "Benefits of Using EHR Systems"}
                                        </h2>
                                        <p className="text-gray-600 max-w-3xl mx-auto">
                                            {isArabic 
                                                ? "تحسين الرعاية الصحية وتوفير الوقت والجهد في إدارة السجلات الطبية الإلكترونية"
                                                : "Improve healthcare and save time and effort in managing electronic health records"
                                            }
                                        </p>
                                    </div>
                                    <div className="flex flex-col lg:flex-row items-center gap-12">
                                        {/* اليسار: الصورة التوضيحية */}
                                        <div className="flex-1 flex justify-center items-center">
                                            <div className="w-full max-w-sm bg-gray-50 rounded-2xl p-8 shadow-lg">
                                                <div className="text-center">
                                                    <div className="w-20 h-20 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                                        <i className="fa-solid fa-desktop text-3xl text-gray-500"></i>
                                                    </div>
                                                    <h3 className="text-lg font-bold mb-2" style={{color:'#0B1B2D'}}>
                                                        {isArabic ? "نظام EHR متكامل" : "Integrated EHR System"}
                                                    </h3>
                                                    <p className="text-gray-500 text-sm">
                                                        {isArabic ? "جميع السجلات الطبية في منصة واحدة متكاملة مع Oracle Fusion" : "All medical records in one platform integrated with Oracle Fusion"}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* اليمين: قائمة الفوائد */}
                                        <div className="flex-1">
                                            <ul className="space-y-4">
                                                <li className="flex items-center gap-3">
                                                    <div className="w-6 h-6 rounded-full text-white flex items-center justify-center flex-shrink-0"
                                                         style={{backgroundColor:'#0B1B2D'}}>
                                                        <i className="fa-solid fa-check text-xs"></i>
                                                    </div>
                                                    <span className="text-gray-700">
                                                        {isArabic ? "توفير الوقت" : "Time saving"}
                                                    </span>
                                                </li>
                                                <li className="flex items-center gap-3">
                                                    <div className="w-6 h-6 rounded-full text-white flex items-center justify-center flex-shrink-0"
                                                         style={{backgroundColor:'#0B1B2D'}}>
                                                        <i className="fa-solid fa-check text-xs"></i>
                                                    </div>
                                                    <span className="text-gray-700">
                                                        {isArabic ? "تحسين رعاية المرضى" : "Improved patient care"}
                                                    </span>
                                                </li>
                                                <li className="flex items-center gap-3">
                                                    <div className="w-6 h-6 rounded-full text-white flex items-center justify-center flex-shrink-0"
                                                         style={{backgroundColor:'#0B1B2D'}}>
                                                        <i className="fa-solid fa-check text-xs"></i>
                                                    </div>
                                                    <span className="text-gray-700">
                                                        {isArabic ? "دقة التشخيص" : "Diagnostic accuracy"}
                                                    </span>
                                                </li>
                                                <li className="flex items-center gap-3">
                                                    <div className="w-6 h-6 rounded-full text-white flex items-center justify-center flex-shrink-0"
                                                         style={{backgroundColor:'#0B1B2D'}}>
                                                        <i className="fa-solid fa-check text-xs"></i>
                                                    </div>
                                                    <span className="text-gray-700">
                                                        {isArabic ? "مراقبة متقدمة عن البيانات" : "Advanced data monitoring"}
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* القسم الأخير بالـ Gradient */}
                            <section 
                                className="py-16 text-white" 
                                style={{
                                    background: 'linear-gradient(135deg, #0A203C 0%, #23907F 100%)'
                                }}
                            >
                                <div className="container mx-auto px-6 text-center">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                        {isArabic ? "جاهز لتطوير نظام EHR الخاص بك؟" : "Ready to Develop Your EHR System?"}
                                    </h3>
                                    <p className="text-white text-lg mb-8 opacity-90 max-w-3xl mx-auto">
                                        {isArabic 
                                            ? "تواصل مع فريق الخبراء اليوم للحصول على استشارة مجانية وتقييم شامل لمؤسستك الصحية."
                                            : "Contact our expert team today for a free consultation and comprehensive assessment of your healthcare institution."}
                                    </p>
                                    <a 
                                        href="/contact"
                                        className="inline-block bg-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
                                        style={{color: '#0A203C'}}
                                    >
                                        {isArabic ? "احجز استشارة مجانية" : "Book Free Consultation"}
                                    </a>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            )}

            {/* EHR Section العادي مع تقليل البادينج */}
            {!showEHRDirect && (
                <section id="ehr" className="bg-white pt-10 pb-10">
                    <EHRSection />
                    
                    {/* القسم الجديد مباشرة بعد EHRSection - فوائد استخدام أنظمة EHR */}
                    <section className="bg-white py-16">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{color:'#0B1B2D'}}>
                                    {isArabic ? "فوائد استخدام أنظمة EHR" : "Benefits of Using EHR Systems"}
                                </h2>
                                <p className="text-gray-600 max-w-3xl mx-auto">
                                    {isArabic 
                                        ? "تحسين الرعاية الصحية وتوفير الوقت والجهد في إدارة السجلات الطبية الإلكترونية"
                                        : "Improve healthcare and save time and effort in managing electronic health records"
                                    }
                                </p>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center gap-12">
                                {/* اليسار: الصورة التوضيحية */}
                                <div className="flex-1 flex justify-center items-center">
                                    <div className="w-full max-w-sm bg-gray-50 rounded-2xl p-8 shadow-lg">
                                        <div className="text-center">
                                            <div className="w-20 h-20 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                                <i className="fa-solid fa-desktop text-3xl text-gray-500"></i>
                                            </div>
                                            <h3 className="text-lg font-bold mb-2" style={{color:'#0B1B2D'}}>
                                                {isArabic ? "نظام EHR متكامل" : "Integrated EHR System"}
                                            </h3>
                                            <p className="text-gray-500 text-sm">
                                                {isArabic ? "جميع السجلات الطبية في منصة واحدة متكاملة مع Oracle Fusion" : "All medical records in one platform integrated with Oracle Fusion"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* اليمين: قائمة الفوائد */}
                                <div className="flex-1">
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full text-white flex items-center justify-center flex-shrink-0"
                                                 style={{backgroundColor:'#0B1B2D'}}>
                                                <i className="fa-solid fa-check text-xs"></i>
                                            </div>
                                            <span className="text-gray-700">
                                                {isArabic ? "توفير الوقت" : "Time saving"}
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full text-white flex items-center justify-center flex-shrink-0"
                                                 style={{backgroundColor:'#0B1B2D'}}>
                                                <i className="fa-solid fa-check text-xs"></i>
                                            </div>
                                            <span className="text-gray-700">
                                                {isArabic ? "تحسين رعاية المرضى" : "Improved patient care"}
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full text-white flex items-center justify-center flex-shrink-0"
                                                 style={{backgroundColor:'#0B1B2D'}}>
                                                <i className="fa-solid fa-check text-xs"></i>
                                            </div>
                                            <span className="text-gray-700">
                                                {isArabic ? "دقة التشخيص" : "Diagnostic accuracy"}
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full text-white flex items-center justify-center flex-shrink-0"
                                                 style={{backgroundColor:'#0B1B2D'}}>
                                                <i className="fa-solid fa-check text-xs"></i>
                                            </div>
                                            <span className="text-gray-700">
                                                {isArabic ? "مراقبة متقدمة عن البيانات" : "Advanced data monitoring"}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            )}

            {/* قسم فوائد استخدام أنظمة EHR الإضافي منفصل تماماً */}
            {!showEHRDirect && (
                <section className="bg-gray-50 py-12" style={{marginTop: '0px', paddingTop: '0px'}}>
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="flex-1 flex justify-center items-center">
                                <div className="w-56 h-56 bg-gray-100 rounded-2xl flex flex-col items-center justify-center shadow-lg">
                                    <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-200 mb-4">
                                        <i className="fa-solid fa-desktop text-3xl text-gray-500"></i>
                                    </div>
                                    <div className="font-bold text-lg mb-1" style={{color:'#0B1B2D'}}>
                                        {isArabic ? "نظام EHR شامل" : "Integrated EHR System"}
                                    </div>
                                    <div className="text-gray-500 text-sm">
                                        {isArabic ? "جميع السجلات الطبية في منصة واحدة شاملة." : "All medical records in one comprehensive platform."}
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{color:'#0B1B2D'}}>
                                    {isArabic ? "فوائد استخدام أنظمة EHR" : "Benefits of Using EHR Systems"}
                                </h2>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full text-white flex items-center justify-center mt-1" style={{backgroundColor:'#0B1B2D'}}>
                                            <i className="fa-solid fa-stopwatch"></i>
                                        </span>
                                        <div>
                                            <div className="font-semibold text-md" style={{color:'#0B1B2D'}}>
                                                {isArabic ? "توفير الوقت" : "Time Saving"}
                                            </div>
                                            <div className="text-gray-600 text-sm">
                                                {isArabic 
                                                    ? "سرعة إدخال البيانات واسترجاع سجلات المرضى في ثوانٍ بدلاً من البحث اليدوي في الملفات الورقية."
                                                    : "Quick data entry and retrieval of patient records in seconds instead of manual paper ﬁle search."}
                                            </div>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full text-white flex items-center justify-center mt-1" style={{backgroundColor:'#0B1B2D'}}>
                                            <i className="fa-solid fa-database"></i>
                                        </span>
                                        <div>
                                            <div className="font-semibold text-md" style={{color:'#0B1B2D'}}>
                                                {isArabic ? "تحديث البيانات الدائم" : "Continuous Data Updates"}
                                            </div>
                                            <div className="text-gray-600 text-sm">
                                                {isArabic 
                                                    ? "سهولة تحديث حالة المريض ونتائج التحاليل وطرق العلاج بشكل لحظي وآمن."
                                                    : "Easily update patient status, lab results, and treatment plans instantly and securely."}
                                            </div>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full text-white flex items-center justify-center mt-1" style={{backgroundColor:'#0B1B2D'}}>
                                            <i className="fa-solid fa-chart-bar"></i>
                                        </span>
                                        <div>
                                            <div className="font-semibold text-md" style={{color:'#0B1B2D'}}>
                                                {isArabic ? "إحصاءات دقيقة عن الحالات" : "Accurate Case Statistics"}
                                            </div>
                                            <div className="text-gray-600 text-sm">
                                                {isArabic 
                                                    ? "توليد تقارير وإحصاءات مفصلة لدعم قرارات الإدارة الطبية وتحسين جودة الخدمة."
                                                    : "Generate detailed reports and statistics to support medical management decisions and improve service quality."}
                                            </div>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full text-white flex items-center justify-center mt-1" style={{backgroundColor:'#0B1B2D'}}>
                                            <i className="fa-solid fa-shield-halved"></i>
                                        </span>
                                        <div>
                                            <div className="font-semibold text-md" style={{color:'#0B1B2D'}}>
                                                {isArabic ? "إدارة فعّالة للبيانات" : "Effective Data Management"}
                                            </div>
                                            <div className="text-gray-600 text-sm">
                                                {isArabic 
                                                    ? "إدارة مركزية للبيانات مع حماية معلومات المرضى وضمان السرية والأمان."
                                                    : "Centralized data management with patient information protection, confidentiality and security."}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA القسم الأخير مع الجراديانت - مطابق للصورة المرفقة */}
            {!showEHRDirect && (
                <section className="py-8 px-6" style={{marginTop: '0px', paddingTop: '0px'}}>
                    <div className="container mx-auto px-6">
                        <div 
                            className="py-16 rounded-3xl shadow-lg"
                            style={{
                                background: 'linear-gradient(135deg, #0A203C 0%, #23907F 100%)'
                            }}
                        >
                            <div className="text-center px-6">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                                    {isArabic ? "جاهز لتطوير نظام EHR الخاص بك؟" : "Ready to Develop Your EHR System?"}
                                </h3>
                                <p className="text-white text-lg mb-8 opacity-90 max-w-3xl mx-auto">
                                    {isArabic 
                                        ? "تواصل مع فريق الخبراء اليوم للحصول على استشارة مجانية وتقييم شامل لمؤسستك الصحية."
                                        : "Contact our expert team today for a free consultation and comprehensive assessment of your healthcare institution."}
                                </p>
                                <a 
                                    href="/contact"
                                    className="inline-block bg-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
                                    style={{color: '#0A203C'}}
                                >
                                    {isArabic ? "احجز استشارة مجانية" : "Book Free Consultation"}
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* CSS Override */}
            <style>{`
                .solutions-page,
                .solutions-page * {
                    margin-top: 0 !important;
                }
                .solutions-page .main-layout,
                .main-layout .solutions-page,
                .solutions-page section,
                .solutions-page div {
                    padding-top: 0 !important;
                    margin-top: 0 !important;
                }
                .solutions-page > *:not(.navbar):first-child {
                    margin-top: 0 !important;
                    padding-top: 0 !important;
                }
            `}</style>
        </div>
    )
}

export default SolutionsPage;
