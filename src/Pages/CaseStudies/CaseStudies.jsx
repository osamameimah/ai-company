import React, { useState } from 'react'; // أضفنا useState للتحكم في الـ Popup
import { useTranslation } from 'react-i18next';

const CaseStudies = () => {
    const { t } = useTranslation();
    
    // حالة للتحكم في المشروع المعروض داخل الـ Popup
    const [activeProject, setActiveProject] = useState(null);

    const projects = [
        {
            id: 1,
            category: t("Automation"),
            title: t("Kitchen Workflow Optimization"),
            client: t("Global Food Chain"),
            impact: t("40% Efficiency Boost"),
            img: "/assets/images/blog/blog2-1.png",
            // تفاصيل إضافية للـ Popup بناءً على المخطط [cite: 17]
            details: {
                problem: t("Manual order tracking causing delays and food waste."),
                solution: t("Integrated AI-driven POS with kitchen display systems."),
                techStack: "React, Node.js, IoT Sensors",
                results: t("Reduced waste by 30% and improved delivery speed by 40%.")
            }
        },
        {
            id: 2,
            category: t("AI & Data"),
            title: t("Predictive Patient Monitoring"),
            client: t("City General Hospital"),
            impact: t("99.9% Uptime"),
            img: "/assets/images/blog/blog2-2.png",
            details: {
                problem: t("Delayed response to critical patient vitals."),
                solution: t("Real-time monitoring using predictive AI models."),
                techStack: "Python, TensorFlow, Azure Cloud",
                results: t("99.9% system reliability and faster emergency response.")
            }
        },
        {
            id: 3,
            category: t("Cloud Systems"),
            title: t("SaaS Booking Infrastructure"),
            client: t("Travel Tech Startup"),
            impact: t("2M+ Transactions/Mo"),
            img: "/assets/images/blog/blog2-1.png",
            details: {
                problem: t("Server crashes during high-traffic booking seasons."),
                solution: t("Scalable cloud architecture with auto-scaling capabilities."),
                techStack: "AWS, Kubernetes, Go",
                results: t("Handled 2M+ transactions monthly without downtime.")
            }
        }
    ];

    return (
        <>
            {/* 1. Header القسم العلوي */}
            <section className="case-studies-hero" style={{ background: '#0f1113', padding: '170px 0', textAlign: 'center' }}>
                <div className="container">
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
                                    background: '#0f1113', borderRadius: '25px', overflow: 'hidden', 
                                    border: '1px solid #222', display: 'flex', flexWrap: 'wrap', transition: '0.3s'
                                }}>
                                    <div className="col-lg-5 p-0">
                                        <div style={{ height: '100%', minHeight: '300px', background: `url(${project.img}) center/cover` }}></div>
                                    </div>

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
                                            {/* تعديل الرابط لفتح الـ Popup */}
                                            <button 
                                                onClick={() => setActiveProject(project)}
                                                className="ibt-btn ibt-btn-outline" 
                                                style={{ background: 'transparent', color: '#007bff', padding: '10px 25px', borderRadius: '50px' }}
                                            >
                                                <span>{t("Read Full Study")}</span>
                                                <i className="icon-arrow-top" style={{ marginLeft: '10px' }}></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. الـ Popup (Modal) */}
    {/* 3. الـ Popup (Modal) */}
{activeProject && (
    <div 
        className="project-popup-overlay" 
        onClick={() => setActiveProject(null)} // عند الضغط على الخلفية يتم الإغلاق
        style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
            backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', 
            alignItems: 'center', justifyContent: 'center', padding: '20px',
            cursor: 'pointer' // تغيير الماوس ليعرف المستخدم أنه يمكنه الضغط للإغلاق
        }}
    >
        <div 
            className="project-popup-content" 
            onClick={(e) => e.stopPropagation()} // منع انتقال حدث الضغط للخلفية عند الضغط داخل المودل
            style={{
                background: '#0f1113', maxWidth: '900px', width: '100%', borderRadius: '30px', 
                border: '1px solid #222', position: 'relative', overflow: 'hidden', 
                maxHeight: '90vh', overflowY: 'auto', cursor: 'default' // إعادة الماوس للشكل الطبيعي بالداخل
            }}
        >
            {/* زر الإغلاق */}
            <button 
                onClick={() => setActiveProject(null)}
                style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: '#fff', fontSize: '24px', zIndex: 10 }}
            >✕</button>

            <div className="row m-0">
                <div className="col-lg-12 p-0">
                    <img src={activeProject.img} alt={activeProject.title} style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                </div>
                <div className="col-lg-12 p-5">
                    <span style={{ color: '#007bff', fontWeight: 'bold' }}>{activeProject.category}</span>
                    <h2 style={{ color: '#fff', margin: '10px 0 30px' }}>{activeProject.title}</h2>
                    
                    <div className="row shadow-sm p-3 mb-4" style={{ background: '#16181a', borderRadius: '15px' }}>
                        <div className="col-md-4"><strong>{t("Problem")}:</strong></div>
                        <div className="col-md-8" style={{ color: '#888' }}>{activeProject.details.problem}</div>
                    </div>
                    <div className="row shadow-sm p-3 mb-4" style={{ background: '#16181a', borderRadius: '15px' }}>
                        <div className="col-md-4"><strong>{t("Solution")}:</strong></div>
                        <div className="col-md-8" style={{ color: '#888' }}>{activeProject.details.solution}</div>
                    </div>
                    <div className="row shadow-sm p-3 mb-4" style={{ background: '#16181a', borderRadius: '15px' }}>
                        <div className="col-md-4"><strong>{t("Tech Stack")}:</strong></div>
                        <div className="col-md-8" style={{ color: '#007bff' }}>{activeProject.details.techStack}</div>
                    </div>
                    <div className="row shadow-sm p-3 mb-4" style={{ background: '#16181a', borderRadius: '15px' }}>
                        <div className="col-md-4"><strong>{t("Results")}:</strong></div>
                        <div className="col-md-8" style={{ color: '#00ff88', fontWeight: 'bold' }}>{activeProject.details.results}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}

            {/* 4. CTA */}
            <section className="ready-to-start" style={{ background: '#007bff', padding: '80px 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: '#fff', marginBottom: '20px' }}>{t("Ready to build your success story?")}</h2>
                    <a href="/contact" className="ibt-btn" style={{ background: '#fff', color: '#007bff', padding: '12px 30px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold' }}>
                        <span>{t("Start a Project")}</span>
                    </a>
                </div>
            </section>
        </>
    );
};

export default CaseStudies;