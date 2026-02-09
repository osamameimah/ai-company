import React from 'react';
import { useTranslation } from 'react-i18next';

const ServiceStats = () => {
        const { t } = useTranslation();
    
    return (
        <div className="service-sec19">
            <div className="container2">
                <div className="ser-box19">
                    <div className="ser-info19">
                        <div className="service-block19">
                            <img src="assets/images/service/ser19-1.png"
                                alt="AI Agency & Technology HTML Template" />
                            <h4 className="title">{t("Achievements of our startup")}</h4>
                                
                        </div>
                    </div>
                    <div className="ser-info19">
                        <div className="service-block19 v1">
                            <img src="assets/images/service/ser19-2.png"
                                alt="AI Agency & Technology HTML Template" />
                            <h4 className="title2">{t("Wize Tech")}</h4>
                        </div>
                        <div className="ser-content19">
                            <div className="ser-counter19">
                                <div className="counter-box19 m-0">
                                    <span className="counter-number"
                                        data-target="150">0</span>
                                    <span className="counter-text">K</span>
                                </div>
                                <span className="sub-title">{t("Active users every day")}</span>
                                    
                            </div>
                        </div>
                    </div>
                    <div className="ser-info19">
                        <div className="service-block19 v1">
                            <img src="assets/images/service/ser19-3.png"
                                alt="AI Agency & Technology HTML Template" />
                        </div>
                        <div className="service-block19 m-0">
                            <img src="assets/images/service/ser19-4.png"
                                alt="AI Agency & Technology HTML Template" />
                            <h4 className="title">{t("Professional team & tech")}</h4>
                                
                        </div>
                    </div>
                    <div className="ser-info19">
                        <div className="service-block19 v1">
                            <img src="assets/images/service/ser19-5.png"
                                alt="AI Agency & Technology HTML Template" />
                        </div>
                        <div className="service-block19 m-0">
                            <img src="assets/images/service/ser19-6.png"
                                alt="AI Agency & Technology HTML Template" />
                        </div>
                    </div>
                    <div className="ser-info19 m-0">
                        <div className="service-block19 v2">
                            <img src="assets/images/service/ser19-7.png"
                                alt="AI Agency & Technology HTML Template" />
                            <h4 className="title">{t("Programming &development")}</h4>
                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceStats;