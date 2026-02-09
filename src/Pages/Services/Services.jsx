import React from 'react';
import { useTranslation } from 'react-i18next';
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import Footer from "../../components/Footer/Footer";

const Services = () => {
    const { t } = useTranslation();

    const platforms = [
        {
            id: "01",
            title: t("Restaurant AI Ecosystem"),
            description: t("A complete autonomous system integrating POS, kitchen automation, and AI-driven inventory management for modern hospitality."),
            features: [t("Automated Ordering"), t("Inventory AI"), t("Fleet Management")],
            icon: "icon-restaurant" 
        },
        {
            id: "02",
            title: t("Healthcare Monitoring Platform"),
            description: t("Next-generation hospital systems connecting medical devices with real-time data analytics for critical patient care."),
            features: [t("Device Integration"), t("Real-time Analytics"), t("Data Security")],
            icon: "icon-health"
        },
        {
            id: "03",
            title: t("Smart Booking SaaS"),
            description: t("Scalable cloud infrastructure designed to handle high-concurrency bookings for global service providers."),
            features: [t("Cloud Scalability"), t("Multi-tenant Architecture"), t("Advanced API")],
            icon: "icon-booking"
        }
    ];

    return (
        <>
 
            {/* 1. Header القسم العلوي */}
            <section className="services-hero" style={{ background: '#0f1113', padding: '170px 0', borderBottom: '1px solid #222' }}>
                <div className="container text-center">
                    {/* <span style={{ color: '#007bff', fontWeight: 'bold', textTransform: 'uppercase' }}>{t("Our Expertise")}</span> */}
                    <h1 className="title animated-heading" style={{ color: '#fff', fontSize: '3.5rem', marginTop: '15px' }}>
                        {t("Engineering")} <span style={{ color: '#007bff' }}>{t("Solutions")}</span>
                    </h1>

                    <p style={{ color: '#888', maxWidth: '600px', margin: '20px auto 0' }}>
                        {t("Have a complex engineering challenge? Let's discuss how WIZ can build your next intelligent system.")}
                    </p>
                    
                </div>  
            </section>

            {/* 2. عرض المنصات بطريقة الـ Grid */}
            <section className="platforms-grid ibt-section-gap" style={{ backgroundColor: '#16181a', padding: '100px 0' }}>
                <div className="container">
                    <div className="row">
                        {platforms.map((item) => (
                            <div className="col-lg-4 col-md-6 mb-5" key={item.id}>
                                <div className="service-card-v3" style={{ 
                                    background: '#0f1113', 
                                    padding: '40px', 
                                    borderRadius: '20px', 
                                    height: '100%', 
                                    border: '1px solid #222',
                                    transition: '0.3s'
                                }}>
                                    <span style={{ fontSize: '3rem', fontWeight: '900', color: '#1a1d20', display: 'block', marginBottom: '10px' }}>{item.id}</span>
                                    <h3 style={{ color: '#fff', marginBottom: '20px' }}>{item.title}</h3>
                                    <p style={{ color: '#888', marginBottom: '25px', lineHeight: '1.7' }}>{item.description}</p>
                                    
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {item.features.map((feat, index) => (
                                            <li key={index} style={{ color: '#ccc', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                                <i className="icon-check" style={{ color: '#007bff', marginRight: '10px', fontSize: '0.8rem' }}></i>
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. سيكشن "لماذا WIZ؟" (Tech Stack) */}
            <section className="tech-advantage ibt-section-gap" style={{ background: '#0f1113', padding: '100px 0' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h2 className="title animated-heading" style={{ color: '#fff' }}>
                                {t("The Technical Advantage")}
                            </h2>
                            <p style={{ color: '#888', marginTop: '20px' }}>
                                {t("We don't just build apps; we architect resilient infrastructures. Using a modern stack of AI, IoT, and Cloud-native technologies, we ensure your system is future-proof.")}
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-6 mb-3">
                                    <div style={{ background: '#16181a', padding: '20px', textAlign: 'center', borderRadius: '10px', color: '#007bff' }}>
                                        <strong>{t("AI Integration")}</strong>
                                    </div>
                                </div>
                                <div className="col-6 mb-3">
                                    <div style={{ background: '#16181a', padding: '20px', textAlign: 'center', borderRadius: '10px', color: '#007bff' }}>
                                        <strong>{t("Cloud Native")}</strong>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div style={{ background: '#16181a', padding: '20px', textAlign: 'center', borderRadius: '10px', color: '#007bff' }}>
                                        <strong>{t("Cyber Security")}</strong>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div style={{ background: '#16181a', padding: '20px', textAlign: 'center', borderRadius: '10px', color: '#007bff' }}>
                                        <strong>{t("IoT Ready")}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

         </>
    );
};

export default Services;