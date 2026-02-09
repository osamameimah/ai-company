import { useTranslation } from "react-i18next"; // تأكد من استيراد الترجملة

const StickHeader = () => {
    const { t } = useTranslation();

    return (
        <header className="sticky-active v13 v3">
            <div className="header-menu-area3">
                <div className="row gx-20 align-items-center justify-content-between">
                    <div className="col-auto">
                        <div className="header-logo">
                            <a href="/">
                                {/* شعار شركة Wiz */}
                                {/* <img src="assets/images/logo.svg" alt="Wiz Logo" /> */}
                                {/* <img src="assets/images/logo/WizLogo.png" alt="Wiz Engineering" className="logo-sticky" /> */}
                            </a>
                        </div>
                    </div>
                    
                    <div className="col-auto">
                        <nav className="main-menu menu-style1">
                            <ul>
                                {/* الصفحة الرئيسية [cite: 3] */}
                                <li>
                                    <a href="/">
                                        <span className="menu-item">{t('nav_home')}</span>
                                        <span className="menu-item2">{t('nav_home')}</span>
                                    </a>
                                </li>

                                {/* الخدمات والتقنيات [cite: 7] */}
                                <li>
                                    <a href="/services">
                                        <span className="menu-item">{t('nav_services')}</span>
                                        <span className="menu-item2">{t('nav_services')}</span>
                                    </a>
                                </li>

                                {/* المنتجات والمنصات [cite: 11] */}
                                <li>
                                    <a href="/products">
                                        <span className="menu-item">{t('nav_products')}</span>
                                        <span className="menu-item2">{t('nav_products')}</span>
                                    </a>
                                </li>

                                {/* دراسات الحالة [cite: 15] */}
                                <li>
                                    <a href="/case-studies">
                                        <span className="menu-item">{t('nav_case_studies')}</span>
                                        <span className="menu-item2">{t('nav_case_studies')}</span>
                                    </a>
                                </li>

                                {/* اتصل بنا [cite: 18] */}
                                <li>
                                    <a href="/contact">
                                        <span className="menu-item">{t('nav_contact')}</span>
                                        <span className="menu-item2">{t('nav_contact')}</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="col-auto d-none d-xl-block">
                        <div className="btn-box">
                            <a href="/contact" className="ibt-btn ibt-btn-outline-3 ibt-btn-rounded">
                                <span>{t('btn_get_in_touch')}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default StickHeader;