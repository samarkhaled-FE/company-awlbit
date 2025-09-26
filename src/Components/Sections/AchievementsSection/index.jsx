import React, { useEffect, useRef, useState } from "react";
import { useLanguageContext } from "@contexts/LanguageContext";

const stats = [
  {
    icon: "fa-solid fa-chart-line",
    value: 2000,
    label: { ar: "مشاريع", en: "Projects" },
    description: { 
      ar: "سنوات الخبرة في تطوير الحلول التقنية",
      en: "Years of experience in developing technical solutions"
    }
  },
  {
    icon: "fa-solid fa-users",
    value: 1050,
    label: { ar: "عميلاً", en: "Clients" },
    description: { 
      ar: "عملاء راضون حول العالم",
      en: "Satisfied clients worldwide"
    }
  },
  {
    icon: "fa-solid fa-globe",
    value: 30,
    label: { ar: "دولة", en: "Countries" },
    description: { 
      ar: "انتشار عالمي واسع",
      en: "Wide global presence"
    }
  },
  {
    icon: "fa-solid fa-laptop-code",
    value: 20,
    label: { ar: "سنوات الخبرة", en: "Years of Experience" },
    description: { 
      ar: "مشاريع تقنية ناجحة منجزة",
      en: "Successful technical projects completed"
    }
  }
];

function CountUp({ end, duration = 1200, locale = 'ar', prefix = '+', className = '', start = false }) {
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!start || started.current) return;
    started.current = true;
    const startTime = performance.now();
    const animate = (now) => {
      const p = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(end * eased));
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [start, end, duration]);

  const fmt = new Intl.NumberFormat(locale === 'ar' ? 'ar-EG' : 'en-US');
  return <span className={className}>{prefix}{fmt.format(val)}</span>;
}

export default function AchievementsSection() {
  const { language } = useLanguageContext();
  const isAr = language === "ar";
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { setStart(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setStart(true);
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="achievements-section" 
      dir={isAr ? "rtl" : "ltr"} 
      aria-labelledby="ach-title" 
      id="achievements"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 0',
        margin: '0',
        backgroundColor: '#ffffff', // خلفية بيضاء
        color: '#1f2937' // لون نص داكن
      }}
    >
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: '0 2rem', 
        width: '100%'
      }}>
        
        {/* Header */}
        <header style={{
          textAlign: 'center',
          marginBottom: '4rem',
          animation: 'fadeInUp 1s ease-out'
        }}>
          <h2 style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            marginBottom: '1rem',
            color: '#1f2937', // لون داكن للعنوان
            fontFamily: isAr ? "'Cairo', sans-serif" : "'Inter', sans-serif"
          }}>
            {isAr ? "إنجازاتنا" : "Our Achievements"}
          </h2>
          
          <div style={{
            width: '80px',
            height: '4px',
            // use backgroundImage for gradient
            backgroundImage: 'linear-gradient(90deg, #3b82f6, #1e40af)',
            margin: '1rem auto 2rem auto',
            borderRadius: '2px'
          }}></div>
          
          <p style={{
            fontSize: '1.3rem',
            color: '#6b7280', // لون رمادي للوصف
            maxWidth: '700px',
            margin: '0 auto',
            fontFamily: isAr ? "'Cairo', sans-serif" : "'Inter', sans-serif"
          }}>
            {isAr ? "أرقام تعكس الثقة والانتشار والجودة." : "Numbers that reflect trust, reach, and quality."}
          </p>
        </header>

        {/* Stats Grid - مضبوط لإظهار 4 بطاقات */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)', // 4 أعمدة متساوية
          gap: '2rem',
          animation: 'fadeInUp 1s ease-out 0.3s both'
        }}>
          {stats.map((stat, idx) => (
            <div
              key={idx}
              style={{
                position: 'relative',
                backgroundColor: '#ffffff', // خلفية بيضاء للبطاقات
                borderRadius: '20px',
                padding: '2.5rem',
                border: '1px solid #e5e7eb', // حدود رمادية فاتحة
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)', // ظلال خفيفة
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                animationDelay: `${idx * 0.2}s`,
                overflow: 'hidden',
                minHeight: '300px' // ارتفاع ثابت للبطاقات
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px)';
                e.target.style.boxShadow = '0 25px 50px rgba(59, 130, 246, 0.15)';
                e.target.style.borderColor = '#3b82f6';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
                e.target.style.borderColor = '#e5e7eb';
              }}
            >
              {/* Background Pattern */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.05), transparent)',
                borderRadius: '50%',
                transform: 'translate(30%, -30%)'
              }}></div>

              {/* Content - تخطيط عمودي */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                height: '100%',
                position: 'relative',
                zIndex: 2
              }}>
                {/* Icon */}
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '20px',
                  backgroundImage: 'linear-gradient(135deg, #3b82f6, #1e40af)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
                  transition: 'all 0.3s ease'
                }}>
                  <i 
                    className={stat.icon}
                    style={{
                      fontSize: '2rem',
                      color: 'white'
                    }}
                  ></i>
                </div>

                {/* Number */}
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '800',
                  color: '#3b82f6', // لون أزرق للرقم
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                  fontFamily: "'Inter', sans-serif",
                  textShadow: '0 4px 20px rgba(59, 130, 246, 0.2)'
                }}>
                  <CountUp end={stat.value} locale={isAr ? 'ar' : 'en'} start={start} />
                </div>

                {/* Label */}
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  color: '#1f2937', // لون داكن للعنوان
                  marginBottom: '1rem',
                  fontFamily: isAr ? "'Cairo', sans-serif" : "'Inter', sans-serif"
                }}>
                  {stat.label[language]}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#6b7280', // لون رمادي للوصف
                  margin: 0,
                  fontFamily: isAr ? "'Cairo', sans-serif" : "'Inter', sans-serif"
                }}>
                  {stat.description[language]}
                </p>
              </div>

              {/* Bottom accent line */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '4px',
                backgroundImage: 'linear-gradient(90deg, #3b82f6, #1e40af, #1e3a8a)',
                borderRadius: '0 0 20px 20px',
                opacity: 0.8
              }}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          marginTop: '4rem',
          animation: 'fadeInUp 1s ease-out 0.8s both'
        }}>
       
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

          /* Desktop - 4 بطاقات في صف واحد */
          @media (min-width: 1200px) {
            .achievements-section div[style*="grid-template-columns"] {
              grid-template-columns: repeat(4, 1fr) !important;
            }
          }

          /* Laptop - 2 بطاقات في كل صف */
          @media (max-width: 1199px) and (min-width: 769px) {
            .achievements-section div[style*="grid-template-columns"] {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }

          /* Mobile - بطاقة واحدة في كل صف */
          @media (max-width: 768px) {
            .achievements-section h2 {
              font-size: 2.5rem !important;
            }
            
            .achievements-section p {
              font-size: 1rem !important;
            }
            
            .achievements-section > div {
              padding: 0 1rem !important;
            }
            
            .achievements-section div[style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
            }

            .achievements-section div[style*="fontSize: '3rem'"] {
              font-size: 2.5rem !important;
            }

            .achievements-section h3 {
              font-size: 1.2rem !important;
            }
          }
        `}
      </style>
    </section>
  );
}
