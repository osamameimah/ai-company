import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
 
const Faq = () => {
    const { t } = useTranslation();
    const [activeId, setActiveId] = useState('step1');

    const toggleAccordion = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    const stepsData = [
        {
            id: 'step1',
            title: t('01. Discover'),
            content: t('We begin with a deep dive into your business needs and technical challenges to identify ideal opportunities for innovation.')
        },
        {
            id: 'step2',
            title: t('02. Architect'),
            content: t('We design the systems technical blueprint, focusing on scalability and the seamless connection between software and hardware.')
        },
        {
            id: 'step3',
            title: t('03. Engineer'),
            content: t('The actual building phase using cutting-edge AI, IoT, and robotics technologies with the highest engineering standards.')
        },
        {
            id: 'step4',
            title: t('04. Deploy'),
            content: t('Launching the system into the real-world environment while ensuring smooth integration with your existing operations.')
        },
        {
            id: 'step5',
            title: t('05. Optimize'),
            content: t('Continuous monitoring and data-driven improvements to ensure your system maintains peak performance and sustainability.')
        }
    ];

    return (
        <section className="faq-sec3 ibt-section-gapBottom py-5">
            <div className="container">
                <div className="row align-items-center">
                    
                    <div className="col-lg-6 col-12 mb-5 mb-lg-0">
                        <div className="faq-content pe-lg-4">
                            <div className="sec-title white mb-4">
                                <h2 className="title animated-heading h1 fw-bold text-white">
                                    {t("How We Work")}
                                </h2>
                            </div>

                            <div className="accordion custom-accordion" id="workProcessAccordion">
                                {stepsData.map((item) => (
                                    <div className="accordion-item bg-transparent border-0 mb-3" key={item.id}>
                                        <h2 className="accordion-header">
                                            <button 
                                                className={`accordion-button shadow-none ${activeId === item.id ? '' : 'collapsed'}`}
                                                type="button"
                                                onClick={() => toggleAccordion(item.id)}
                                            >
                                                {item.title}
                                            </button>
                                        </h2>
                                        <div className={`accordion-collapse collapse ${activeId === item.id ? 'show' : ''}`}>
                                            <div className="accordion-body text-light opacity-75">
                                                {item.content}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4">
                                {/* تم تعديل الكلاس هنا لإزالة الاستايل القديم واستخدام الكلاس الجديد */}
                                <a href="/services" className="btn-capabilities">
                                    <span>{t("View Our Capabilities")}</span>
                                    <i className="fa-thin fa-arrow-up-right ms-3"></i> 
                                    {/* تأكد من استخدام أيقونة السهم المائل */}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12 text-center">
                        <div className="faq-img-wrapper position-relative">
                            <img 
                                src="assets/images/event/faq3-1.png" 
                                alt="Engineering Process" 
                                className="img-fluid rounded-4 shadow-lg"
                            />
                            <div className="feature-ai-badge position-absolute bottom-0 start-50 translate-middle-x mb-4">
                                <div className="bg-primary text-white p-3 rounded-pill px-4 shadow">
                                    <h4 className="title m-0 h6 fw-bold">{t("Engineering Excellence")}</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Faq;