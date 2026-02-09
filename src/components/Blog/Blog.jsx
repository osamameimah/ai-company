import { useTranslation } from "react-i18next";

const Blog = () => {
    const { t } = useTranslation();

    return (
        <>
            <section className="blog-sec2 ibt-section-gap">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-lg-2"> */}
                            {/* <div className="blog-image2"> */}
                                {/* يمكن تغيير الصورة لتناسب الطابع الهندسي (صورة سيرفرات أو كود) */}
                                {/* <img src="assets/images/layers/layer4.png" alt="WIZ Engineering Tech" /> */}
                            {/* </div> */}
                        {/* </div> */}
                        <div className="col-lg-12">
                            <div className="blog-info2">
                                <div className="title-area">
                                    <div className="row end">
                                        <div className="col-lg-8 col-md-7">
                                            <div className="sec-title mb-0">
                                                <h2 className="title animated-heading">
                                                    {t("Pioneering future-proof engineering with WIZ expertise")}
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-5">
                                            <div className="sec-btn-box">
                                                {/* <a href="/case-studies" className="ibt-btn ibt-btn-outline">
                                                    <span>{t("View Case Studies")}</span>
                                                    <i className="icon-arrow-top"></i>
                                                </a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="blog-post">
                                    {/* المشروع الأول: خدمات السحابية والأتمتة */}
                                    <div className="blog-card2">
                                        <div className="blog-img2">
                                            <a href="#"><img src="assets/images/blog/blog2-1.png" alt="Cloud Infrastructure" /></a>
                                        </div>
                                        <div className="blog-content2">
                                            <div className="blog-meta2">
                                                <span className="sub-title">{(t("CORE SERVICE / INFRASTRUCTURE"))}</span>
                                                <div className="blog-text2">
                                                    <a href="#">{t("Cloud Computing")}</a>
                                                    <a href="#">{t("DevOps")}</a>
                                                </div>
                                            </div>
                                            <h4 className="title">
                                                <a href="#">{t("Scalable Cloud Infrastructure for Global Enterprises")}</a>
                                            </h4>
                                            <p>{t("Building resilient, high-availability environments that scale automatically with your business traffic.")}</p>
                                        </div>
                                    </div>

                                    {/* المشروع الثاني: أتمتة الأنظمة */}
                                    <div className="blog-card2 mb-0">
                                        <div className="blog-img2">
                                            <a href="#"><img src="assets/images/blog/blog2-2.png" alt="AI Modernization" /></a>
                                        </div>
                                        <div className="blog-content2">
                                            <div className="blog-meta2">
                                                <span className="sub-title">{t("INNOVATION / MODERNIZATION")}</span>
                                                <div className="blog-text2">
                                                    <a href="#">{t("Legacy Systems")}</a>
                                                    <a href="#">{t("AI Models")}</a>
                                                </div>
                                            </div>
                                            <h4 className="title">
                                                <a href="#">{t("Modernizing Legacy Systems with Intelligent AI Layers")}</a>
                                            </h4>
                                            <p>{t("Integrating advanced AI algorithms into existing workflows to boost operational speed by 200%.")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;