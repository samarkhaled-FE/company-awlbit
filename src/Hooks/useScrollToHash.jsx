import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useScrollToHash() {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        // ✅ إذا كانت صفحة Solutions، متسكرولش خالص!
        if (pathname === '/solutions') {
            return; // اخرج من الفانكشن ولا تعمل حاجة
        }

        if (!hash) return;

        const sectionId = hash.slice(1);
        const sectionEle = document.getElementById(sectionId);

        if (sectionEle) {
            // If there's a fixed navbar, offset the scroll so the section is not hidden behind it
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;

            const elementTop = sectionEle.getBoundingClientRect().top + window.pageYOffset;
            const offset = Math.max(0, elementTop - navbarHeight - 8); // 8px gap

            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    }, [hash, pathname]);
}

export default useScrollToHash;
