import React, { useEffect } from 'react';
import AchievementsSection from '../Components/Sections/AchievementsSection';

function AchievementsOnlyPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    return (
        <div className="achievements-only-page">
            <AchievementsSection />
        </div>
    );
}

export default AchievementsOnlyPage;
