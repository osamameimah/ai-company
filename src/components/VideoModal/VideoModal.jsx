import React from 'react';
import { useTheme } from '../../ThemeContext/ThemeContext';

const VideoModal = () => {
    // جلب الحالة والوظيفة مباشرة من الـ Context
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <>
             {/* <button 
                id="themeBtn" 
                onClick={toggleTheme} 
                className={`theme-toggle-btn ${isDarkMode ? 'dark' : 'light'}`}
                title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
                <i className={isDarkMode ? "fas fa-sun" : "fas fa-moon"}></i>
            </button> */}

            {/* مودال الفيديو (يبقى كما هو من حيث الهيكل) */}
            <div className="video-modal" style={{ display: 'none' }}>
                <div className="video-modal-content">
                    <span className="close-btn">&times;</span>
                    <iframe title="video-frame" allowFullScreen></iframe>
                </div>
            </div>
        </>
    );
};

export default VideoModal;