  import { Routes, Route, Navigate } from "react-router-dom"; // تأكد من استيراد Route هنا
  import Services from "../Pages/Services/Services";
  import CaseStudies from "../Pages/CaseStudies/CaseStudies";
  import Contact from "../Pages/Contact/Contact";
  import AboutUs from "../Pages/AboutUs/AboutUs";
  import Home from "../Pages/Home/Home";
  import Products from "../Pages/Products/Products";
import { useTranslation } from "react-i18next";

  // غيرنا الاسم هنا لنتجنب التضارب مع وسم <Route />
  const AppRoutes = () => {
    const { i18n } = useTranslation();
const defaultLang = localStorage.getItem('i18nextLng') || i18n.language || 'en';
    
return (
    <Routes>
      {/* توجيه المسار الفارغ إلى اللغة الافتراضية */}
      <Route path="/" element={<Navigate to={`/${defaultLang}`} replace />} />

      {/* المسارات المدعومة بكود اللغة */}
      <Route path="/:lang">
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="products" element={<Products />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<AboutUs />} />
      </Route>
      
      {/* اختيار افتراضي في حال كان الرابط خطأ */}
      <Route path="*" element={<Navigate to={`/${defaultLang}`} replace />} />
    </Routes>
  );
  };

  export default AppRoutes;
