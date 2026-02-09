import React from 'react';
import { useTranslation } from 'react-i18next';
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import Footer from "../../components/Footer/Footer";

const CaseStudies = () => {
    const { t } = useTranslation();

    const projects = [
        {
            id: 1,
            category: t("Automation"),
            title: t("Kitchen Workflow Optimization"),
            client: t("Global Food Chain"),
            impact: t("40% Efficiency Boost"),
            img: "/assets/images/blog/blog2-1.png", 
 
        },
        {
            id: 2,
            category: t("AI & Data"),
            title: t("Predictive Patient Monitoring"),
            client: t("City General Hospital"),
            impact: t("99.9% Uptime"),
            img: "/assets/images/blog/blog2-2.png",
        },
        {
            id: 3,
            category: t("Cloud Systems"),
            title: t("SaaS Booking Infrastructure"),
            client: t("Travel Tech Startup"),
            impact: t("2M+ Transactions/Mo"),
            img: "/assets/images/blog/blog2-1.png",
        }
    ];

    return (
        <>
 
            {/* 1. Header القسم العلوي */}
            <section className="case-studies-hero" style={{ background: '#0f1113', padding: '170px 0', textAlign: 'center' }}>
                <div className="container">
                    {/* <span style={{ color: '#007bff', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>{t("Our Impact")}</span> */}
                    <h1 className="title animated-heading" style={{ color: '#fff', fontSize: '3.5rem', marginTop: '15px' }}>
                        {t("Case")} <span style={{ color: '#007bff' }}>{t("Studies")}</span>
                    </h1>
                    <p style={{ color: '#888', maxWidth: '600px', margin: '20px auto 0' }}>
                        {t("Real-world engineering challenges met with intelligent, scalable solutions.")}
                    </p>
                </div>
            </section>

            {/* 2. عرض المشاريع */}
            <section className="projects-list ibt-section-gap" style={{ backgroundColor: '#16181a', padding: '100px 0' }}>
                <div className="container">
                    <div className="row">
                        {projects.map((project) => (
                            <div className="col-lg-12 mb-5" key={project.id}>
                                <div className="project-card-horizontal" style={{ 
                                    background: '#0f1113', 
                                    borderRadius: '25px', 
                                    overflow: 'hidden', 
                                    border: '1px solid #222',
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    transition: '0.3s'
                                }}>
                                    {/* صورة المشروع */}
                                    <div className="col-lg-5 p-0">
                                        <div style={{ height: '100%', minHeight: '300px', background: `url(${project.img}) center/cover` }}></div>
                                    </div>

                                    {/* تفاصيل المشروع */}
                                    <div className="col-lg-7 p-5 d-flex flex-column justify-content-center">
                                        <span style={{ color: '#007bff', fontWeight: '600', marginBottom: '10px', display: 'block' }}>{project.category}</span>
                                        <h2 style={{ color: '#fff', marginBottom: '20px' }}>{project.title}</h2>
                                        
                                        <div className="project-meta d-flex mb-4" style={{ gap: '30px' }}>
                                            <div>
                                                <small style={{ color: '#555', display: 'block' }}>{t("Client")}</small>
                                                <span style={{ color: '#ccc' }}>{project.client}</span>
                                            </div>
                                            <div>
                                                <small style={{ color: '#555', display: 'block' }}>{t("Impact")}</small>
                                                <span style={{ color: '#00ff88', fontWeight: 'bold' }}>{project.impact}</span>
                                            </div>
                                        </div>

                                        <div className="mt-auto">
                                            <a href="#" className="ibt-btn ibt-btn-outline">
                                                <span>{t("Read Full Study")}</span>
                                                <i className="icon-arrow-top"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CTA (Call to Action) */}
            <section className="ready-to-start" style={{ background: '#007bff', padding: '80px 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: '#fff', marginBottom: '20px' }}>{t("Ready to build your success story?")}</h2>
                    <p style={{ color: '#e0e0e0', marginBottom: '30px' }}>{t("Join our list of high-impact engineering partners.")}</p>
                    <a href="/contact" className="ibt-btn" style={{ background: '#fff', color: '#007bff' }}>
                        <span>{t("Start a Project")}</span>
                    </a>
                </div>
            </section>

         </>
    );
};

export default CaseStudies;