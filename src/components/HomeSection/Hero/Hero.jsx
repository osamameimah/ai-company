import React from 'react';
import { useTranslation } from 'react-i18next';
import Typewriter from 'typewriter-effect';

const Hero = () => {
    const { t, i18n } = useTranslation();

    // التحقق من اتجاه اللغة (لضمان ظهور علامات الترقيم في مكانها الصحيح)
    const isRtl = i18n.language === 'ar';

    return (
        <>
            <div className="hero-style13">
                <div className="container">
                    <div className="hero-content13" style={{ textAlign: "center" }}>
                        {/* العنوان الرئيسي باللون الأبيض وفي المنتصف */}
                        <h1 className="title" style={{ color: 'white', textAlign: 'center' }}>
                            {t("Transform Your Business WIZLY")}
                        </h1>

                        <div 
                            className="description-container" 
                            style={{ 
                                minHeight: '80px', 
                                marginBottom: '30px', 
                                color: 'white', 
                                fontSize: '1.2rem',
                                // الحل هنا: الاتجاه يتغير للغة ولكن المحاذاة تبقى في المنتصف دائماً
                                direction: isRtl ? 'rtl' : 'ltr',
                                textAlign: 'center', 
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <Typewriter
                                key={i18n.language}
                                options={{
                                    strings: [t("WIZ is a privately owned Palestinian company specialized in IT & AI solution.At WIZ, we are facilitating other’s life and make it easier to achieve their business & personal goals and desires.")],
                                    autoStart: true,
                                    loop: true,
                                    delay: 40,
                                    cursor: "|"
                                }}
                            />
                        </div>

                        <div className='btn-hero' style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px" }}>
                            <a href="#" className="ibt-btn ibt-btn-secondary">
                                <span style={{ color: 'white' }}>{t("Explore Solutions")}</span>
                                <i className="icon-arrow-top"></i>
                            </a>

                            <a href="#" className="ibt-btn ibt-btn-secondary" style={{backgroundColor:"#67a1e0",hover:{backgroundColor:"#4382c5"}}}>
                                <span style={{ color: 'white' }}>{t("View Our Platforms")}</span>
                                <i className="icon-arrow-top"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* ستايل لضمان اللون الأبيض للمؤشر والنص في كل الحالات */}
            <style dangerouslySetInnerHTML={{ __html: `
                .Typewriter__wrapper {
                    color: white !important;
                }
                .Typewriter__cursor {
                    color: white !important;
                }
            `}} />
        </>
    );
};

export default Hero;