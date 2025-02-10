import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Hammer, Construction } from "lucide-react";

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />
      <Navbar />

      <div className="flex-1 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="flex justify-center mb-6">
            <Construction className="h-24 w-24 text-[#FF4A17]" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Services Coming Soon
          </h1>
          <p className="text-gray-600 mb-8">
            We're currently fine-tuning our services section to better serve you. Stay tuned for a comprehensive list of our offerings!
          </p>
          <div className="flex justify-center gap-4">
            <Hammer className="h-6 w-6 text-[#FF4A17] animate-bounce" />
            <span className="text-[#FF4A17] font-medium">Under Construction</span>
            <Hammer className="h-6 w-6 text-[#FF4A17] animate-bounce" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesPage;