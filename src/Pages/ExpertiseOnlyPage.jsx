import React, { useEffect } from 'react';
import ExpertiseSection from '../Components/Sections/ExpertiseSection';

function ExpertiseOnlyPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    return (
        <div className="expertise-only-page">
            <ExpertiseSection />
        </div>
    );
}

export default ExpertiseOnlyPage;
