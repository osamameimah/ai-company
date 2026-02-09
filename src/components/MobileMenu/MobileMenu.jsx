import { useTranslation } from "react-i18next";

const MobileMenu = () => {
    const { t } = useTranslation();

    return (
        <div data-menu="mobileMenu" className="side-menu2">
            <div className="menu-btns">
                <button id="mobileCloseBtn2" className="close-btn"></button>
            </div>
            <ul>
                {/* تم تبسيط القائمة لتشمل فقط الصفحات الأساسية لشركة Wiz */}
                <li><a href="/">{t('nav_home')}</a></li>
                <li><a href="/services">{t('nav_services')}</a></li>
                <li><a href="/products">{t('nav_products')}</a></li>
                <li><a href="/case-studies">{t('nav_case_studies')}</a></li>
                <li><a href="/contact">{t('nav_contact')}</a></li>
            </ul>
            
            <div className="menu-contact">
                <span>{t('nav_contact')}</span>
                <a href="mailto:info@wiz.com" className="gmail">info@wiz.com</a>
            </div>

            <div className="menu-links">
                <a href="/contact" className="ibt-btn ibt-btn-outline-3 ibt-btn-rounded">
                    <span>{t('btn_get_in_touch')}</span>
                </a>
            </div>
        </div>
    );
}

export default MobileMenu;