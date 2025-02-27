import { Link } from "react-router-dom";
const breadcrumb = "https://res.cloudinary.com/dia8x6y6u/image/upload/v1740361276/breadcrumb-service_vxatpx.jpg"

const ProjectNavigation = () => {
  return (
    <div className="relative w-full h-[300px] bg-gradient-to-r from-gray-800 to-gray-900">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(${breadcrumb})`,
          opacity: 0.4 
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        {/* Breadcrumb navigation */}
        <div className="text-white/80 mb-4">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="mx-2">{'>'}</span>
          <span>Our Projects</span>
        </div>

        {/* Main heading */}
        <h1 className="text-white text-5xl font-bold">
          Our Projects
        </h1>
      </div>
    </div>
  );
};

export default ProjectNavigation;