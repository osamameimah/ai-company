import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Typewriter from 'typewriter-effect';

const ScienceLab = () => {
    const { t, i18n } = useTranslation();
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const isRtl = i18n.language === 'ar';

    return (
        <div className="science-lab2 ibt-section-gapBottom">
            <div className="container-fluid">
                <div className="science-content2 text-center" style={{ display: 'flex', justifyContent: 'center' }}>
                    <h2 
                        ref={sectionRef} 
                        className="responsive-title" 
                        style={{ 
                            color: 'white', 
                            direction: isRtl ? 'rtl' : 'ltr',
                            textAlign: 'center',
                            display: 'inline-flex',
                            gap: '5px',
                            alignItems: 'center'
                        }}
                    >
                        <span style={{ color: 'white' }}>[</span>
                        
                        {isVisible && (
                            <Typewriter
                                key={i18n.language}
                                options={{
                                    strings: [`${t("Empowering businesses")} ${t("with smart IT solutions")}`],
                                    autoStart: true,
                                    loop: false, // النص سيكتب مرة واحدة فقط ويتوقف
                                    delay: 50,
                                    cursor: "", // إخفاء المؤشر بعد الانتهاء (اختياري)
                                    deleteSpeed: Infinity, // منع الحذف نهائياً
                                }}
                            />
                        )}

                        <span style={{ color: 'white' }}>]</span>
                    </h2>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .Typewriter__wrapper {
                    color: white !important;
                }
                /* لضمان عدم ظهور المؤشر الوامض بعد انتهاء الكتابة */
                .Typewriter__cursor {
                    display: none; 
                }
            `}} />
        </div>
    );
};

export default ScienceLab;