 import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

const Partners = () => {
    const { t } = useTranslation();
    
     const brandLogos = [
        "brand1.png", "brand2.png", "brand3.png", 
        "brand4.png", "brand5.png", "brand6.png"
    ];

    return (
        <section className="partners-sec ibt-section-gapBottom" style={{ paddingBottom: '80px', paddingTop: '100px', backgroundColor: '#ffffff' }}>
            <div className="container">
                 <div className="sec-title text-center" style={{ marginBottom: '50px' }}>
                    <h2 className="title animated-heading">
                        {t("Trusted by Industry")} <span>{t("Leaders")}</span>
                    </h2>
                    <p style={{ marginTop: '15px', color: '#666' }}>
                        {t("Powering operations for global enterprises and innovative startups.")}
                    </p>
                </div>

                <div className="brand-sec2">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={40} 
                        slidesPerView={5} 
                        loop={true} 
                        speed={1500}  
                        autoplay={{
                            delay: 1,  
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: { slidesPerView: 2, spaceBetween: 20 },
                            640: { slidesPerView: 3, spaceBetween: 30 },
                            1024: { slidesPerView: 5, spaceBetween: 40 },
                        }}
                        className="brand2"
                    >
                        {brandLogos.map((logo, index) => (
                            <SwiperSlide key={index}>
                                <div className="brand-item" style={{ 
                                    filter: 'grayscale(100%)',  
                                    opacity: '0.7',
                                    transition: '0.3s'
                                }}>
                                    <a href="#" onClick={(e) => e.preventDefault()}>
                                        <img
                                            src={`assets/images/brand/${logo}`}
                                            alt={`WIZ Partner ${index + 1}`}
                                            style={{ maxWidth: '140px', height: 'auto' }}
                                        />
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Partners;