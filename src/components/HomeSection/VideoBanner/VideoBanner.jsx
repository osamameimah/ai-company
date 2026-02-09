import React from 'react';
import { useTranslation } from 'react-i18next';

const VideoBanner = () => {
            const { t } = useTranslation();
    
    const openVideo = (e) => {
        e.preventDefault();
        // هنا يمكنك إضافة منطق فتح الـ Popup (مثل react-modal-video)
        window.open("https://www.youtube.com/watch?v=aircAruvnKk", "_blank");
    };

    return (
        <div className="video-banner2">
            <div className="video-banner-img2">
                <img src="assets/images/logo4.svg" alt="Logo" />
                <div className="video-box4">
                    <a href="#" className="video-popup" onClick={openVideo}>
                        <i className="fa fa-play"></i> {t("Watch Video")}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default VideoBanner;