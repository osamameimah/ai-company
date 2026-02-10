import { useTranslation } from "react-i18next";

const Testimonial = () => {
    const { t } = useTranslation();

     const stats = [
        {
            number: "150k+",
            label: t("Daily Transactions"),
            desc: t("Processed through our intelligent restaurant systems.")
        },
        {
            number: "99.9%",
            label: t("System Uptime"),
            desc: t("Reliability for critical healthcare and booking platforms.")
        },
        {
            number: "24/7",
            label: t("Real-time Monitoring"),
            desc: t("Automated engineering support for all active nodes.")
        },
        {
            number: "45%",
            label: t("Efficiency Increase"),
            desc: t("Average productivity boost after AI integration.")
        }
    ];

    return (
        <section className="testimonial-sec2" style={{ backgroundColor: '#ece9e9' }}>
            <div className="container3">
                <div className="testi-title" style={{ marginBottom: '60px' }}>
                    <h2 className="title">
                        {t("Our Engineering")} <span>{t("Impact in Numbers")}</span>
                    </h2>
                    <p style={{ maxWidth: '700px', margin: '20px auto' }}>
                        {t("We don't just build software; we engineer high-performance ecosystems that power industries.")}
                    </p>
                </div>

                <div className="row">
                    {stats.map((stat, index) => (
                        <div className="col-lg-3 col-md-6" key={index}>
                            <div className="test-block2" style={{ textAlign: 'center', padding: '40px 20px' }}>
                                <h3 style={{ 
                                    fontSize: '48px', 
                                    fontWeight: 'bold', 
                                    color: '#000',  
                                    marginBottom: '10px' 
                                }}>
                                    {stat.number}
                                </h3>
                                <h4 className="name" style={{ color: '#555', marginBottom: '15px' }}>
                                    {stat.label}
                                </h4>
                                <p style={{ fontSize: '14px', lineHeight: '1.6',  }}>
                                    {stat.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;