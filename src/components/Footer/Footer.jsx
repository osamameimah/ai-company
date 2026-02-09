import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <>
            <footer className="footer-style4 v2">
                {/* قسم الـ CTA العلوي - مهم جداً للتحويل حسب المخطط */}
                <div className="footer-top4">
                    <div className="container">
                        <div className="footer-content4">
                            <h2 className="title">{t("Ready to build something intelligent?")}</h2>

                            <a href="/contact" className="ibt-btn ibt-btn-outline">
                                <span>{t("Start a Project")}</span>
                                <i className="icon-arrow-top"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="widget-area ibt-section-gapTop">
                    <div className="container">
                        <div className="row">
                            {/* القسم الأول: اللوجو والحقوق */}
                            <div className="col-lg-4">
                                <div className="about-widget4 footer-widget">
                                    <div className="footer-logo">
                                        <img src="assets/images/logo/WizLogo.png" // تأكد من مسار لوجو WIZ
                                            alt="WIZ Engineering" />
                                    </div>
 
                                    <p>
                                        <a href="#">©WIZ Engineering</a> 2026. {t("All rights reserved.")}
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-8">
                                <div className="footer-menu4">
                                    {/* القسم الثاني: المواقع (المخطط يشير لتركيز عالمي) */}
                                    <div className="location-widget4 footer-widget">
                                        <h4 className="widget-title">{t("Headquarters")}</h4>
                                        <p>{t("Dubai, United Arab Emirates")}<br />
                                            {t("Tech Hub, Silicon Oasis")}</p>

                                        <h5 className="title">{t("Follow Us")}</h5>
                                        <ul className="social-icon">
                                            <li><a href="https://linkedin.com/company/wiz" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="#" title="X"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                                            <li><a href="#" title="youtube"><i className="fab fa-youtube"></i></a></li>
                                        </ul>
                                    </div>

                                    {/* القسم الثالث: التواصل المباشر */}
                                    <div className="contact-widget4 footer-widget">
                                        <h4 className="widget-title">{t("Let's Talk")}</h4>
                                        <a href="tel:+971XXXXXXXXX" className="nmbr">+971 XX XXX XXXX</a>

                                        <h5 className="widget-title" style={{ marginTop: '20px' }}>{t("Email")}</h5>
                                        <a href="mailto:hello@wiz.engineering" className="gmail">hello@wiz.engineering</a>
                                    </div>

                                    {/* القسم الرابع: روابط سريعة (اختياري ولكن مفيد) */}
                                    <div className="footer-links footer-widget">
                                        <h4 className="widget-title">{t("Expertise")}</h4>
                                        <ul>
                                            <li><a href="/platforms">{t("Our Platforms")}</a></li>
                                            <li><a href="/services">{t("Engineering")}</a></li>
                                            <li><a href="/case-studies">{t("Case Studies")}</a></li>
                                            <li><a href="/contact">{t("Contact")}</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;