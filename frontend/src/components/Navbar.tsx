import { Link } from "react-router-dom";
import { Search, ShoppingBag } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b hidden md:block">
    <div className="container mx-auto flex justify-between items-center py-4">
      <div className="flex space-x-8">
        <Link to="/" className="text-[#FF4A17] font-medium">
          Homes
        </Link>
        <Link to="/services" className="text-gray-600 hover:text-[#FF4A17]">
          Services
        </Link>
        <Link to="/projects" className="text-gray-600 hover:text-[#FF4A17]">
          Projects
        </Link>
        <Link to="/blog" className="text-gray-600 hover:text-[#FF4A17]">
          Blog
        </Link>
        <Link to="/pages" className="text-gray-600 hover:text-[#FF4A17]">
          Pages
        </Link>
        <Link to="/contact" className="text-gray-600 hover:text-[#FF4A17]">
          Contact Us
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Search className="text-gray-600" />
        <div className="relative">
          <ShoppingBag className="text-gray-600" />
          <span className="absolute -top-2 -right-2 bg-[#FF4A17] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar