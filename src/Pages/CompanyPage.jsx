// Pages/CompanyPage.jsx
import AboutSection from "@components/Sections/AboutSection";
import AchievementsSection from "@components/Sections/AchievementsSection";
import ContactSection from "@components/Sections/ContactSection";
import ExpertiseSection from "@components/Sections/ExpertiseSection";
import WhyChooseUsSection from "@components/Sections/WhyChooseUsSection";
import useScrollToHash from "@hooks/useScrollToHash";

function CompanyPage() {

    // Scroll to sections:
    useScrollToHash();

    return (
        <div className="company-page">
            {/* About Section */}
            <AboutSection />
            {/* Achievements Section */}
            <AchievementsSection />
            {/* Expertise Section */}
            <ExpertiseSection />
            {/* Why Choose Us Section */}
            <WhyChooseUsSection />
            {/* Contact Section */}
            <ContactSection />
        </div>
    )
}

export default CompanyPage;
