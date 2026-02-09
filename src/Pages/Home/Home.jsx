import Preloader from "../../components/Preloader/Preloader";
import VideoModal from "../../components/VideoModal/VideoModal";
import SideMenu from "../../components/SideMenu/SideMenu";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import HomeSection from "../../components/HomeSection/HomeSection";
import Service from "../../components/Service/Service"; // (Our Platforms)
import Feature from "../../components/Feature/Feature"; // (Core Features)
import Faq from "../../components/Faq/Faq"; // (How We Work - الذي عدلناه)
import Testimonial from "../../components/Testimonial/Testimonial"; // (Impact Stats - الذي عدلناه)
import Blog from "../../components/Blog/Blog"; // (Engineering Solutions - الذي عدلناه)
import Partners from "../../components/Partners/Partners";
import Footer from "../../components/Footer/Footer";
import  Team from "../../components/Team/Team";
import "./Home.css";

const Home = () => {
    return (
        <>
 
            <HomeSection />
            <Service />
            <Blog />
            <Feature />
            <Faq />
            <Testimonial />
            <Partners />
            {/* <Team/> */}
            
        </>
    )
}

export default Home;