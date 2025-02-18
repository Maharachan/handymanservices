import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPage from "@/components/contactus";

const ContactUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />
      <Navbar />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default ContactUsPage;