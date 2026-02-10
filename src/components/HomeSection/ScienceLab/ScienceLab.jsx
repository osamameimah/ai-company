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
            { threshold: 0.1 }
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
                <div className="science-content2" ref={sectionRef}>
                    <h2 className="title" style={{ direction: isRtl ? 'rtl' : 'ltr', color: 'white' }}>

                        {isVisible && (
                            <Typewriter
                                key={i18n.language}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString(`${t("[Empowering businesses")} <span style="font-weight: 500;">${t("with smart IT solutions]")}</span>`)
                                        .start();
                                }}
                                options={{
                                    autoStart: true,
                                    loop: false,
                                    delay: 40,
                                    cursor: "|", // المؤشر يظهر هنا
                                    wrapperClassName: "typewriter-wrapper"
                                }}
                            />
                        )}

                    </h2>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                /* يختفي المؤشر تماماً بعد انتهاء الكتابة */
                .Typewriter__cursor {
                    color: white !important;
                    display: inline-block;
                }
                
                /* إخفاء المؤشر عندما تنتهي الكتابة (بناءً على الكلاس الذي تضعه المكتبة تلقائياً) */
                .Typewriter__cursor {
                    animation: typewriter-cursor-fade 0.5s forwards;
                    animation-delay: 4s; /* اضبط هذا الوقت ليتناسب مع طول جملتك */
                }

                @keyframes typewriter-cursor-fade {
                    to { opacity: 0; display: none; }
                }

                .typewriter-wrapper {
                    display: inline;
                    color: white !important;
                }
            `}} />
        </div>
    );
}

export default ScienceLab;