
import React, { useEffect, useState } from 'react';
import { useLanguageContext } from "@contexts/LanguageContext";
import { Link } from "react-router-dom";
import Navbar from "@components/Layout/Navbar"; // 🔥 إضافة استيراد الـ Navbar

function WhyAwlBitPage() {
    const { language } = useLanguageContext();
    const isArabic = language === "ar";
    const [animatedNumbers, setAnimatedNumbers] = useState({
        patients: 0,
        uptime: 0,
        setupTime: 0,
        clients: 0
    });

    useEffect(() => {
        window.scrollTo(0, 0);

        // Handle hash navigation with correct scroll margin for navbar
        const handleHashNavigation = () => {
            const hash = window.location.hash;
            if (hash) {
                setTimeout(() => {
                    const element = document.querySelector(hash);
                    if (element) {
                        element.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }, 500);
            }
        };
        handleHashNavigation();
        window.addEventListener('hashchange', handleHashNavigation);

        // باقي الكود...
        const animateNumbers = () => {
            const duration = 2000;
            const steps = 60;
            const stepDuration = duration / steps;
            let currentStep = 0;
            const timer = setInterval(() => {
                currentStep++;
                const progress = currentStep / steps;
                setAnimatedNumbers({
                    patients: Math.floor(500 * progress),
                    uptime: Math.floor(99.9 * progress * 10) / 10,
                    setupTime: Math.floor(24 * progress),
                    clients: Math.floor(1050 * progress)
                });
                if (currentStep >= steps) {
                    clearInterval(timer);
                    setAnimatedNumbers({
                        patients: 500,
                        uptime: 99.9,
                        setupTime: 24,
                        clients: 1050
                    });
                }
            }, stepDuration);
            return () => clearInterval(timer);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumbers();
                }
            });
        });

        const statsElement = document.getElementById('animated-stats');
        if (statsElement) {
            observer.observe(statsElement);
        }

        return () => {
            observer.disconnect();
            window.removeEventListener('hashchange', handleHashNavigation);
        };
    }, []);

    // باقي البيانات...
    const heroContent = {
        title: {
            ar: "لماذا تختار AwlBit؟",
            en: "Why Choose AwlBit?"
        },
        subtitle: {
            ar: "الحل الذكي الوحيد لتكامل Oracle مع أنظمة الرعاية الصحية",
            en: "The Only Smart Solution for Oracle Healthcare Systems Integration"
        },
        description: {
            ar: "نحن لسنا مجرد شركة تقنية، نحن شريكك في التحول الرقمي للرعاية الصحية. مع خبرة تزيد عن 20 عاماً وثقة أكثر من 1,050 مؤسسة طبية حول العالم.",
            en: "We're not just a tech company, we're your partner in healthcare digital transformation. With over 20 years of experience and trust of 1,050+ medical institutions worldwide."
        }
    };

    const statsData = [
        {
            number: animatedNumbers.patients,
            suffix: "K+",
            label: {
                ar: "سجل مريض يُزامَن يومياً",
                en: "Patient Records Synchronized Daily"
            },
            icon: "fa-solid fa-user-injured",
            color: "#0066FF"
        },
        {
            number: animatedNumbers.uptime,
            suffix: "%",
            label: {
                ar: "ضمان توافر الخدمة",
                en: "System Uptime Guarantee"
            },
            icon: "fa-solid fa-server",
            color: "#0B1B2D"
        },
        {
            number: animatedNumbers.setupTime,
            suffix: isArabic ? " ساعة" : "h",
            label: {
                ar: "متوسط زمن إعداد التكامل",
                en: "Average Integration Setup"
            },
            icon: "fa-solid fa-clock",
            color: "#0066FF"
        },
        {
            number: animatedNumbers.clients,
            suffix: "+",
            label: {
                ar: "مؤسسة طبية تثق بنا",
                en: "Healthcare Organizations Trust Us"
            },
            icon: "fa-solid fa-hospital",
            color: "#0B1B2D"
        }
    ];

    const methodology = {
        title: {
            ar: "منهجية عمل AwlBit المتقدمة",
            en: "AwlBit Advanced Work Methodology"
        },
        subtitle: {
            ar: "نتبع منهجية علمية مدروسة تضمن نجاح مشروعك من البداية حتى النهاية",
            en: "We follow a scientific methodology that ensures your project success from start to finish"
        },
        steps: [
            {
                id: 1,
                icon: "fa-solid fa-search",
                title: { ar: "تحليل المتطلبات والاستشارة", en: "Requirements Analysis & Consultation" },
                description: { ar: "دراسة شاملة لاحتياجاتك وتحديد أفضل الحلول المناسبة لبيئة عملك", en: "Comprehensive study of your needs and identify the best solutions for your environment" }
            },
            {
                id: 2,
                icon: "fa-solid fa-drafting-compass",
                title: { ar: "التصميم والتخطيط", en: "Design & Planning" },
                description: { ar: "تصميم مخططات دقيقة للنظام مع مراعاة معايير HIPAA وSOC 2", en: "Design accurate system blueprints considering HIPAA and SOC 2 standards" }
            },
            {
                id: 3,
                icon: "fa-solid fa-code",
                title: { ar: "التطوير والتنفيذ", en: "Development & Implementation" },
                description: { ar: "تنفيذ الحلول باستخدام أحدث تقنيات Oracle مع ضمان الجودة والأمان", en: "Implement solutions using latest Oracle technologies with quality assurance" }
            },
            {
                id: 4,
                icon: "fa-solid fa-cogs",
                title: { ar: "التكامل والاختبار", en: "Integration & Testing" },
                description: { ar: "ربط الأنظمة بسلاسة مع إجراء اختبارات شاملة لضمان الأداء الأمثل", en: "Seamless system integration with comprehensive testing for optimal performance" }
            },
            {
                id: 5,
                icon: "fa-solid fa-rocket",
                title: { ar: "الإطلاق والتدريب", en: "Launch & Training" },
                description: { ar: "إطلاق النظام بنجاح مع توفير التدريب والدعم اللازم للفرق", en: "Successful system launch with necessary training and support for teams" }
            },
            {
                id: 6,
                icon: "fa-solid fa-headset",
                title: { ar: "الدعم المستمر", en: "Ongoing Support" },
                description: { ar: "دعم مستمر 24/7 مع تحديثات دورية وصيانة وقائية", en: "Continuous 24/7 support with regular updates and preventive maintenance" }
            }
        ]
    };

    return (
        <div className="why-awlbit-page bg-white">
            {/* 🔥 إضافة الـ Navbar هنا */}
            <Navbar className="navbar" />
            
            {/* 🔥 تعديل Hero Section ليأخذ في اعتباره ارتفاع الـ Navbar */}
            <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "calc(100vh - 72px)" }}>
                <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(135deg, #0066FF 0%, #0B1B2D 50%, #0066FF 100%)` }}>
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full" style={{ animation: 'float 6s ease-in-out infinite' }}></div>
                        <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-lg transform rotate-45" style={{ animation: 'float 4s ease-in-out infinite' }}></div>
                        <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-white rounded-full" style={{ animation: 'float 3s ease-in-out infinite' }}></div>
                        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-lg transform rotate-12" style={{ animation: 'float 5s ease-in-out infinite' }}></div>
                    </div>
                </div>
                <div className="relative z-10 container mx-auto px-6 text-center text-white">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">{heroContent.title[language]}</h1>
                    <p className="text-2xl md:text-3xl font-light mb-8">{heroContent.subtitle[language]}</p>
                    <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-12 opacity-90">{heroContent.description[language]}</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
                            <i className="fa-solid fa-rocket"></i>
                            <span>{isArabic ? "احجز استشارة مجانية" : "Book Free Consultation"}</span>
                        </Link>
                        <a href="#methodology" className="inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                            <i className="fa-solid fa-route"></i>
                            <span>{isArabic ? "شاهد منهجيتنا" : "See Our Methodology"}</span>
                        </a>
                    </div>
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* باقي الأقسام بدون تعديل */}
            {/* Animated Stats */}
            <section id="animated-stats" className="py-20 bg-gradient-to-r from-gray-50 to-blue-50" style={{ scrollMarginTop: '72px' }}>
                {/* باقي المحتوى */}
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0B1B2D' }}>{isArabic ? "أرقام تثبت التميز" : "Numbers That Prove Excellence"}</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{isArabic ? "هذه ليست مجرد أرقام، بل شهادات نجاح حقيقية من عملائنا حول العالم" : "These aren't just numbers, they're real success testimonials from our clients worldwide"}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {statsData.map((stat, index) => (
                            <div key={index} className="relative bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 group" style={{ backgroundImage: `linear-gradient(135deg, ${stat.color}15, white)` }}>
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: `${stat.color}20` }}>
                                    <i className={`${stat.icon} text-2xl`} style={{ color: stat.color }}></i>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold mb-3" style={{ color: stat.color }}>{stat.number}{stat.suffix}</div>
                                    <p className="text-gray-700 font-medium leading-tight">{stat.label[language]}</p>
                                </div>
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ backgroundColor: stat.color }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology Timeline */}
            <section id="methodology" className="py-16 bg-white" style={{ scrollMarginTop: '72px' }}>
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0B1B2D' }}>{methodology.title[language]}</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{methodology.subtitle[language]}</p>
                    </div>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600 hidden md:block"></div>
                        <div className="relative space-y-12">
                            {methodology.steps.map((step, index) => (
                                <div key={step.id} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-6`}>
                                    <div className="md:w-5/12 w-full">
                                        <div className={`bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                                            <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
                                                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#0B1B2D', boxShadow: '0 4px 15px rgba(11, 27, 45, 0.3)' }}>
                                                    <i className={`${step.icon} text-lg text-white`}></i>
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-bold mb-3" style={{ color: '#0B1B2D' }}>{step.title[language]}</h3>
                                            <p className="text-sm text-gray-600 leading-relaxed">{step.description[language]}</p>
                                        </div>
                                    </div>
                                    <div className="relative z-10 md:w-2/12 w-full flex justify-center">
                                        <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg transform hover:scale-105 transition-all duration-300" style={{ backgroundImage: `linear-gradient(135deg, #0066FF, #0B1B2D)`, boxShadow: '0 8px 20px rgba(11, 27, 45, 0.3)' }}>{step.id}</div>
                                        {index < methodology.steps.length - 1 && (
                                            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-12 hidden md:block" style={{ backgroundImage: `linear-gradient(to bottom, #0B1B2D, transparent)` }}></div>
                                        )}
                                    </div>
                                    <div className="md:w-5/12 w-full hidden md:block"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-3 rounded-full">
                            <i className="fa-solid fa-route text-blue-600"></i>
                            <span className="text-sm font-semibold text-gray-700">{isArabic ? "6 خطوات متكاملة لضمان نجاح مشروعك" : "6 Integrated Steps to Ensure Project Success"}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0B1B2D' }}>{isArabic ? "مستعد لتكون التالي؟" : "Ready to Be Next?"}</h2>
                        <p className="text-xl text-gray-600 mb-12 leading-relaxed">{isArabic ? "انضم إلى أكثر من 1,050 مؤسسة طبية حول العالم واكتشف الفرق الحقيقي لحلول AwlBit" : "Join over 1,050 medical institutions worldwide and discover the real difference of AwlBit solutions"}</p>
                        <div className="mb-12">
                            <Link to="/contact" className="inline-flex items-center gap-4 text-white px-12 py-6 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" style={{ backgroundImage: `linear-gradient(135deg, #0066FF, #0B1B2D)`, boxShadow: '0 10px 30px rgba(11, 27, 45, 0.3)' }}>
                                <i className="fa-solid fa-calendar-days text-xl"></i>
                                <span>{isArabic ? "احجز استشارة مجانية الآن" : "Book Free Consultation Now"}</span>
                                <i className={`fa-solid fa-arrow-${isArabic ? 'left' : 'right'} text-lg`}></i>
                            </Link>
                            <p className="text-gray-500 mt-4 flex items-center justify-center gap-2">
                                <i className="fa-solid fa-phone text-sm"></i>
                                <span className="font-medium">+20 100 467 7036</span>
                                <span className="opacity-60">|</span>
                                <span className="text-sm">{isArabic ? "أو اتصل بنا مباشرة" : "or call us directly"}</span>
                            </p>
                        </div>
                        <div className="flex justify-center items-center gap-8 opacity-60">
                            <div className="text-center">
                                <div className="text-sm font-semibold">HIPAA</div>
                                <div className="text-xs">Compliant</div>
                            </div>
                            <div className="w-px h-8 bg-gray-300"></div>
                            <div className="text-center">
                                <div className="text-sm font-semibold">SOC 2</div>
                                <div className="text-xs">Certified</div>
                            </div>
                            <div className="w-px h-8 bg-gray-300"></div>
                            <div className="text-center">
                                <div className="text-sm font-semibold">Oracle</div>
                                <div className="text-xs">Partner</div>
                            </div>
                            <div className="w-px h-8 bg-gray-300"></div>
                            <div className="text-center">
                                <div className="text-sm font-semibold">HL7 FHIR</div>
                                <div className="text-xs">Ready</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                .shadow-3xl { box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25); }
            `}</style>
        </div>
    );
}

export default WhyAwlBitPage;
