
import React, { useState, useEffect } from "react";
import { useLanguageContext } from "@contexts/LanguageContext";

export default function HeroMain() {
  const { language } = useLanguageContext();
  const isAr = language === "ar";
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // بيانات الشرائح مع الصور والنصوص المطلوبة
  const slides = [
    {
      id: 1,
      image: "/assets/images/cerner-oracle.png",
      title: isAr ? "اكتشف أتمتة الرعاية الصحية" : "Discover Healthcare Automations",
      subtitle: isAr ? "حلول Oracle Cerner المتقدمة" : "Advanced Oracle Cerner Solutions",
      description: isAr ? "أنظمة متطورة لإدارة الرعاية الصحية مع تكامل شامل وأمان متقدم لضمان أفضل الخدمات الطبية" : "Advanced healthcare management systems with comprehensive integration and enhanced security for optimal medical services",
      stats: [
        { number: "1,050+", label: isAr ? "مؤسسة طبية" : "Medical Institutions" },
        { number: "20+", label: isAr ? "سنة خبرة" : "Years Experience" },
        { number: "15+", label: isAr ? "دولة حول العالم" : "Countries Worldwide" }
      ]
    },
    {
      id: 2,
      image: "/assets/images/oracle-apex.png",
      title: isAr ? "تطوير تطبيقات Oracle APEX" : "Oracle APEX Development",
      subtitle: isAr ? "تطوير سريع ومرن" : "Fast & Flexible Development",
      description: isAr ? "بناء تطبيقات قوية بسرعة عالية مع أدوات تطوير متقدمة وواجهات سهلة الاستخدام وقابلية توسع عالية" : "Build powerful applications quickly with advanced development tools, user-friendly interfaces and high scalability",
      stats: [
        { number: "500+", label: isAr ? "تطبيق مطور" : "Apps Developed" },
        { number: "98%", label: isAr ? "رضا العملاء" : "Client Satisfaction" },
        { number: "24/7", label: isAr ? "دعم فني" : "Technical Support" }
      ]
    },
    {
      id: 3,
      image: "/assets/images/oracle-fusion.png",
      title: isAr ? "تكامل Oracle Fusion" : "Oracle Fusion Integration",
      subtitle: isAr ? "حلول متكاملة للأعمال" : "Integrated Business Solutions", 
      description: isAr ? "تكامل شامل لأنظمة الأعمال مع إدارة متقدمة وتحليلات ذكية شاملة لتحسين الأداء التشغيلي" : "Complete business system integration with advanced management and comprehensive smart analytics for operational performance enhancement",
      stats: [
        { number: "300+", label: isAr ? "نظام متكامل" : "Integrated Systems" },
        { number: "99.9%", label: isAr ? "وقت التشغيل" : "Uptime" },
        { number: "40+", label: isAr ? "وحدة أعمال" : "Business Modules" }
      ]
    }
  ];

  // تلقائي تغيير الشرائح
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        handleSlideChange((prev) => (prev + 1) % slides.length);
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length, isTransitioning]);

  const handleSlideChange = (newSlide) => {
    if (typeof newSlide === 'function') {
      newSlide = newSlide(currentSlide);
    }
    
    if (newSlide !== currentSlide) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(newSlide);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 100);
      }, 200);
    }
  };

  const text = isAr
    ? {
        tag: "خدمات Oracle المتخصصة",
        ctaContact: "تواصل معنا"
      }
    : {
        tag: "Oracle Specialized Services", 
        ctaContact: "Contact Us"
      };

  // 🔥 تعديل الارتفاع ليكون متناسق مع الـ Navbar
  const heroMainStyle = {
    minHeight: "calc(100vh - 72px)", // 🔥 حساب ارتفاع الـ Navbar
    width: "100%",
    position: "relative",
    direction: isAr ? "rtl" : "ltr",
    overflow: "hidden",
    backgroundColor: "#0B1B2D"
  };

  const slideStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "calc(100vh - 72px)", // 🔥 حساب ارتفاع الـ Navbar
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    opacity: 0,
    visibility: "hidden",
    transform: "scale(1.02)",
    transition: "all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    willChange: "opacity, transform, visibility"
  };

  const activeSlideStyle = {
    ...slideStyle,
    opacity: 1,
    visibility: "visible", 
    transform: "scale(1)",
    zIndex: 2
  };

  // 🔥 تحسين العرض والمسافات
  const slideContentStyle = {
    maxWidth: "1200px", // 🔥 تحديد عرض أقصى متناسق
    margin: "0 auto",
    padding: "0 2rem",
    display: "grid",
    gridTemplateColumns: isAr ? "1fr 1fr" : "1fr 1fr",
    gap: "2rem", // 🔥 تقليل المسافة للتناسق
    alignItems: "center",
    width: "100%",
    height: "100%",
    zIndex: 10,
    position: "relative"
  };

  const textContentStyle = {
    textAlign: isAr ? "right" : "left",
    animation: "slideInText 1s ease-out 0.3s both"
  };

  const imageContentStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    animation: "slideInImage 1.2s ease-out 0.6s both"
  };

  const tagStyle = {
    display: "inline-block",
    backgroundImage: "linear-gradient(135deg, #0166FF, rgba(255, 255, 255, 0.1))",
    backdropFilter: "blur(20px)",
    color: "white",
    padding: "0.5rem 1rem", // 🔥 تقليل الحجم
    borderRadius: "50px",
    fontSize: "0.75rem", // 🔥 تصغير الخط
    fontWeight: "600",
    marginBottom: "1.2rem", // 🔥 تقليل المسافة
    border: "1px solid rgba(1, 102, 255, 0.3)",
    boxShadow: "0 8px 32px rgba(1, 102, 255, 0.2)"
  };

  const slideTitleStyle = {
    fontSize: "2.8rem", // 🔥 تقليل الحجم للتناسق
    fontWeight: "800",
    lineHeight: "1.1",
    color: "white",
    marginBottom: "0.7rem", // 🔥 تقليل المسافة
    fontFamily: isAr ? "'Cairo', sans-serif" : "'Inter', sans-serif",
    textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)"
  };

  const slideSubtitleStyle = {
    fontSize: "1.2rem", // 🔥 تقليل الحجم
    fontWeight: "600",
    marginBottom: "0.7rem", // 🔥 تقليل المسافة
    opacity: 0.95,
    color: "rgba(255, 255, 255, 0.95)",
    fontFamily: isAr ? "'Cairo', sans-serif" : "'Inter', sans-serif"
  };

  const slideDescStyle = {
    fontSize: "0.95rem", // 🔥 تقليل الحجم
    lineHeight: "1.6",
    marginBottom: "1.3rem", // 🔥 تقليل المسافة
    opacity: 0.9,
    color: "rgba(255, 255, 255, 0.9)",
    fontFamily: isAr ? "'Cairo', sans-serif" : "'Inter', sans-serif"
  };

  const slideImageStyle = {
    width: "100%",
    maxWidth: "380px", // 🔥 تقليل الحجم للتناسق
    height: "auto",
    objectFit: "contain",
    filter: "drop-shadow(0 25px 50px rgba(1, 102, 255, 0.2))",
    transition: "transform 0.6s ease"
  };

  const statsContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "0.8rem", // 🔥 تقليل المسافة
    marginBottom: "1.8rem" // 🔥 تقليل المسافة
  };

  const statItemStyle = {
    textAlign: "center",
    padding: "0.7rem", // 🔥 تقليل الحجم
    borderRadius: "10px", // 🔥 تقليل الحجم
    backgroundImage: "linear-gradient(135deg, rgba(1, 102, 255, 0.1), rgba(255, 255, 255, 0.05))",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(1, 102, 255, 0.2)"
  };

  const statNumberStyle = {
    fontSize: "1.6rem", // 🔥 تقليل الحجم
    fontWeight: "800",
    color: "#0166FF",
    display: "block",
    textShadow: "0 0 20px rgba(1, 102, 255, 0.3)",
    fontFamily: "'Inter', sans-serif"
  };

  const statLabelStyle = {
    fontSize: "0.75rem", // 🔥 تقليل الحجم
    fontWeight: "500",
    color: "rgba(255, 255, 255, 0.8)",
    marginTop: "0.2rem",
    fontFamily: isAr ? "'Cairo', sans-serif" : "'Inter', sans-serif"
  };

  const primaryBtnStyle = {
    backgroundColor: "#0166FF",
    color: "white",
    padding: "0.8rem 1.6rem", // 🔥 تقليل الحجم
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "600",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.4rem",
    transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    border: "2px solid #0166FF",
    cursor: "pointer",
    boxShadow: "0 8px 25px rgba(1, 102, 255, 0.3)",
    fontSize: "0.9rem", // 🔥 تقليل الحجم
    whiteSpace: "nowrap"
  };

  const backgroundShapesStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    zIndex: 1,
    pointerEvents: "none"
  };

  const indicatorsStyle = {
    position: "absolute",
    bottom: "25px", // 🔥 تقليل المسافة
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "0.7rem", // 🔥 تقليل المسافة
    zIndex: 20,
    padding: "0.7rem 1.3rem", // 🔥 تقليل الحجم
    backgroundImage: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(1, 102, 255, 0.1))",
    backdropFilter: "blur(20px)",
    borderRadius: "50px",
    border: "1px solid rgba(255, 255, 255, 0.2)"
  };

  const indicatorStyle = {
    width: "10px", // 🔥 تقليل الحجم
    height: "10px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #0166FF, #ffffff)",
    cursor: "pointer",
    transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    border: "none",
    boxShadow: "0 0 15px rgba(1, 102, 255, 0.4)",
    transform: "scale(1.1)"
  };

  const activeIndicatorStyle = {
    ...indicatorStyle,
    background: "linear-gradient(135deg, #ffffff, #0166FF)",
    transform: "scale(1.3)",
    boxShadow: "0 0 20px rgba(1, 102, 255, 0.7)"
  };

  const goToSlide = (index) => {
    if (index !== currentSlide && !isTransitioning) {
      handleSlideChange(index);
    }
  };

  // مكون الخلفيات المتحركة (مُحسّن)
  const BackgroundShapes = () => (
    <div style={backgroundShapesStyle}>
      {/* دوائر كبيرة فاتحة - عدد أقل */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`circle-${i}`}
          style={{
            position: "absolute",
            borderRadius: "50%",
            border: `${2 + (i % 2)}px solid rgba(255, 255, 255, ${0.05 + (i % 3) * 0.02})`,
            animation: `orbit${i % 3} ${12 + i * 2}s ease-in-out infinite`,
            left: `${(i * 30) % 80 + 15}%`,
            top: `${(i * 25) % 60 + 20}%`,
            width: `${90 + i * 25}px`,
            height: `${90 + i * 25}px`,
            transform: `translate(-50%, -50%)`,
            animationDelay: `${i * 1}s`
          }}
        />
      ))}
      
      {/* دوائر متوسطة فاتحة - عدد أقل */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`mid-circle-${i}`}
          style={{
            position: "absolute",
            borderRadius: "50%",
            backgroundColor: `rgba(255, 255, 255, ${0.03 + (i % 2) * 0.02})`,
            animation: `float${i % 2} ${8 + (i % 3) * 2}s ease-in-out infinite`,
            left: `${(i * 18) % 90 + 5}%`,
            top: `${(i * 20) % 90 + 5}%`,
            width: `${18 + (i % 3) * 12}px`,
            height: `${18 + (i % 3) * 12}px`,
            transform: `translate(-50%, -50%)`,
            animationDelay: `${i * 0.6}s`
          }}
        />
      ))}

      {/* نقاط صغيرة متألقة فاتحة - عدد أقل */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`small-${i}`}
          style={{
            position: "absolute",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            width: `${2 + (i % 2) * 1}px`,
            height: `${2 + (i % 2) * 1}px`,
            left: `${(i * 15) % 95 + 3}%`,
            top: `${(i * 18) % 95 + 3}%`,
            animation: `twinkle ${3 + (i % 3)}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <>
      <style>
        {`
          @keyframes orbit0 {
            0%, 100% { transform: translate(-50%, -50%) rotate(0deg) translateX(25px) rotate(0deg); }
            50% { transform: translate(-50%, -50%) rotate(180deg) translateX(25px) rotate(-180deg); }
          }
          
          @keyframes orbit1 {
            0%, 100% { transform: translate(-50%, -50%) rotate(0deg) translateX(35px) rotate(0deg); }
            33% { transform: translate(-50%, -50%) rotate(120deg) translateX(35px) rotate(-120deg); }
            66% { transform: translate(-50%, -50%) rotate(240deg) translateX(35px) rotate(-240deg); }
          }
          
          @keyframes orbit2 {
            0%, 100% { transform: translate(-50%, -50%) rotate(0deg) translateX(20px) rotate(0deg) scale(0.9); }
            50% { transform: translate(-50%, -50%) rotate(180deg) translateX(20px) rotate(-180deg) scale(1.1); }
          }
          
          @keyframes float0 {
            0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
            50% { transform: translate(-50%, -50%) translateY(-15px); }
          }
          
          @keyframes float1 {
            0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
            50% { transform: translate(-50%, -50%) translateY(12px); }
          }
          
          @keyframes twinkle {
            0%, 100% { opacity: 0.15; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.3); }
          }
          
          @keyframes slideInText {
            from {
              opacity: 0;
              transform: translateY(15px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slideInImage {
            from {
              opacity: 0;
              transform: translateX(25px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }
          
          .slide-image:hover {
            transform: scale(1.02);
            filter: drop-shadow(0 25px 50px rgba(1, 102, 255, 0.3));
          }
          
          .primary-btn:hover {
            transform: translateY(-2px) scale(1.02);
            box-shadow: 0 12px 30px rgba(1, 102, 255, 0.4);
            background-color: #0052CC;
          }
          
          .stat-item:hover {
            transform: translateY(-1px);
            background: linear-gradient(135deg, rgba(1, 102, 255, 0.12), rgba(255, 255, 255, 0.08));
          }
          
          @media (max-width: 1024px) {
            .slide-content {
              max-width: 95% !important;
              gap: 1.5rem !important;
              padding: 0 1.5rem !important;
            }
            .hero-title { font-size: 2.4rem !important; }
            .hero-subtitle { font-size: 1.1rem !important; }
            .slide-image { max-width: 320px !important; }
          }
          
          @media (max-width: 768px) {
            .hero-main { 
              min-height: calc(100vh - 72px) !important; 
            }
            .slide-content {
              grid-template-columns: 1fr !important;
              gap: 1.2rem !important;
              text-align: center !important;
              padding: 0 1rem !important;
              max-width: 100% !important;
            }
            .hero-title { font-size: 2rem !important; }
            .hero-subtitle { font-size: 1rem !important; }
            .hero-desc { font-size: 0.9rem !important; }
            .stats-container { gap: 0.6rem !important; }
            .stat-number { font-size: 1.3rem !important; }
            .stat-label { font-size: 0.7rem !important; }
            .slide-image { max-width: 280px !important; }
          }
        `}
      </style>

      <section style={heroMainStyle} className="hero-main" aria-labelledby="hero-title">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            style={index === currentSlide ? activeSlideStyle : slideStyle}
          >
            <BackgroundShapes />
            
            <div style={slideContentStyle} className="slide-content">
              {/* محتوى النص */}
              <div style={textContentStyle}>
                {/* Tag */}
                <span style={tagStyle}>{text.tag}</span>

                {/* العنوان الرئيسي */}
                <h1 style={slideTitleStyle} className="hero-title">{slide.title}</h1>
                
                {/* العنوان الفرعي */}
                <h2 style={slideSubtitleStyle} className="hero-subtitle">{slide.subtitle}</h2>
                
                {/* الوصف */}
                <p style={slideDescStyle} className="hero-desc">{slide.description}</p>
                
                {/* الإحصائيات */}
                <div style={statsContainerStyle} className="stats-container">
                  {slide.stats.map((stat, statIndex) => (
                    <div key={statIndex} style={statItemStyle} className="stat-item">
                      <span style={statNumberStyle} className="stat-number">
                        {stat.number}
                      </span>
                      <span style={statLabelStyle}>
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* زر التواصل */}
                <button
                  className="primary-btn"
                  style={primaryBtnStyle}
                  onClick={() => {
                    if (window.navigateToSection) {
                      window.navigateToSection('contact');
                    }
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                  </svg>
                  {text.ctaContact}
                </button>
              </div>

              {/* محتوى الصورة */}
              <div style={imageContentStyle}>
                <img
                  src={slide.image}
                  alt={slide.title}
                  style={slideImageStyle}
                  className="slide-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        ))}

        {/* مؤشرات الشرائح */}
        <div style={indicatorsStyle}>
          {slides.map((_, index) => (
            <button
              key={index}
              style={index === currentSlide ? activeIndicatorStyle : indicatorStyle}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
