
import { useState } from "react";
import Navbar from "@components/Layout/Navbar"; // إضافة استيراد الـ Navbar
import HeroMain from "@components/Sections/HeroMain";
import AboutSection from "@components/Sections/AboutSection";
import AchievementsSection from "@components/Sections/AchievementsSection";
import ContactSection from "@components/Sections/ContactSection";
import ExpertiseSection from "@components/Sections/ExpertiseSection";

function HomePage() {
    // حالة التحكم في إظهار الأقسام
    const [activeSection, setActiveSection] = useState('all');

    // تمرير دالة التنقل للـ Navbar
    window.navigateToSection = (section) => {
        setActiveSection(section);
        // إزالة smooth scroll لجعل الانتقال فوري
        window.scrollTo({ top: 0, behavior: 'auto' });
    };

    return (
        <div className="home-page" style={{ minHeight: '100vh' }}>
            {/* إضافة الـ Navbar هنا مع كلاس navbar */}
            <Navbar className="navbar" />
            
            {/* 🔥 امسح marginTop من هنا لأن الـ Hero بيحسب الارتفاع بنفسه */}
            <main style={{ padding: 0, margin: 0 }}>
                {/* Hero - يظهر في الرئيسية فقط */}
                {(activeSection === 'all') && <HeroMain />}
                
                {/* About - يظهر في الكل أو لما يتم اختياره */}
                {(activeSection === 'all' || activeSection === 'about') && 
                    <div style={{
                        minHeight: activeSection === 'about' ? '100vh' : 'auto',
                        paddingTop: activeSection === 'about' ? '72px' : '0', // 🔥 هنا بس حط الـ padding للأقسام التانية
                        marginTop: activeSection === 'about' ? '0' : 'auto'
                    }}>
                        <AboutSection />
                    </div>
                }
                
                {/* Contact - يظهر في الكل أو لما يتم اختياره */}
                {(activeSection === 'all' || activeSection === 'contact') && 
                    <div style={{
                        minHeight: activeSection === 'contact' ? '100vh' : 'auto',
                        paddingTop: activeSection === 'contact' ? '72px' : '0', // 🔥 هنا بس حط الـ padding للأقسام التانية
                        marginTop: activeSection === 'contact' ? '0' : 'auto'
                    }}>
                        <ContactSection />
                    </div>
                }

                {/* Expertise - يظهر فقط لما يتم اختياره (مش في الرئيسية) */}
                {(activeSection === 'expertise') && 
                    <div style={{
                        minHeight: '100vh',
                        paddingTop: '72px', // 🔥 هنا بس حط الـ padding للأقسام التانية
                        marginTop: '0'
                    }}>
                        <ExpertiseSection />
                    </div>
                }
                
                {/* Achievements - يظهر فقط لما يتم اختياره (مش في الرئيسية) */}
                {(activeSection === 'achievements') && 
                    <div style={{
                        minHeight: '100vh',
                        paddingTop: '72px', // 🔥 هنا بس حط الـ padding للأقسام التانية
                        marginTop: '0'
                    }}>
                        <AchievementsSection />
                    </div>
                }
            </main>
        </div>
    )
}

export default HomePage;
