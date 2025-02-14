import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePage from "@/components/services/ServicePage";
import { useParams } from "react-router-dom";

const ServicesPage = () => {
  const { serviceId } = useParams();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />
      <Navbar />

      <ServicePage serviceId={serviceId} />
      <Footer />
    </div>
  );
};

export default ServicesPage;