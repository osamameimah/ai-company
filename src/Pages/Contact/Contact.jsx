import React from 'react';
import { useTranslation } from 'react-i18next';
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className='content13 '>
                {/* 1. قسم العنوان (Hero Section) */}
                <section className="contact-hero-sec ibt-section-gap" style={{ background: '#0f1113', padding: '170px 0', textAlign: 'center' }}>
                    <div className="container">
                        {/* <h1 className="title animated-heading" style={{ color: '#fff', fontSize: '3.5rem', fontWeight: '800' }}>
                        {t("Get in Touch")}
                    </h1> */}



                        <h1 className="title animated-heading" style={{ color: '#fff', fontSize: '3.5rem', marginTop: '15px' }}>
                            {t("Get in")} <span style={{ color: '#007bff' }}>{t("Touch")}</span>
                        </h1>

                        <p style={{ color: '#888', maxWidth: '600px', margin: '20px auto 0' }}>
                            {t("Have a complex engineering challenge? Let's discuss how WIZ can build your next intelligent system.")}
                        </p>
                    </div>
                </section>
            </div>
            {/* 2. قسم معلومات التواصل والنموذج */}
            <section className="contact-main-sec ibt-section-gap" style={{ backgroundColor: '#16181a', padding: '80px 0' }}>
                <div className="container">
                    <div className="row">

                        {/* الجانب الأيسر: معلومات التواصل */}
                        <div className="col-lg-5 mb-5 mb-lg-0">
                            <div className="contact-info-box" style={{ background: '#0f1113', padding: '40px', borderRadius: '20px', height: '100%' }}>
                                <h3 style={{ color: '#fff', marginBottom: '30px' }}>{t("Contact Information")}</h3>

                                <div className="info-item mb-4 d-flex align-items-center">
                                    <div style={{ width: '50px', height: '50px', background: '#007bff22', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#007bff', marginRight: '15px' }}>
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div>
                                        <h6 style={{ color: '#888', margin: 0 }}>{t("Email Us")}</h6>
                                        <span style={{ color: '#fff', fontWeight: 'bold' }}>info@wiz-engineering.com</span>
                                    </div>
                                </div>

                                <div className="info-item mb-4 d-flex align-items-center">
                                    <div style={{ width: '50px', height: '50px', background: '#007bff22', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#007bff', marginRight: '15px' }}>
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div>
                                        <h6 style={{ color: '#888', margin: 0 }}>{t("Call Us")}</h6>
                                        <span style={{ color: '#fff', fontWeight: 'bold' }}>+962 7X XXX XXXX</span>
                                    </div>
                                </div>

                                <div className="info-item mb-4 d-flex align-items-center">
                                    <div style={{ width: '50px', height: '50px', background: '#007bff22', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#007bff', marginRight: '15px' }}>
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div>
                                        <h6 style={{ color: '#888', margin: 0 }}>{t("Headquarters")}</h6>
                                        <span style={{ color: '#fff', fontWeight: 'bold' }}>Amman, Jordan</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* الجانب الأيمن: نموذج المراسلة */}
                        <div className="col-lg-7">
                            <div className="contact-form-box" style={{ background: '#0f1113', padding: '40px', borderRadius: '20px' }}>
                                <h3 style={{ color: '#fff', marginBottom: '30px' }}>{t("Send a Message")}</h3>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <input type="text" className="form-control" placeholder={t("Your Name")} style={{ background: '#1a1d20', border: '1px solid #333', color: '#fff', padding: '12px' }} />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <input type="email" className="form-control" placeholder={t("Email Address")} style={{ background: '#1a1d20', border: '1px solid #333', color: '#fff', padding: '12px' }} />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <input type="text" className="form-control" placeholder={t("Subject")} style={{ background: '#1a1d20', border: '1px solid #333', color: '#fff', padding: '12px' }} />
                                        </div>
                                        <div className="col-12 mb-4">
                                            <textarea className="form-control" rows="5" placeholder={t("Project Details / Message")} style={{ background: '#1a1d20', border: '1px solid #333', color: '#fff', padding: '12px' }}></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button className="ibt-btn ibt-btn-outline w-100" type="submit">
                                                <span>{t("Send Proposal")}</span>
                                                <i className="icon-arrow-top"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
};

export default Contact;