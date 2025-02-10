import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutUs from "@/components/home/AboutUs";
import HeroComp from "@/components/home/HeroComp";
import ServiceSection from "@/components/home/service-section";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";

const HeroPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Bar */}
      <TopBar />
      {/* Main Header */}
      <Header />
      {/* Navigation - Hidden on Mobile */}
      <Navbar />
      {/* Hero Section */}
      <HeroComp />
       {/* About Us Section */}
       <AboutUs/> 
      {/* Service Section */}
      <ServiceSection/>
      {/* footer */}
      <Footer/>
     
    </div>
  );
};

export default HeroPage;
