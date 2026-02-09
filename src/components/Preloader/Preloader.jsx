import React, { useState, useEffect } from 'react';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
         const handleLoad = () => {
            setLoading(false);
        };

        if (document.readyState === 'complete') {
            setLoading(false);
        } else {
            window.addEventListener('load', handleLoad);
        }

         return () => window.removeEventListener('load', handleLoad);
    }, []);

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