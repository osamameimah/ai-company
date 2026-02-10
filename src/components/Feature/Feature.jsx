import React from "react";
import { useTranslation } from "react-i18next";

const Feature = () => {
    const { t, i18n } = useTranslation();

     const featuresData = [
        {
            id: 1,
            img: "assets/images/feature/feature1.svg",
            title: "AI & Machine Learning",
            desc: "Developing intelligent models for prediction, computer vision, natural language processing, and automated decision-making systems."
        },
        {
            id: 2,
            img: "assets/images/feature/feature2.svg",
            title: "Mobile Application Engineering",
            desc: "High-performance Android and iOS applications built on reliability, scalability, and a seamless user experience."
        },
        {
            id: 3,
            img: "assets/images/feature/feature3.svg",
            title: "Web & Cloud Platforms",
            desc: "Secure and scalable web systems, control panels, and cloud backends manage workflows in organizations."
        },
        {
            id: 4,
            img: "assets/images/feature/feature4.svg",
            title: "Automation Systems",
            desc: "Automating business processes, improving workflow, and coordinating intelligent systems"
        },
        {
            id: 5,
            img: "assets/images/feature/feature4.svg",
            title: "IoT & Robotics Integration",
            desc: "Connected devices, sensor networks, and robotic solutions enable intelligent monitoring and control."
        },
        {
            id: 6,
            img: "assets/images/feature/feature4.svg",
            title: "AR / VR Experiences",
            desc: "Immersive digital environments for training, visualization, and active user interaction"
        }
    ];

    const isRtl = i18n.language === 'ar';

    return (
        <section className="feature-sec1 ibt-section-gap">
            <div className="container">
                <div className="sec-title text-center" style={{ marginBottom: "50px" }}>
                    <h2 className="title animated-heading" >
                        {t("Core Technologies")}
                    </h2>
                </div>

                 <div className={`row g-4 ${isRtl ? 'flex-row-reverse' : ''}`} style={{ justifyContent: "center" }}>
                    {featuresData.map((feature) => (
                        <div key={feature.id} className="col-lg-4 col-md-6 col-sm-12">
                            <div className="feature-card" style={{
                                height: "100%",  
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center",
                                padding: "30px",
                                background: "rgba(255, 255, 255, 0.05)", 
                                borderRadius: "15px",
                                color: "#222",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            }}>
                                <div className="feature-icon" style={{ marginBottom: "20px" }}>
                                    <img
                                        src={feature.img}
                                        alt={t(feature.title)}
                                        style={{ width: "60px", height: "60px",color:"#222" }}
                                    />
                                </div>
                                <h4 className="title" style={{ color: '#222', marginBottom: "15px" }}>
                                    {t(feature.title)}
                                </h4>
                                <p style={{ color: "#333", fontSize: "14px", lineHeight: "1.6" }}>
                                    {t(feature.desc)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Feature;