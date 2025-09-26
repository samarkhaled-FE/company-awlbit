import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // إذا كانت صفحة solutions مع hash معين
        if (pathname === '/solutions' && hash === '#ehr-systems') {
            // اسكرول لأعلى فوراً
            window.scrollTo(0, 0);
            return;
        }

        // للصفحات التانية، اسكرول لأعلى عادي
        if (!hash) {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
}

export default ScrollToTop;
