import { useTranslation } from "react-i18next";

const SideMenu = () => {
    const { t } = useTranslation();

    return (
        <div className="side-menu" id="sideMenu">
            <div className="overlay" id="overlay"></div>
            <a href="javascript:void(0)" className="close-btn" id="closeBtn">
                <i className="fa fa-close"></i> close
            </a>
            <div className="menu-content">
                <a href="/" className="logo">
                    <img src="assets/images/logo.svg" alt="Wiz Logo" />
                </a>
                <div className="sidebar-menu">
                    <h4 className="title">{t('nav_contact')}</h4>
                    <p>Engineering Intelligent Systems <br/> for the Real World</p>
                    <a href="mailto:info@wiz.com" className="email">info@wiz.com</a>
                    
                    <a href="/contact" className="ibt-btn ibt-btn-outline-3 ibt-btn-rounded">
                        <span>{t('btn_get_in_touch')}</span>
                    </a>
                </div>
             </div>
        </div>
    );
}

export default SideMenu;