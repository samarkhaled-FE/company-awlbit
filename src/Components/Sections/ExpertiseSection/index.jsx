
import React, { useRef, useState, useEffect } from 'react';
import { useLanguageContext } from '@contexts/LanguageContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Keyboard } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import './index.css';

// Inline SVG icon helpers
const Icon = {
    fusion: (
        <svg viewBox="0 0 24 24" className="w-7 h-7">
            <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.18 0 2.34-.21 3.41-.6.39-.14.64-.52.64-.93 0-.55-.45-1-1-1-.17 0-.33.04-.5.09-.83.3-1.72.44-2.55.44-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7c0 .85-.15 1.69-.44 2.5-.05.17-.09.33-.09.5 0 .55.45 1 1 1 .41 0 .79-.25.93-.64.39-1.07.6-2.23.6-3.41C22 6.48 17.52 2 12 2zm0 5c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
            />
        </svg>
    ),
    apex: (
        <svg viewBox="0 0 24 24" className="w-7 h-7">
            <path
                fill="currentColor"
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            />
        </svg>
    ),
    erp: (
        <svg viewBox="0 0 24 24" className="w-7 h-7">
            <path
                fill="currentColor"
                d="M3 5h18v2H3V5zm2 4h14v10H5V9zm2 2v6h10v-6H7zM8 2h8v2H8z"
            />
        </svg>
    )
};

const originalSlides = [
    {
        title: { ar: "دعم Oracle Fusion التقني", en: "Oracle Fusion Technical Support" },
        icon: Icon.fusion,
        bullets: {
            ar: [
                "دعم تقني متخصص لبيئات Oracle Fusion مع استكشاف الأخطاء وإصلاحها.",
                "تحسين الأداء وضبط التكوين لضمان الاستقرار والكفاءة.",
                "صيانة وقائية ومتابعة مستمرة لضمان عمل النظام بسلاسة."
            ],
            en: [
                "Specialized technical support for Oracle Fusion environments with troubleshooting.",
                "Performance optimization and configuration tuning for stability and efficiency.",
                "Preventive maintenance and continuous monitoring for smooth system operation."
            ]
        }
    },
    {
        title: { ar: "بناء تطبيقات Oracle APEX", en: "Building Oracle APEX Applications" },
        icon: Icon.apex,
        bullets: {
            ar: [
                "تطوير تطبيقات ويب تفاعلية باستخدام Oracle APEX بسرعة وكفاءة.",
                "تخصيص الواجهات وتكامل قواعد البيانات مع تجربة مستخدم متقدمة.",
                "نشر وصيانة التطبيقات مع دعم فني مستمر وتحديثات دورية."
            ],
            en: [
                "Develop interactive web applications using Oracle APEX quickly and efficiently.",
                "UI customization and database integration with advanced user experience.",
                "Application deployment and maintenance with ongoing support and regular updates."
            ]
        }
    },
    {
        title: { ar: "أنظمة ERP المتكاملة", en: "Integrated ERP Systems" },
        icon: Icon.erp,
        bullets: {
            ar: [
                "تكامل البيانات عبر المحاسبة والمشتريات والمخزون والموارد البشرية.",
                "أتمتة العمليات وتقارير لحظية تدعم القرار المؤسسي الفعال.",
                "مستودع بيانات موحد يقلل التكرار والأخطاء ويحسن الكفاءة."
            ],
            en: [
                "Unified data integration across accounting, purchasing, inventory, and HR.",
                "Process automation with real-time reporting for effective corporate decisions.",
                "Central data repository reduces duplication and errors while improving efficiency."
            ]
        }
    }
];

// خدمات الشريط - مطابقة لألوان الصورة
const servicesBanner = [
    {
        name: { ar: "Oracle Fusion", en: "Oracle Fusion" },
        fontWeight: "400",
        color: "#6B7280"
    },
    {
        name: { ar: "Oracle APEX", en: "Oracle APEX" },
        fontWeight: "600",
        color: "#3B82F6"
    },
    {
        name: { ar: "EHR Integration", en: "EHR Integration" },
        fontWeight: "500",
        color: "#059669"
    }
];

function ExpertiseSection() {
    const { language } = useLanguageContext();
    const isAr = language === "ar";
    const swiperRef = useRef(null);

    // 🔥 تكرار الشرائح عشان الـ loop يشتغل صحيح
    const slides = [...originalSlides, ...originalSlides];

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <section
            id="expertise"
            className="bg-[#0B1B2D] text-gray-200"
            aria-labelledby="exp-title"
            style={{ 
                padding: '4rem 1rem',
                minHeight: 'auto'
            }}
        >
            <header className="mb-8 text-center">
                <h2
                    id="exp-title"
                    className="text-white text-2xl md:text-3xl font-bold"
                >
                    {language === "ar" ? "مجالات الخبرة" : "Areas of Expertise"}
                </h2>
                <p className="text-gray-400 text-sm md:text-base mt-2">
                    {language === "ar"
                        ? "حلول Oracle متخصصة ومجربة — جاهزة للتطبيق في مشروعك التقني."
                        : "Specialized, proven Oracle solutions—ready to apply to your technical project."}
                </p>
            </header>

            <div className="relative max-w-6xl mx-auto">
                <Swiper
                    modules={[Navigation, Autoplay, Keyboard]}
                    // 🔥 تفعيل الـ loop دائماً
                    loop={true}
                    // 🔥 إضافة slidesPerGroup للتحكم في التنقل
                    slidesPerGroup={1}
                    // 🔥 إضافة loopedSlides لتحديد عدد الشرائح المكررة
                    loopedSlides={3}
                    speed={700}
                    grabCursor
                    spaceBetween={20}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 25
                        },
                        1024: {
                            slidesPerView: 3, // 🔥 عرض 3 شرائح
                            spaceBetween: 30
                        }
                    }}
                    keyboard={{ enabled: true }}
                    autoplay={{ 
                        delay: 4000, 
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                        // 🔥 التأكد من تفعيل الـ navigation
                        setTimeout(() => {
                            if (swiper.allowSlidePrev !== undefined) {
                                swiper.allowSlidePrev = true;
                            }
                            if (swiper.allowSlideNext !== undefined) {
                                swiper.allowSlideNext = true;
                            }
                        }, 100);
                    }}
                    onSlideChange={(swiper) => {
                    }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={`slide-${index}`}>
                            <article className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 w-full h-full transition-transform duration-300 hover:scale-105">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                                        {slide.icon}
                                    </span>
                                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                                        {slide.title[language]}
                                    </h3>
                                </div>
                                <ul className="list-disc list-inside space-y-3">
                                    {slide.bullets[language].map((bullet, bulletIndex) => (
                                        <li key={bulletIndex} className="text-sm text-slate-700 leading-relaxed">
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* 🔥 أزرار التنقل */}
                <div className="flex justify-center items-center gap-4 mt-6">
                    <button 
                        className="group w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-200 flex items-center justify-center hover:scale-105 active:scale-95"
                        aria-label={isAr ? "السابق" : "Previous"}
                        onClick={handlePrev}
                    >
                        <svg 
                            className="w-5 h-5 group-hover:scale-110 transition-transform duration-150" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d={isAr ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"} 
                            />
                        </svg>
                    </button>

                    <button 
                        className="group w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-200 flex items-center justify-center hover:scale-105 active:scale-95"
                        aria-label={isAr ? "التالي" : "Next"}
                        onClick={handleNext}
                    >
                        <svg 
                            className="w-5 h-5 group-hover:scale-110 transition-transform duration-150" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d={isAr ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} 
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* شريط الخدمات */}
            <div className="mt-16 py-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-center gap-16 flex-wrap">
                        {servicesBanner.map((service, index) => (
                            <div
                                key={index}
                                className="text-center transition-all duration-300 hover:scale-105"
                            >
                                <span
                                    className="text-2xl md:text-3xl"
                                    style={{
                                        color: service.color,
                                        fontWeight: service.fontWeight,
                                        fontFamily: 'Inter, system-ui, sans-serif',
                                        letterSpacing: '-0.025em'
                                    }}
                                >
                                    {service.name[language]}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CSS Styles */}
            <style>{`
                /* Hide default swiper navigation buttons */
                .swiper-button-next,
                .swiper-button-prev {
                    display: none !important;
                }
                
                /* Focus styles for accessibility */
                button:focus {
                    outline: 2px solid #60a5fa;
                    outline-offset: 2px;
                }

                /* Mobile adjustments */
                @media (max-width: 768px) {
                    #expertise {
                        padding: 2rem 1rem !important;
                    }

                    #expertise .text-2xl {
                        font-size: 1.5rem !important;
                    }
                    
                    #expertise .text-3xl {
                        font-size: 2rem !important;
                    }

                    #expertise .gap-16 {
                        gap: 2rem !important;
                    }
                }
            `}</style>
        </section>
    );
}

export default ExpertiseSection;
