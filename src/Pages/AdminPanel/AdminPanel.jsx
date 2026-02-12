import React, { useState, useEffect } from 'react';
import { db, storage } from '../../firebaseConfig/firebaseConfig'; 
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useTranslation } from 'react-i18next';
import { useParams, useSearchParams, Navigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 import styles from './AdminPanel.module.css';

const AdminPanel = () => {
    const { t, i18n } = useTranslation();
    const { lang } = useParams();
    const [searchParams] = useSearchParams();
    
    const SECRET_KEY = "WizEngine2026_Secure"; 
    const accessKey = searchParams.get("access");
    
    const [activeTab, setActiveTab] = useState('products'); 
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [editId, setEditId] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState({ show: false, id: null });

    const initialState = {
        products: {
            name_ar: '', name_en: '', name_el: '',
            description_ar: '', description_en: '', description_el: '',
            image: '', 
            features_ar: [''], features_en: [''], features_el: ['']
        },
        services: {
            title_ar: '', title_en: '', title_el: '',
            description_ar: '', description_en: '', description_el: '',
            icon: '',
            features_ar: [''], features_en: [''], features_el: ['']
        }
    };

    const [formData, setFormData] = useState(initialState.products);

    useEffect(() => {
        if (lang && i18n.language !== lang) i18n.changeLanguage(lang);
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }, [lang, i18n]);

    useEffect(() => {
        if (accessKey === SECRET_KEY) {
            fetchData();
            setFormData(initialState[activeTab]);
            setEditId(null);
            setImageFile(null);
        }
    }, [activeTab, accessKey]); 

    const fetchData = async () => {
        setLoading(true);
        try {
            const querySnapshot = await getDocs(collection(db, activeTab));
            setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        } catch (error) { 
            toast.error("Error fetching data"); 
        }
        setLoading(false);
    };

    const handleUpload = async () => {
        if (!imageFile) return formData.image || "";
        const fileRef = ref(storage, `${activeTab}/${Date.now()}_${imageFile.name}`);
        const uploadRes = await uploadBytes(fileRef, imageFile);
        return await getDownloadURL(uploadRes.ref);
    };

    const validateForm = () => {
        const requiredFields = activeTab === 'products' 
            ? ['name_ar', 'name_en', 'name_el'] 
            : ['title_ar', 'title_en', 'title_el'];

        for (let field of requiredFields) {
            if (!formData[field] || formData[field].trim() === "") {
                toast.warning(`Please fill in: ${field.replace('_', ' ')}`);
                return false;
            }
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setLoading(true);
        try {
            let imageUrl = formData.image;
            if (activeTab === 'products' && imageFile) imageUrl = await handleUpload();

            const dataToSave = { ...formData, updatedAt: serverTimestamp() };
            if (activeTab === 'products') dataToSave.image = imageUrl;

            if (editId) {
                await updateDoc(doc(db, activeTab, editId), dataToSave);
                toast.success(t('admin.update_success', 'Updated Successfully! ✨'));
            } else {
                dataToSave.createdAt = serverTimestamp();
                await addDoc(collection(db, activeTab), dataToSave);
                toast.success(t('admin.add_success', 'Added Successfully! 🚀'));
            }
            setEditId(null); 
            setImageFile(null); 
            fetchData();
            setFormData(initialState[activeTab]);
        } catch (err) { 
            toast.error("Operation failed: " + err.message); 
        }
        setLoading(false);
    };

    const confirmDelete = async () => {
        try {
            await deleteDoc(doc(db, activeTab, showDeleteModal.id));
            toast.info(t('admin.delete_success', 'Item Deleted 🗑️'));
            fetchData();
            setShowDeleteModal({ show: false, id: null });
        } catch (error) {
            toast.error("Delete failed");
        }
    };

    if (accessKey !== SECRET_KEY) return <Navigate to={`/${lang || 'en'}`} replace />;

    const langs = [
        { code: 'ar', label: 'العربية' }, 
        { code: 'en', label: 'English' }, 
        { code: 'el', label: 'Ελληνικά' }
    ];

    return (
        <div className={styles.wizAdminV3} style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
            <ToastContainer theme="dark" position="top-center" autoClose={3000} />
            <div className={styles.animatedBg}></div>

            {showDeleteModal.show && (
                <div className={styles.deleteModalOverlay}>
                    <div className={styles.deleteModalCard} style={{background:"white",color:"black"}}>
                        <div className={styles.iconWarning}><i className="fas fa-exclamation-triangle"></i></div>
                        <h4>{t('admin.confirm_title', 'Are you sure?')}</h4>
                        <p>{t('admin.confirm_desc', 'This action cannot be undone.')}</p>
                        <div className={styles.modalActions}>
                            <button className={styles.btnCancel} onClick={() => setShowDeleteModal({ show: false, id: null })}>{t('admin.cancel', 'Cancel')}</button>
                            <button className={styles.btnConfirmDelete} onClick={confirmDelete}>{t('admin.delete_btn', 'Delete Now')}</button>
                        </div>
                    </div>
                </div>
            )}

            <div className={`container py-5 ${styles.contentWrapper}`} style={{marginTop:"50px"}}>
                <header className="mb-5 text-center">
                    <div className={styles.tabPillContainer}>
                        <button className={`${styles.pill} ${activeTab === 'products' ? styles.pillActive : ''}`} onClick={() => setActiveTab('products')}>
                            <i className="fas fa-cube me-2"></i> {t('admin.products', 'Products')}
                        </button>
                        <button className={`${styles.pill} ${activeTab === 'services' ? styles.pillActive : ''}`} onClick={() => setActiveTab('services')}>
                            <i className="fas fa-bolt me-2"></i> {t('admin.services', 'Services')}
                        </button>
                    </div>
                </header>

                <div className="row g-4">
                    <div className="col-12">
                        <div className={styles.glassCard}>
                            <div className={styles.cardTopBar} >
                                <h3 style={{color:"white"}}>
                                    <i className="fas fa-edit me-2"></i> 
                                    {editId ? t('admin.edit', 'Edit') : t('admin.add', 'Add')} {activeTab === 'products' ? t('admin.product', 'Product') : t('admin.service', 'Service')}
                                </h3>
                                {editId && (
                                    <button className={styles.btnCancelEdit} onClick={() => {setEditId(null); setFormData(initialState[activeTab]);}}>
                                        {t('admin.cancel_edit', 'Cancel Edit')}
                                    </button>
                                )}
                            </div>

                            <form onSubmit={handleSubmit} className="mt-4">
                                <div className="row g-4 mb-4">
                                    {langs.map(l => (
                                        <div className="col-lg-4" key={l.code}>
                                            <div className={styles.wizInputGroup} >
                                                <label>{activeTab === 'products' ? t('admin.name', 'Name') : t('admin.title', 'Title')} ({l.label}) *</label>
                                                <input 
                                                    value={activeTab === 'products' ? formData[`name_${l.code}`] : formData[`title_${l.code}`]} 
                                                    onChange={e => setFormData({...formData, [activeTab === 'products' ? `name_${l.code}` : `title_${l.code}`]: e.target.value})}
                                                    placeholder="..." 
                                                />
                                            </div>
                                            <div className={`${styles.wizInputGroup} mt-3`}>
                                                <label>{t('admin.description', 'Description')} ({l.label})</label>
                                                <textarea 
                                                    rows="3" 
                                                    value={formData[`description_${l.code}`]} 
                                                    onChange={e => setFormData({...formData, [`description_${l.code}`]: e.target.value})}
                                                    placeholder="..."
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mb-4">
                                    <h5 style={{color:"white", fontSize:'14px', marginBottom:'15px'}}>{t('admin.features', 'Features')}</h5>
                                    <div className="row g-3">
                                        {langs.map(l => (
                                            <div className="col-lg-4" key={l.code}>
                                                <div className={styles.featureColumn}>
                                                    <div className={styles.langHeader}>{l.label}</div>
                                                    {formData[`features_${l.code}`]?.map((feat, i) => (
                                                        <div key={i} className={styles.featInputWrap}>
                                                            <input value={feat} onChange={e => {
                                                                const up = [...formData[`features_${l.code}`]]; up[i] = e.target.value;
                                                                setFormData({...formData, [`features_${l.code}`]: up});
                                                            }} placeholder="..." />
                                                            <button type="button" onClick={() => {
                                                                const up = formData[`features_${l.code}`].filter((_, idx) => idx !== i);
                                                                setFormData({...formData, [`features_${l.code}`]: up});
                                                            }}>&times;</button>
                                                        </div>
                                                    ))}
                                                    <button type="button" className={styles.addFeatLine} onClick={() => setFormData({...formData, [`features_${l.code}`]: [...formData[`features_${l.code}`], ""]})}>
                                                        + {t('admin.add_feature', 'Add Feature')}
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="row align-items-center g-4">
                                    <div className="col-md-6 text-end">
                                        <button type="submit" className={styles.wizBtnPrimary} disabled={loading}>
                                            {loading ? <span className="spinner-border spinner-border-sm me-2"></span> : <i className="fas fa-save me-2"></i>}
                                            {editId ? t('admin.save', 'Save Changes') : t('admin.add_btn', 'Add Item')}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-12 mt-5">
                        <div className={styles.glassCard}>
                            <h4 className="mb-4" style={{color:"white"}}>
                                <i className="fas fa-list me-3 text-info"></i> {t('admin.published_items', 'Published Items')}
                            </h4>
                            <div className={styles.dataGridLayout}>
                                {items.length === 0 && !loading && <div className="col-12 text-center py-5 text-muted">No items found.</div>}
                                {items.map(item => (
                                    <div key={item.id} className={styles.dataItemCard} >
                                        <div className={styles.itemMeta}>
                                            <h5 style={{color:"white"}}>{item[`name_${i18n.language}`] || item[`title_${i18n.language}`] || item.name_ar || "Untitled"}</h5>
                                            <span className={styles.badgeId}>ID: {item.id.substring(0,8)}</span>
                                        </div>
                                        <div className={styles.itemControls}>
                                            <button onClick={() => { setEditId(item.id); setFormData(item); window.scrollTo({top: 0, behavior: 'smooth'}); }} className={styles.ctrlEdit}><i className="fas fa-pen"></i></button>
                                            <button onClick={() => setShowDeleteModal({ show: true, id: item.id })} className={styles.ctrlDel}><i className="fas fa-trash"></i></button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;