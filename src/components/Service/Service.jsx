import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next';

const Service = () => {
    // const prevRef = useRef(null);
    // const nextRef = useRef(null);
    const { t } = useTranslation();

    // البيانات بناءً على المخطط الرسمي لـ WIZ (المنصات الثلاث)
    const servicesData = [
        { 
            id: 1, 
            tag: "SaaS", 
            title: t("Restaurant AI System"), // نظام المطاعم بالذكاء الاصطناعي
            img: "ser15-2.png" 
        },
        { 
            id: 2, 
            tag: "Healthcare", 
            title: t("Hospital Monitoring Platform"), // منصة مراقبة المستشفيات
            img: "ser15-2.png" 
        },
        { 
            id: 3, 
            tag: "Booking", 
            title: t("Booking SaaS Platform"), // منصة الحجوزات
            img: "ser15-2.png" 
        },
        
        
    ];

    return (
        <section className="service-sec15 v2 ibt-section-gap">
            <div className="title-area">
                <div className="container">
                    <div className="row end">
                        <div className="col-lg-7">
                            <div className="sec-title mb-0">
                                <h2 className="title animated-heading">
                                    {t("Our Platforms")} 
                                </h2>


                                
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="sec-btn-box">
                                {/* <div className="slider-btn5">
                                    <div ref={prevRef} className="swiper-button-prev"></div>
                                    <div ref={nextRef} className="swiper-button-next"></div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container2">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3} // تم التعديل لـ 3 ليناسب عدد المنصات بشكل أفضل
                    loop={true}
                    autoplay={{ delay: 4000 }}
                    speed={100}
                    onInit={(swiper) => {
                        // swiper.params.navigation.prevEl = prevRef.current;
                        // swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="ser-slider15"
                >
                    {servicesData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="ser-card15">
                                <div className="ser-img15">
                                    <a href="#">
                                        <img src={`assets/images/service/${item.img}`} alt={item.title} />
                                        <span>{item.tag}</span>
                                    </a>
                                </div>
                                <div className="ser-content15">
                                    <h4 className="title">
                                        <a href="#">{item.title}</a>
                                    </h4>
                                </div>
                                <a href="#" className="ser-btn">
                                    <i className="icon fontello icon-button-arrow"></i>
                                    <i className="icon2 fontello icon-button-arrow"></i>
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Service;