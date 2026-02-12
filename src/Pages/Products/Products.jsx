import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { db } from '../../firebaseConfig/firebaseConfig';  
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const Products = () => {
    const { t, i18n } = useTranslation();
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                 const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
                const querySnapshot = await getDocs(q);
                const productsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProductList(productsData);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const currentLang = i18n.language || 'en';

    return (
        <>
             <section className="products-hero ibt-section-gap" style={{ background: '#0f1113', padding: '170px 0', borderBottom: '1px solid #222' }}>
                <div className="container text-center">
                    <h1 className="title animated-heading" style={{ color: '#fff', fontSize: '3.5rem', marginTop: '15px' }}>
                        {t("Our")} <span style={{ color: '#007bff' }}>{t("Platforms")}</span>
                    </h1>
                    <p style={{ color: '#888', maxWidth: '700px', margin: '20px auto 0' }}>
                        {t("Scalable, intelligent, and engineering-driven software solutions designed to modernize industries.")}
                    </p>
                </div>
            </section>

             <section className="products-list-sec ibt-section-gap" style={{ backgroundColor: '#16181a', padding: '100px 0' }}>
                <div className="container">
                    {loading ? (
                        <div className="text-center py-5">
                            <div className="spinner-border text-primary" role="status"></div>
                        </div>
                    ) : (
                        productList.map((product, index) => (
                            <div className="row mb-5 align-items-center" key={product.id} style={{
                                background: '#0f1113',
                                borderRadius: '30px',
                                overflow: 'hidden',
                                border: '1px solid #222',
                                 flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
                            }}>
                                 <div className="col-lg-6 p-0">
                                    <div style={{
                                        height: '400px',
                                         backgroundImage: `url(${product.image ? `/assets/images/products/${product.image}` : '/assets/images/blog/blog2-1.png'})`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        borderRight: (index % 2 === 0) ? '1px solid #222' : 'none',
                                        borderLeft: (index % 2 !== 0) ? '1px solid #222' : 'none'
                                    }}></div>
                                </div>

                                 <div className="col-lg-6 p-5">
                                    <span style={{ color: '#007bff', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                                     </span>
                                    
                                    <h2 style={{ color: '#fff', marginTop: '10px', marginBottom: '20px' }}>
                                        {product[`name_${currentLang}`] || product.name_en}
                                    </h2>
                                    
                                    <p style={{ color: '#b0b0b0', lineHeight: '1.8' }}>
                                        {product[`description_${currentLang}`] || product.description_en}
                                    </p>

                                    <div className="features-list mt-4 mb-4">
                                        <div className="row">
                                            {product[`features_${currentLang}`] && product[`features_${currentLang}`].map((feat, i) => (
                                                feat && (
                                                    <div className="col-6 mb-2" key={i}>
                                                        <div style={{ color: '#ccc', fontSize: '0.9rem' }}>
                                                            <i className="fa fa-check-circle me-2" style={{ color: '#007bff' }}></i>
                                                            {feat}
                                                        </div>
                                                    </div>
                                                )
                                            ))}
                                        </div>
                                    </div>

                                    <a href="/contact" className="ibt-btn ibt-btn-outline">
                                        <span>{t("Request Demo")}</span>
                                        <i className="icon-arrow-top"></i>
                                    </a>
                                </div>
                            </div>
                        ))
                    )}

                     {!loading && productList.length === 0 && (
                        <div className="text-center text-muted py-5">{t("No products found.")}</div>
                    )}
                </div>
            </section>
        </>
    );
};

export default Products;