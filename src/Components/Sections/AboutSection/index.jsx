
import { useLanguageContext } from "@contexts/LanguageContext";
import { useNavigate } from "react-router-dom"; // 🔥 إضافة useNavigate

const data = {
    header: {
        title: {
            ar: "من نحن",
            en: "About Us"
        },
        description: {
            ar: "تأسست أولبت للبرمجيات في عام 2024 وهي شركة عالمية رائدة في تقديم خدمات استشارات تقنية المعلومات وخدمات تطوير البرمجيات. بفضل خبرة تراكمية تزيد عن 20 عاماً، ساعدنا أكثر من 1,050 عميلاً من أكثر من 30 دولة على تحقيق النجاح الرقمي وتنفيذ مشروعات تقنية المعلومات بنجاح",
            en: "Founded in 2024, Olbit Software is a leading global provider of IT consulting and software development services. With over 20 years of combined experience, we've helped more than 1,050 clients from over 30 countries achieve digital success and successfully implement IT projects."
        }
    },
    features: [
        {
            icon: "fa-solid fa-rocket",
            title: {
                ar: "حلول مبتكرة",
                en: "Innovative Solutions"
            },
            description: {
                ar: "نقدم أحدث التقنيات والحلول المبتكرة لتطوير أعمالك",
                en: "We provide the latest technologies and innovative solutions for your business development"
            }
        },
        {
            icon: "fa-solid fa-shield-halved",
            title: {
                ar: "أمان وموثوقية",
                en: "Security & Reliability"
            },
            description: {
                ar: "أنظمة آمنة وموثوقة تضمن حماية بياناتك وسلامة معلوماتك",
                en: "Secure and reliable systems that ensure data protection and information safety"
            }
        },
        {
            icon: "fa-solid fa-headset",
            title: {
                ar: "دعم فني متميز",
                en: "Excellent Technical Support"
            },
            description: {
                ar: "فريق دعم فني محترف متاح 24/7 لضمان استمرارية أعمالك",
                en: "Professional technical support team available 24/7 to ensure business continuity"
            }
        },
        {
            icon: "fa-solid fa-chart-line",
            title: {
                ar: "نمو مستدام",
                en: "Sustainable Growth"
            },
            description: {
                ar: "استراتيجيات نمو مدروسة تساعدك على تحقيق أهدافك طويلة المدى",
                en: "Thoughtful growth strategies that help you achieve your long-term goals"
            }
        },
        {
            icon: "fa-solid fa-users-gear",
            title: {
                ar: "فريق خبراء",
                en: "Expert Team"
            },
            description: {
                ar: "فريق من الخبراء المتخصصين في أحدث التقنيات والممارسات",
                en: "Team of experts specialized in the latest technologies and practices"
            }
        },
        {
            icon: "fa-solid fa-clock",
            title: {
                ar: "تسليم في الوقت المحدد",
                en: "On-Time Delivery"
            },
            description: {
                ar: "التزام بالمواعيد المحددة وتسليم المشاريع في الوقت المناسب",
                en: "Commitment to deadlines and delivering projects on time"
            }
        }
    ]
}

function AboutSection() {
    const { language } = useLanguageContext();
    const navigate = useNavigate(); // 🔥 استخدام useNavigate hook
    const isAr = language === "ar";

    return (
        <section 
            className="about-section" 
            id="about"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem 0',
                margin: '0',
                backgroundColor: '#f8fafc'
            }}
            dir={isAr ? "rtl" : "ltr"}
        >
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                {/* Section Header - بدون tag "معلومات عنا" */}
                <div 
                    className="section-header" 
                    style={{
                        textAlign: 'center',
                        marginBottom: '4rem',
                        animation: 'fadeInUp 1s ease-out'
                    }}
                >
                    <h2 style={{
                        fontSize: '3.5rem',
                        fontWeight: '800',
                        color: '#0B1B2D',
                        marginBottom: '2rem',
                        fontFamily: isAr ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                        lineHeight: '1.2'
                    }}>
                        {data.header.title[language]}
                    </h2>
                    
                    <p style={{
                        fontSize: '1.2rem',
                        lineHeight: '1.8',
                        color: 'rgba(11, 27, 45, 0.8)',
                        maxWidth: '900px',
                        margin: '0 auto',
                        fontFamily: isAr ? "'Cairo', sans-serif" : "'Inter', sans-serif"
                    }}>
                        {data.header.description[language]}
                    </p>
                </div>

                {/* Features Grid - 6 بطاقات في 2 صفوف */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem',
                    animation: 'fadeInUp 1s ease-out 0.3s both',
                    marginBottom: '3rem'
                }}>
                    {data.features.map((feature, index) => (
                        <div
                            key={index}
                                style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '1.5rem',
                                padding: '2rem',
                                borderRadius: '20px',
                                    // use backgroundImage for gradient to avoid mixing shorthand with backgroundColor elsewhere
                                    backgroundImage: 'linear-gradient(135deg, rgba(1, 102, 255, 0.05), rgba(255, 255, 255, 0.9))',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(1, 102, 255, 0.1)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                animationDelay: `${index * 0.1}s`,
                                textAlign: isAr ? 'right' : 'left'
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget;
                                el.style.transform = 'translateY(-8px)';
                                el.style.boxShadow = '0 20px 40px rgba(1, 102, 255, 0.15)';
                                el.style.borderColor = 'rgba(1, 102, 255, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget;
                                el.style.transform = 'translateY(0)';
                                el.style.boxShadow = 'none';
                                el.style.borderColor = 'rgba(1, 102, 255, 0.1)';
                            }}
                        >
                            {/* Icon */}
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '15px',
                                // use backgroundImage for gradient here as well
                                backgroundImage: 'linear-gradient(135deg, #0166FF, #0052CC)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                boxShadow: '0 8px 25px rgba(1, 102, 255, 0.3)'
                            }}>
                                <i 
                                    className={feature.icon} 
                                    style={{
                                        fontSize: '1.5rem',
                                        color: 'white'
                                    }}
                                ></i>
                            </div>

                            {/* Content */}
                            <div>
                                <h3 style={{
                                    fontSize: '1.3rem',
                                    fontWeight: '700',
                                    color: '#0B1B2D',
                                    marginBottom: '0.8rem',
                                    fontFamily: isAr ? "'Cairo', sans-serif" : "'Inter', sans-serif"
                                }}>
                                    {feature.title[language]}
                                </h3>

                                <p style={{
                                    fontSize: '1rem',
                                    lineHeight: '1.6',
                                    color: 'rgba(11, 27, 45, 0.7)',
                                    margin: 0,
                                    fontFamily: isAr ? "'Cairo', sans-serif" : "'Inter', sans-serif"
                                }}>
                                    {feature.description[language]}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div style={{
                    textAlign: 'center',
                    animation: 'fadeInUp 1s ease-out 0.6s both'
                }}>
                    <button
                        style={{
                            backgroundColor: '#0166FF',
                            color: 'white',
                            padding: '1rem 2.5rem',
                            borderRadius: '12px',
                            border: '2px solid #0166FF',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            fontFamily: isAr ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                            boxShadow: '0 8px 25px rgba(1, 102, 255, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-3px)';
                            e.target.style.boxShadow = '0 15px 35px rgba(1, 102, 255, 0.4)';
                            e.target.style.backgroundColor = '#0052CC';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 8px 25px rgba(1, 102, 255, 0.3)';
                            e.target.style.backgroundColor = '#0166FF';
                        }}
                        onClick={() => {
                            // 🔥 استخدام navigate بدلاً من window.navigateToSection
                            navigate('/contact');
                        }}
                    >
                        {isAr ? "ابدأ مشروعك معنا" : "Start Your Project With Us"}
                    </button>
                </div>
            </div>

            {/* CSS Animations */}
            <style>
                {`
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @media (max-width: 768px) {
                        .about-section h2 {
                            font-size: 2.5rem !important;
                        }
                        
                        .about-section .section-header p {
                            font-size: 1rem !important;
                        }
                        
                        .about-section .container {
                            padding: 0 1rem !important;
                        }
                        
                        .about-section div[style*="grid-template-columns"] {
                            grid-template-columns: 1fr !important;
                        }

                        .about-section div[style*="display: flex"][style*="gap: 1.5rem"] {
                            flex-direction: column !important;
                            text-align: center !important;
                        }
                    }
                `}
            </style>
        </section>
    )
}

export default AboutSection;
