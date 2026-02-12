import { useTranslation } from "react-i18next";
import "./Header.css";
import { useEffect, useState, useRef } from "react";
import '../../../i18n/i18n';
import { Link, NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
 const Header = () => {
    const { t, i18n } = useTranslation();
    const { lang } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const [currentLang, setCurrentLang] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const headerRef = useRef(null);

    // تحديد اللغة النشطة: الأولوية للرابط، ثم i18n، ثم الإنجليزية كخيار أخير
    const activeLang = lang || i18n.language || 'en';

    useEffect(() => {
        // مزامنة مكتبة i18next مع اللغة الموجودة في الرابط
        if (lang && i18n.language !== lang) {
            i18n.changeLanguage(lang);
        }

        // تحديث النصوص والاتجاه (RTL/LTR)
        const langMap = { 'ar': 'العربية', 'en': 'English', 'el': 'Ελληνικά' };
        setCurrentLang(langMap[activeLang] || 'English');

        document.documentElement.dir = activeLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = activeLang;
    }, [lang, i18n, activeLang]);

    const changeLanguage = (langCode, langText) => {
        // 1. استخراج المسار الحالي (مثل /ar/admin-panel)
        const pathSegments = location.pathname.split('/');
        const currentPathAfterLang = pathSegments.slice(2).join('/');

        // 2. استخراج "كلمة السر" والمعاملات من الرابط الحالي (مثل ?access=123)
        const currentSearch = location.search;

        // 3. بناء الرابط الجديد مع الحفاظ على المعاملات
        const newPath = `/${langCode}/${currentPathAfterLang}${currentSearch}`;

        i18n.changeLanguage(langCode);
        setCurrentLang(langText);
        localStorage.setItem('i18nextLng', langCode);

        navigate(newPath);
        setMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (headerRef.current && !headerRef.current.contains(event.target)) {
                setMobileMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // دالة لضمان أن جميع الروابط تبدأ بكود اللغة الصحيح
    const getPath = (path) => `/${activeLang}${path}`;

    return (
        <>
            <div className={`menu-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>

            <header className="vs-header13" ref={headerRef}>
                <div className="container2">
                    <div className="header-menu-area3">
                        <div className="header-main-row">

                            <div className="logo-container">
                                <Link to={`/${activeLang}`}>
                                    <img
                                        src="/assets/images/logo/WizLogo.png"
                                        alt="logo"
                                        className="main-logo"
                                        style={{ maxHeight: "70px", width: "auto" }}
                                    />
                                </Link>
                            </div>

                            <nav className={`main-nav-container ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                                <ul className="nav-menu-list">
                                    <li>
                                        <NavLink to={getPath("")} end onClick={() => setMobileMenuOpen(false)}>
                                            {t('Home')}
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to={getPath("/services")} onClick={() => setMobileMenuOpen(false)}>
                                            {t('Services')}
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to={getPath("/products")} onClick={() => setMobileMenuOpen(false)}>
                                            {t('Products')}
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to={getPath("/case-studies")} onClick={() => setMobileMenuOpen(false)}>
                                            {t('Case Studies')}
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to={getPath("/contact")} onClick={() => setMobileMenuOpen(false)}>
                                            {t('Contact')}
                                        </NavLink>
                                    </li>

                                    <li className="mobile-only-item">
                                        <div className="mobile-lang-box">
                                            <button onClick={() => changeLanguage('ar', 'العربية')}>AR</button>
                                            <button onClick={() => changeLanguage('en', 'English')}>EN</button>
                                            <button onClick={() => changeLanguage('el', 'Ελληνικά')}>EL</button>
                                        </div>
                                    </li>
                                </ul>
                            </nav>

                            <div className="desktop-actions">
                                <div className="dropdown">
                                    <button className="lang-switcher-capsule dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                        <i className="fa fa-globe"></i>
                                        <span>{currentLang}</span>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end lang-dropdown-menu">
                                        <li><button className="dropdown-item" onClick={() => changeLanguage('ar', 'العربية')}>العربية</button></li>
                                        <li><button className="dropdown-item" onClick={() => changeLanguage('en', 'English')}>English</button></li>
                                        <li><button className="dropdown-item" onClick={() => changeLanguage('el', 'Ελληνικά')}>Ελληνικά</button></li>
                                    </ul>
                                </div>
                            </div>

                            <button
                                className={`hamburger-menu-icon ${mobileMenuOpen ? 'active' : ''}`}
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>

                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;