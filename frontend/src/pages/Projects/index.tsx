import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceGallery from "@/components/projects/serviceGallery";
import ProjectNavigation from "@/components/projects/ProjectNavigation";
const ProjectsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />
      <Navbar />
      <ProjectNavigation />
      <ServiceGallery />

      <Footer />
    </div>
  );
};

export default ProjectsPage;