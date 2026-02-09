import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Team = () => {
                const { t, i18n } = useTranslation();
    
    return (
        <>
            <section className="team-section ibt-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="team-info">
                                <div className="sec-title">
                                    {/* <span className="sub-title">team</span> */}
                                    <h2 className="title animated-heading">{t("The Neural Network experts: uniting talent for intelligent solutions")}
                                        
                                        
                                        
                                    </h2>
                                    <div className="team-counter">
                                        <div className="counter-box8">
                                            <span className="counter-text">+</span>
                                            <span
                                                className="counter-number percent-counter"
                                                data-target="500">0</span>
                                        </div>
                                        <span className="title">{t("Awesome team members")}</span>
                                            
                                    </div>
                                    <a href="service.html" title
                                        className="ibt-btn ibt-btn-outline">
                                        <span>{t("Explore more")}</span>
                                        <i className="icon-arrow-top"></i>
                                    </a>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="team-card v1 mb-0">
                                            <div className="team-img">
                                                <img
                                                    src="assets/images/team/team1-1.png"
                                                    alt="AI Agency & Technology HTML Template"/>
                                                    <span
                                                        className="sub-title">Future</span>
                                                    <div className="team-shap"></div>
                                            </div>
                                            <div className="team-content">
                                                <div className="share-box">
                                                    <span
                                                        className="share-icon fa fa-share-alt"></span>
                                                    <ul className="social-links">
                                                        <li><a
                                                            href="https://www.youtube.com/"
                                                            target="_blank"
                                                            title><i
                                                                className="fab fa-youtube"></i></a></li>
                                                        <li><a
                                                            href="http://www.linkedin.com/"
                                                            target="_blank"
                                                            title><i
                                                                className="fab fa-linkedin-in"></i></a></li>
                                                        <li><a
                                                            href="http://www.twitter.com/"
                                                            target="_blank"
                                                            title><i
                                                                className="fab fa-twitter"></i></a></li>
                                                        <li><a
                                                            href="https://www.facebook.com/"
                                                            target="_blank"
                                                            title><i
                                                                className="fab fa-facebook-f"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h4 className="name"><a
                                                    href="team-single.html"
                                                    title>Dan Smith</a></h4>
                                                <span className="designation">/ {t("Manager")} /</span>
                                                    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="team-member">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="team-card">
                                            <div className="team-img">
                                                <img
                                                    src="assets/images/team/team1-2.png"
                                                    alt="AI Agency & Technology HTML Template"/>
                                                    <span
                                                        className="sub-title">Neural</span>
                                                    <div className="team-shap"></div>
                                            </div>
                                            <div className="team-content">
                                                <div className="share-box">
                                                    <span
                                                        className="share-icon fa fa-share-alt"></span>
                                                    <ul className="social-links">
                                                        <li><a
                                                            href="https://www.youtube.com/"
                                                            target="_blank"
                                                            title><i
                                                                className="fab fa-youtube"></i></a></li>
                                                        <li><a
                                                            href="http://www.linkedin.com/"
                                                            target="_blank"
                                                            title><i
                                                                className="fab fa-linkedin-in"></i></a></li>
                                                        <li><a
                                                            href="http://www.twitter.com/"
                                                            target="_blank"
                                                            title><i
                                                                className="fab fa-twitter"></i></a></li>
                                                        <li><a
                                                            href="https://www.facebook.com/"
                                                            target="_blank"
                                                            title><i
                                                                className="fab fa-facebook-f"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h4 className="name"><a
                                                    href="team-single.html"
                                                    title>Alan
                                                    Begham</a></h4>
                                                <span className="designation">/ {t("CEO Neuro")} /</span>
                                                    
                                            </div>
                                        </div>
                                        <div className="team-card ">
                                            <div className="team-img">
                                                <img
                                                    src="assets/images/team/team1-4.png"
                                                    alt="AI Agency & Technology HTML Template"/>
                                                    <span
                                                        className="sub-title">Digital</span>
                                                    <div className="team-shap"></div>
                                            </div>
                                            <div className="team-content">
                                                <div className="share-box">
                                                    <span
                                                        className="share-icon fa fa-share-alt"></span>
                                                    <ul className="social-links">
                                                        <li><a
                                                            href="https://www.youtube.com/"
                                                            target="_blank"
                                                            title><i
                                                                className="fab fa-youtube"></i></a></li>
                                                        <li><a
                                                            href="http://www.linkedin.com/"
                                                            target="_blank"
                                                            title><i
                                                                className="fab fa-linkedin-in"></i></a></li>
                                                        <li><a
                                                            href="http://www.twitter.com/"
                                                            target="_blank"
                                                            title><i
                                                                className="fab fa-twitter"></i></a></li>
                                                        <li><a
                                                            href="https://www.facebook.com/"
                                                            target="_blank"
                                                            title><i
                                                                className="fab fa-facebook-f"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h4 className="name"><a
                                                    href="team-single.html"
                                                    title>Brandon
                                                    Adams</a></h4>
                                                <span className="designation">/ {t("HR Neuro")} /</span>
                                                    
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="team-card v2">
                                            <div className="team-img">
                                                <img
                                                    src="assets/images/team/team1-3.png"
                                                    alt="AI Agency & Technology HTML Template"/>
                                                    <span
                                                        className="sub-title">Solutions</span>
                                                    <div className="team-shap"></div>
                                            </div>
                                            <div className="team-content">
                                                <div className="share-box">
                                                    <span
                                                        className="share-icon fa fa-share-alt"></span>
                                                    <ul className="social-links">
                                                        <li><a
                                                            href="https://www.youtube.com/"
                                                            target="_blank"
                                                            title><i
                                                                className="fab fa-youtube"></i></a></li>
                                                        <li><a
                                                            href="http://www.linkedin.com/"
                                                            target="_blank"
                                                            title><i
                                                                className="fab fa-linkedin-in"></i></a></li>
                                                        <li><a
                                                            href="http://www.twitter.com/"
                                                            target="_blank"
                                                            title><i
                                                                className="fab fa-twitter"></i></a></li>
                                                        <li><a
                                                            href="https://www.facebook.com/"
                                                            target="_blank"
                                                            title><i
                                                                className="fab fa-facebook-f"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h4 className="name"><a
                                                    href="team-single.html"
                                                    title>Arthur
                                                    Dowson</a></h4>
                                                <span className="designation">/ {t("AI Programmer")} /</span>
                                                    
                                            </div>
                                        </div>
                                        <div className="team-card v3 mb-0">
                                            <div className="team-img">
                                                <img
                                                    src="assets/images/team/team1-5.png"
                                                    alt="AI Agency & Technology HTML Template"/>
                                                    <span
                                                        className="sub-title">Learning</span>
                                                    <div className="team-shap"></div>
                                            </div>
                                            <div className="team-content">
                                                <div className="share-box">
                                                    <span
                                                        className="share-icon fa fa-share-alt"></span>
                                                    <ul className="social-links">
                                                        <li><a
                                                            href="https://www.youtube.com/"
                                                            target="_blank"
                                                            title><i
                                                                className="fab fa-youtube"></i></a></li>
                                                        <li><a
                                                            href="http://www.linkedin.com/"
                                                            target="_blank"
                                                            title><i
                                                                className="fab fa-linkedin-in"></i></a></li>
                                                        <li><a
                                                            href="http://www.twitter.com/"
                                                            target="_blank"
                                                            title><i
                                                                className="fab fa-twitter"></i></a></li>
                                                        <li><a
                                                            href="https://www.facebook.com/"
                                                            target="_blank"
                                                            title><i
                                                                className="fab fa-facebook-f"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h4 className="name"><a
                                                    href="team-single.html"
                                                    title>Alan
                                                    Begham</a></h4>
                                                <span className="designation">/ {t("CEO Neuro")} /</span>
                                                    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )


}

export default Team;