import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
    const { t, i18n } = useTranslation();

    return (
        <>

            <div className="about-us-sec8 ibt-section-gap">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-4">
                            <div className="about-counter6">
                                <div className="about-counter-content6">
                                    <div className="counter-box15">
                                        <span className="counter-number">10</span>
                                        <span className="counter-text">k+</span>
                                    </div>
                                    <span className="title">{t("Number of systems delivered")}</span>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="about-content6">
                                <div className="sec-title white mb-0">
                                    {/* <span className="sub-title">about us</span> */}
                                    <h2 className="title animated-heading">{t("Who We Are")}</h2>
                                    <p>{t("WIZ is a technology engineering company specializing in building intelligent, scalable, and connected systems. We combine artificial intelligence, software engineering, automation, and smart device integration to help organizations modernize their operations. Our work bridges the gap between software and hardware to deliver complete digital systems.")}</p>
                                    <a href="#" className="ibt-btn ibt-btn-outline">
                                        <span>{t("Explore more")}</span>
                                        <i className="icon-arrow-top"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
 
 };
export default AboutUs;