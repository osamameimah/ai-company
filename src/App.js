import { BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";
import VideoModal from "./components/VideoModal/VideoModal";
import SideMenu from "./components/SideMenu/SideMenu";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "./ThemeContext/ThemeContext";
 
const App = () => {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
       
          {/* <Preloader />
          <VideoModal />
          <SideMenu />
          <MobileMenu /> */}
          <HeaderSection />

          <AppRoutes />
          
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
