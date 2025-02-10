import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";


export function MobileNav() {
  const navigate = useNavigate();
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
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] bg-white">
        <SheetHeader>
          <SheetTitle>
            <div className="text-[#FF4A17] text-2xl font-bold flex items-center">
              <span className="text-3xl mr-2">⚒</span>
              Larreus repairs & Co LLC.
            </div>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col space-y-4 mt-8">
          {/* Navigation Links */}
          <Link to="/" className="text-[#FF4A17] font-medium px-2 py-1">
            Homes
          </Link>
          <Link to="/projects" className="text-gray-600 hover:text-[#FF4A17] px-2 py-1">
            Projects
          </Link>
          <Link to="/services" className="text-gray-600 hover:text-[#FF4A17] px-2 py-1">
            Services
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-[#FF4A17] px-2 py-1">
            Contact Us
          </Link>

          {/* Auth Section */}
          <div className="border-t pt-4 mt-4">
            {isLoggedIn ? (
              <div className="space-y-2">
                <div className="px-2 py-1 text-gray-600">
                  Hello, {userData?.name}
                </div>
                
                {/* Admin Dashboard Link */}
                {userData?.role === 'admin' && (
                  <Link
                    to="/admin"
                    className="block px-2 py-1 text-gray-600 hover:text-[#FF4A17]"
                  >
                    Admin Dashboard
                  </Link>
                )}

                {/* Profile/Verify Email */}
                {userData?.isAccountVerified ? (
                  <Link
                    to="/profile"
                    className="block px-2 py-1 text-gray-600 hover:text-[#FF4A17]"
                  >
                    Profile
                  </Link>
                ) : (
                  <button
                    onClick={handleVerifyEmail}
                    className="block w-full text-left px-2 py-1 text-gray-600 hover:text-[#FF4A17]"
                  >
                    Verify Email
                  </button>
                )}

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-2 py-1 text-gray-600 hover:text-[#FF4A17]"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="block px-2 py-1 text-[#FF4A17] font-medium"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
