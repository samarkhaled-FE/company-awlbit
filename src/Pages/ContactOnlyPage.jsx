import React, { useEffect } from 'react';
import ContactSection from '../Components/Sections/ContactSection';

function ContactOnlyPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    return (
        <div className="contact-only-page">
            <ContactSection />
        </div>
    );
}

export default ContactOnlyPage;
