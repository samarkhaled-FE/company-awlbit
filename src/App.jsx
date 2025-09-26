import { Route, Routes } from "react-router-dom";
import { useLanguageContext } from "@contexts/LanguageContext";

// ✅ إضافة ScrollToTop
import ScrollToTop from "@components/ScrollToTop";

// Layouts:
import MainLayout from "@layouts/MainLayout";

// Pages:
import HomePage from "@pages/HomePage";
import CompanyPage from "@pages/CompanyPage";
import ServicesPage from "@pages/ServicesPage";
import SolutionsPage from "@pages/SolutionsPage";
import WhyAwlBitPage from "@pages/WhyAwlBitPage";
import ContactPage from "@pages/ContactPage";
import NotFoundPage from "@pages/NotFoundPage";

// 🔥 ضيفي الصفحات الجديدة
import AboutOnlyPage from "@pages/AboutOnlyPage";
import AchievementsOnlyPage from "@pages/AchievementsOnlyPage";
import ExpertiseOnlyPage from "@pages/ExpertiseOnlyPage";
import ContactOnlyPage from "@pages/ContactOnlyPage";

// Components للخدمات
import BuildingApex from "@components/Sections/BuildingApex";
import OracleFusionSupport from "@components/Sections/OracleFusionSupport";

function App() {
  const { language } = useLanguageContext();

  return (
    <div className="App relative w-full" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* ✅ إضافة ScrollToTop هنا */}
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="company" element={<CompanyPage />} />
          <Route path="services" element={<ServicesPage />} />
          
          {/* 🔥 الروتس الجديدة - ضيفي السطور دي */}
          <Route path="about" element={<AboutOnlyPage />} />
          <Route path="achievements" element={<AchievementsOnlyPage />} />
          <Route path="expertise" element={<ExpertiseOnlyPage />} />
          <Route path="contact-only" element={<ContactOnlyPage />} />
          
          <Route path="services/building-apex" element={<BuildingApex />} />
          <Route path="services/oracle-fusion-support" element={<OracleFusionSupport />} />
          
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="why-awlbit" element={<WhyAwlBitPage />} />
        </Route>
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App;
