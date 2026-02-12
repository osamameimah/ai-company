 import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { db } from '../../firebaseConfig/firebaseConfig';  
import { collection, getDocs, query, orderBy } from "firebase/firestore";
 

const Services = () => {
    const { t, i18n } = useTranslation();
    const [platforms, setPlatforms] = useState([]);
    const [loading, setLoading] = useState(true);

     useEffect(() => {
        const fetchServices = async () => {
            try {
                 const q = query(collection(db, "services"), orderBy("createdAt", "asc"));
                const querySnapshot = await getDocs(q);
                const servicesData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setPlatforms(servicesData);
            } catch (error) {
                console.error("Error fetching services:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

     const currentLang = i18n.language || 'en';

    return (
        <>
             <section className="services-hero" style={{ background: '#0f1113', padding: '170px 0', borderBottom: '1px solid #222' }}>
                <div className="container text-center">
                    <h1 className="title animated-heading" style={{ color: '#fff', fontSize: '3.5rem', marginTop: '15px' }}>
                        {t("Engineering")} <span style={{ color: '#007bff' }}>{t("Solutions")}</span>
                    </h1>

                    <p style={{ color: '#888', maxWidth: '600px', margin: '20px auto 0' }}>
                        {t("Have a complex engineering challenge? Let's discuss how WIZ can build your next intelligent system.")}
                    </p>
                </div>  
            </section>

             <section className="platforms-grid ibt-section-gap" style={{ backgroundColor: '#16181a', padding: '100px 0' }}>
                <div className="container">
                    <div className="row">
                        {loading ? (
                            <div className="col-12 text-center py-5">
                                <div className="spinner-border text-primary" role="status"></div>
                            </div>
                        ) : (
                            platforms.map((item, index) => (
                                <div className="col-lg-4 col-md-6 mb-5" key={item.id}>
                                    <div className="service-card-v3" style={{ 
                                        background: '#0f1113', 
                                        padding: '40px', 
                                        borderRadius: '20px', 
                                        height: '100%', 
                                        border: '1px solid #222',
                                        transition: '0.3s'
                                    }}>
                                         <span style={{ fontSize: '3rem', fontWeight: '900', color: '#1a1d20', display: 'block', marginBottom: '10px' }}>
                                            {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                        </span>

                                         <h3 style={{ color: '#fff', marginBottom: '20px' }}>
                                            {item[`title_${currentLang}`] || item.title_en}
                                        </h3>

                                         <p style={{ color: '#888', marginBottom: '25px', lineHeight: '1.7' }}>
                                            {item[`description_${currentLang}`] || item.description_en}
                                        </p>
                                        
                                         <ul style={{ listStyle: 'none', padding: 0 }}>
                                            {item[`features_${currentLang}`] && item[`features_${currentLang}`].map((feat, idx) => (
                                                <li key={idx} style={{ color: '#ccc', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                                    <i className="icon-check" style={{ color: '#007bff', marginRight: '10px', fontSize: '0.8rem' }}></i>
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>

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
                                {["AI Integration", "Cloud Native", "Cyber Security", "IoT Ready"].map((tech, i) => (
                                    <div className="col-6 mb-3" key={i}>
                                        <div style={{ background: '#16181a', padding: '20px', textAlign: 'center', borderRadius: '10px', color: '#007bff' }}>
                                            <strong>{t(tech)}</strong>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;