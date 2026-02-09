import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Feature = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <section className="feature-sec1 ibt-section-gap">
                <div className="container">
                    <div className="sec-title">
                        {/* <span className="sub-title">features</span> */}
                        <h2 className="title animated-heading">{t("Core Technologies")}

                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="feature-card">
                                <img src="assets/images/feature/feature1.svg"
                                    alt="AI Agency & Technology HTML Template" />
                                <h4 className="title">{t("AI & Machine Learning")}</h4>
                                <p>{t("Developing intelligent models for prediction, computer vision, natural language processing, and automated decision-making systems.")}


                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="feature-card">
                                <img src="assets/images/feature/feature2.svg"
                                    alt="AI Agency & Technology HTML Template" />
                                <h4 className="title">{t("Mobile Application Engineering")}</h4>
                                <p>{t("High-performance Android and iOS applications built on reliability, scalability, and a seamless user experience.")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="feature-card">
                                <img src="assets/images/feature/feature3.svg"
                                    alt="AI Agency & Technology HTML Template" />
                                <h4 className="title">{t("Web & Cloud Platforms")}</h4>
                                <p>{t("Secure and scalable web systems, control panels, and cloud backends manage workflows in organizations.")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="feature-card">
                                <img src="assets/images/feature/feature4.svg"
                                    alt="AI Agency & Technology HTML Template" />
                                <h4 className="title">{t("Automation Systems")}</h4>
                                <p>{t("Automating business processes, improving workflow, and coordinating intelligent systems")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="feature-card">
                                <img src="assets/images/feature/feature4.svg"
                                    alt="AI Agency & Technology HTML Template" />
                                <h4 className="title">{t("IoT & Robotics Integration")}</h4>
                                <p>{t("Connected devices, sensor networks, and robotic solutions enable intelligent monitoring and control.")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="feature-card">
                                <img src="assets/images/feature/feature4.svg"
                                    alt="AI Agency & Technology HTML Template" />
                                <h4 className="title">{t("AR / VR Experiences")}</h4>
                                <p>{t("Immersive digital environments for training, visualization, and active user interaction")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )


}

export default Feature;