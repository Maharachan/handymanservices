import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b hidden md:block">
    <div className="container mx-auto flex justify-center gap-8 items-center py-4">
        <Link to="/" className="text-[#FF4A17] font-medium">
          Homes
        </Link>
        <Link to="/services" className="text-gray-600 hover:text-[#FF4A17]">
          Services
        </Link>
        <Link to="/projects" className="text-gray-600 hover:text-[#FF4A17]">
          Projects
        </Link>
        <Link to="/contact" className="text-gray-600 hover:text-[#FF4A17]">
          Contact Us
        </Link>
      </div>
  </nav>
  )
}

export default Navbar