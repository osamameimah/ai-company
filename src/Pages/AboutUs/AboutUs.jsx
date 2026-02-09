import React from 'react';
import { useTranslation } from 'react-i18next';
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import Footer from "../../components/Footer/Footer";
import Partners from "../../components/Partners/Partners";

const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <>
            <HeaderSection />

            {/* 1. قسم الواجهة (Breadcrumb/Hero) */}
            <section className="about-hero-sec ibt-section-gap" style={{ background: '#0f1113', padding: '100px 0', borderBottom: '1px solid #222' }}>
                <div className="container text-center">
                    <h1 className="title animated-heading" style={{ color: '#fff', fontSize: '3.5rem', fontWeight: '800' }}>
                        {t("About")} <span style={{ color: '#007bff' }}>WIZ</span>
                    </h1>
                    <p style={{ color: '#888', maxWidth: '700px', margin: '20px auto 0' }}>
                        {t("We are a technology engineering firm dedicated to building the infrastructures of tomorrow.")}
                    </p>
                </div>
            </section>

            {/* 2. قسم التعريف الرئيسي (الكومبوننت الذي عدلناه) */}
            <div className="about-us-sec8 ibt-section-gap" style={{ backgroundColor: '#0f1113', padding: '100px 0' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="about-counter6" style={{ borderLeft: '4px solid #007bff', paddingLeft: '20px' }}>
                                <div className="about-counter-content6">
                                    <div className="counter-box15">
                                        <span className="counter-number" style={{ fontSize: '4rem', fontWeight: '800', color: '#fff' }}>10</span>
                                        <span className="counter-text" style={{ fontSize: '2rem', color: '#007bff' }}>k+</span>
                                    </div>
                                    <span className="title" style={{ color: '#ccc', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                        {t("Intelligent Systems Deployed")}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="about-content6 px-lg-5">
                                <div className="sec-title white mb-0">
                                    <h2 className="title animated-heading" style={{ marginBottom: '25px', color: '#fff' }}>
                                        {t("Engineering the Future of Intelligence")}
                                    </h2>
                                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#b0b0b0' }}>
                                        {t("WIZ is a technology engineering firm dedicated to building scalable, connected infrastructures. We specialize in bridging the gap between hardware and software, integrating advanced AI with industrial-grade automation. Our mission is to modernize global operations through precise engineering and intelligent system design.")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. قسم القيم والرؤية (Mission & Vision) بناءً على المخطط */}
            <section className="values-sec ibt-section-gap" style={{ backgroundColor: '#16181a', padding: '80px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="value-card p-4" style={{ background: '#0f1113', borderRadius: '15px', height: '100%' }}>
                                <h3 style={{ color: '#007bff', marginBottom: '15px' }}>{t("Our Mission")}</h3>
                                <p style={{ color: '#ccc' }}>{t("To empower industries with connected systems that enhance efficiency and drive innovation through engineering excellence.")}</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="value-card p-4" style={{ background: '#0f1113', borderRadius: '15px', height: '100%' }}>
                                <h3 style={{ color: '#007bff', marginBottom: '15px' }}>{t("Our Vision")}</h3>
                                <p style={{ color: '#ccc' }}>{t("To become the global leader in providing integrated software-hardware ecosystems for the modern world.")}</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="value-card p-4" style={{ background: '#0f1113', borderRadius: '15px', height: '100%' }}>
                                <h3 style={{ color: '#007bff', marginBottom: '15px' }}>{t("Our Values")}</h3>
                                <p style={{ color: '#ccc' }}>{t("Precision in engineering, transparency in execution, and a relentless focus on scalable impact.")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. قسم الشركاء لتعزيز الثقة في صفحة التعريف */}
            <Partners />

            <Footer />
        </>
    );
};

export default AboutUs;