import React, { useEffect } from 'react';
import AboutSection from '../Components/Sections/AboutSection';

function AboutOnlyPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    return (
        <div className="about-only-page">
            <AboutSection />
        </div>
    );
}

export default AboutOnlyPage;
