import { useTranslation } from "react-i18next";
import "./Header.css";
import { useEffect, useState, useRef } from "react";
import '../../../i18n/i18n';
import { Link, NavLink, useLocation, useNavigate, useParams } from "react-router-dom";

const Header = () => {
    const { t, i18n } = useTranslation();
    const { lang } = useParams(); // جلب اللغة من الرابط
    const navigate = useNavigate();
    const location = useLocation();

    const [currentLang, setCurrentLang] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const headerRef = useRef(null);

    // تحديث اللغة بناءً على المتغير الموجود في الرابط (URL)
    useEffect(() => {
        if (lang && i18n.language !== lang) {
            i18n.changeLanguage(lang);
        }

        const langMap = { 'ar': 'العربية', 'en': 'English', 'el': 'Ελληνικά' };
        setCurrentLang(langMap[lang || i18n.language] || 'English');

        const currentLng = lang || i18n.language;
        document.documentElement.dir = currentLng === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLng;
    }, [lang, i18n]);

    // وظيفة تغيير اللغة وتحديث الرابط
    const changeLanguage = (langCode, langText) => {
        const pathArray = location.pathname.split('/');
        pathArray[1] = langCode; // استبدال كود اللغة في الرابط
        const newPath = pathArray.join('/');

        i18n.changeLanguage(langCode);
        setCurrentLang(langText);
        localStorage.setItem('i18nextLng', langCode);
        navigate(newPath); // الانتقال للرابط الجديد باللغة المختارة
        setMobileMenuOpen(false);
    };

    // إغلاق القائمة عند الضغط خارجها
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (headerRef.current && !headerRef.current.contains(event.target)) {
                setMobileMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // دالة مساعدة لإنشاء روابط تتضمن اللغة الحالية
    const getLangPath = (path) => `/${lang || i18n.language}${path === '/' ? '' : path}`;

    return (
        <>
            <div className={`menu-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>

            <header className="vs-header13" ref={headerRef}>
                <div className="container2">
                    <div className="header-menu-area3">
                        {/* استخدام flexbox لضمان بقاء العناصر على سطر واحد وعدم تداخلها */}
                        <div className="header-main-row">

                            {/* الشعار - محمي بحاوية تمنع تمدده */}
                            {/* الشعار - تم تعديل الرابط ليتبع اللغة الحالية */}
                            <div className="logo-container">
                                {/* نستخدم i18n.language لضمان جلب اللغة الحالية المسجلة في النظام */}
                                <Link to={`/${i18n.language || 'en'}`}>
                                    <img
                                        src="assets/images/logo/WizLogo.png"
                                        alt="logo"
                                        className="main-logo"
                                        style={{ maxHeight: "70px", width: "auto" }}
                                    />
                                </Link>
                            </div>

                            {/* القائمة الرئيسية - تظهر كـ UL في الكبير و Sidebar في الصغير */}
                            <nav className={`main-nav-container ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                                <ul className="nav-menu-list">
                                    {/* رابط الصفحة الرئيسية يجب أن يوجه إلى كود اللغة الحالية */}
                                    <li>
                                        <NavLink to={`/${lang || 'en'}`} end onClick={() => setMobileMenuOpen(false)}>
                                            {t('Home')}
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to={`/${lang || 'en'}/services`} onClick={() => setMobileMenuOpen(false)}>
                                            {t('Services')}
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to={`/${lang || 'en'}/products`} onClick={() => setMobileMenuOpen(false)}>
                                            {t('Products')}
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to={`/${lang || 'en'}/case-studies`} onClick={() => setMobileMenuOpen(false)}>
                                            {t('Case Studies')}
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to={`/${lang || 'en'}/contact`} onClick={() => setMobileMenuOpen(false)}>
                                            {t('Contact')}
                                        </NavLink>
                                    </li>

                                    <li className="mobile-only-item">
                                        <div className="mobile-lang-box">
                                            <button onClick={() => changeLanguage('ar', 'العربية')}>AR</button>
                                            <button onClick={() => changeLanguage('en', 'English')}>EN</button>
                                            <button onClick={() => changeLanguage('el', 'Ελληνικά')}>Ελληνικά</button>
                                        </div>
                                    </li>
                                </ul>
                            </nav>

                            {/* أدوات الهيدر (اللغة) للشاشات الكبيرة */}
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

                            {/* زر الهامبرغر - يظهر عند 800px */}
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