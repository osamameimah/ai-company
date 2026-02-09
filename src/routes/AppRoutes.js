import { Routes, Route, Navigate } from "react-router-dom"; // تأكد من استيراد Route هنا
import Services from "../Pages/Services/Services";
import CaseStudies from "../Pages/CaseStudies/CaseStudies";
import Contact from "../Pages/Contact/Contact";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";

// غيرنا الاسم هنا لنتجنب التضارب مع وسم <Route />
const AppRoutes = () => {
  const savedLanguage = localStorage.getItem('i18nextLng') || 'en';
  const currentLang = savedLanguage.split('-')[0];
  return (
    <Routes>
<Route path="/" element={<Navigate to={`/${currentLang}`} replace />} />

      <Route path="/:lang">
<Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="products" element={<Products />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
