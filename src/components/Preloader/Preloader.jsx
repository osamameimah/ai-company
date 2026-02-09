import React, { useState, useEffect } from 'react';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // هذا الكود يتأكد من اختفاء اللوذر بعد تحميل كامل عناصر الصفحة
        const handleLoad = () => {
            setLoading(false);
        };

        if (document.readyState === 'complete') {
            setLoading(false);
        } else {
            window.addEventListener('load', handleLoad);
        }

        // تنظيف الحدث (Cleanup)
        return () => window.removeEventListener('load', handleLoad);
    }, []);

    // إذا انتهى التحميل، لا تعرض شيئاً
    if (!loading) return null;

    return (
        <div id="preloader">
            <div className="loader">
                <img src="assets/images/logo/WizLogo.png" alt="Loading..." />
            </div>
        </div>
    );
};

export default Preloader;