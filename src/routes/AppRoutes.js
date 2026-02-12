 import { Routes, Route, Navigate } from "react-router-dom";
import Services from "../Pages/Services/Services";
import CaseStudies from "../Pages/CaseStudies/CaseStudies";
import Contact from "../Pages/Contact/Contact";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import { useTranslation } from "react-i18next";
import AdminPanel from "../Pages/AdminPanel/AdminPanel";

const AppRoutes = () => {
  const { i18n } = useTranslation();
  const defaultLang = localStorage.getItem('i18nextLng') || i18n.language || 'en';
    
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${defaultLang}`} replace />} />

      <Route path="/:lang">
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="products" element={<Products />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<AboutUs />} />
        
        {/* تغيير المسار إلى اسم غير متوقع + صفحة الأدمن */}
        <Route path="wiz-gate" element={<AdminPanel />} />
      </Route>
      
      <Route path="*" element={<Navigate to={`/${defaultLang}`} replace />} />
    </Routes>
  );
};

export default AppRoutes;