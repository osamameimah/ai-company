import React from 'react';
import { useTranslation } from 'react-i18next';
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import Footer from "../../components/Footer/Footer";

const Products = () => {
    const { t } = useTranslation();

    const productList = [
        {
            id: "WIZ-RESTO",
            name: t("WizResto Platform"),
            tag: t("Hospitality & F&B"),
            description: t("An AI-powered ecosystem for restaurant management, integrating kitchen automation with smart POS systems."),
            features: [t("AI Inventory"), t("Kitchen Display System"), t("Fleet Tracking")],
            image: "/assets/images/blog/blog2-1.png"
        },
        {
            id: "WIZ-HEALTH",
            name: t("WizHealth Connect"),
            tag: t("Healthcare Technology"),
            description: t("A secure monitoring platform that bridges medical hardware with cloud data for real-time patient analytics."),
            features: [t("Device Connectivity"), t("Data Encryption"), t("Remote Monitoring")],
            image: "/assets/images/blog/blog2-1.png"
        },
        {
            id: "WIZ-BOOK",
            name: t("WizBooking SaaS"),
            tag: t("Service Sector"),
            description: t("High-performance booking engine designed for scalable service providers and appointment-based businesses."),
            features: [t("Real-time Availability"), t("Payment Integration"), t("Automated Alerts")],
            image: "/assets/images/blog/blog2-1.png"
        }
    ];

    return (
        <>

            {/* Hero Section */}
            <section className="products-hero ibt-section-gap" style={{ background: '#0f1113', padding: '170px 0', borderBottom: '1px solid #222' }}>
                <div className="container text-center">
                    {/* <h1 className="title animated-heading" style={{ color: '#fff', fontSize: '3.5rem', fontWeight: '800' }}>
                        {t("Our")} <span style={{ color: '#007bff' }}>{t("Platforms")}</span>
                    </h1> */}

                    <h1 className="title animated-heading" style={{ color: '#fff', fontSize: '3.5rem', marginTop: '15px' }}>
                        {t("Our")} <span style={{ color: '#007bff' }}>{t("Platforms")}</span>
                    </h1>

                    <p style={{ color: '#888', maxWidth: '700px', margin: '20px auto 0' }}>
                        {t("Scalable, intelligent, and engineering-driven software solutions designed to modernize industries.")}
                    </p>
                </div>
            </section>

            {/* Products Grid */}
            <section className="products-list-sec ibt-section-gap" style={{ backgroundColor: '#16181a', padding: '100px 0' }}>
                <div className="container">
                    {productList.map((product, index) => (
                        <div className="row mb-5 align-items-center" key={product.id} style={{
                            background: '#0f1113',
                            borderRadius: '30px',
                            overflow: 'hidden',
                            border: '1px solid #222',
                            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
                        }}>
                            {/* Product Image */}
                            <div className="col-lg-6 p-0">
                                <div style={{
                                    height: '400px',
                                    background: `url(${product.image}) center/cover`,
                                    borderRight: index % 2 === 0 ? '1px solid #222' : 'none',
                                    borderLeft: index % 2 !== 0 ? '1px solid #222' : 'none'
                                }}></div>
                            </div>

                            {/* Product Info */}
                            <div className="col-lg-6 p-5">
                                <span style={{ color: '#007bff', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.9rem' }}>{product.tag}</span>
                                <h2 style={{ color: '#fff', marginTop: '10px', marginBottom: '20px' }}>{product.name}</h2>
                                <p style={{ color: '#b0b0b0', lineHeight: '1.8' }}>{product.description}</p>

                                <div className="features-list mt-4 mb-4">
                                    <div className="row">
                                        {product.features.map((feat, i) => (
                                            <div className="col-6 mb-2" key={i}>
                                                <div style={{ color: '#ccc', fontSize: '0.9rem' }}>
                                                    <i className="fa fa-check-circle me-2" style={{ color: '#007bff' }}></i>
                                                    {feat}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <a href="/contact" className="ibt-btn ibt-btn-outline">
                                    <span>{t("Request Demo")}</span>
                                    <i className="icon-arrow-top"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    );
};

export default Products;