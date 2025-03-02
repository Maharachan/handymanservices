import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isLoggedIn, userData, logout, sendVerificationOtp } = useAuthStore();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const handleVerifyEmail = async () => {
    const success = await sendVerificationOtp();
    if (success) {
      navigate('/email-verify');
    }
    setIsDropdownOpen(false);
  };

  // Function to check if a path is active
  const isActivePath = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="border-b hidden md:block">
      <div className="container mx-auto flex justify-between items-center py-4 px-10">
        <div className="flex gap-8 items-center">
          <Link 
            to="/" 
            className={`font-medium ${isActivePath('/') ? 'text-[#FF4A17]' : 'text-gray-600 hover:text-[#FF4A17]'}`}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`${isActivePath('/services') ? 'text-[#FF4A17]' : 'text-gray-600 hover:text-[#FF4A17]'}`}
          >
            Services
          </Link>
          <Link 
            to="/projects" 
            className={`${isActivePath('/projects') ? 'text-[#FF4A17]' : 'text-gray-600 hover:text-[#FF4A17]'}`}
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            className={`${isActivePath('/contact') ? 'text-[#FF4A17]' : 'text-gray-600 hover:text-[#FF4A17]'}`}
          >
            Contact Us
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-[#FF4A17] focus:outline-none"
              >
                <span>Hello, {userData?.name}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  {userData?.role === 'admin' && (
                    <Link
                      to="/admin"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Admin Dashboard
                    </Link>
                  )}
                  {userData?.isAccountVerified ? (
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                  ) : (
                    <button
                      onClick={handleVerifyEmail}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Verify Email
                    </button>
                  )}
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 text-white bg-[#FF4A17] rounded hover:bg-[#ff4a17]/90"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;