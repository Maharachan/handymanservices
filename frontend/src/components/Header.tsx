import { Mail } from "lucide-react"
import { Link } from "react-router-dom"
import { MobileNav } from "./mobile-nav"
import { Button } from "./ui/button"
import { Phone } from "lucide-react"
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="py-4 border-b">
    <div className="container mx-auto flex justify-between items-center px-4">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <div className="text-[#FF4A17] text-2xl md:text-2xl font-bold flex items-center">
          <img src="https://res.cloudinary.com/dia8x6y6u/image/upload/v1740361112/logo_gqosyt.png" alt="Logo" className="w-8 h-8 mr-2" />
          Larreus repairs & Co LLC.
        </div>
      </Link>

      {/* Contact Info - Hidden on Mobile */}
      <div className="hidden md:flex items-center space-x-8">
        <div className="flex items-center space-x-4">
          <div className="p-2 border rounded-lg border-[#FF4A17]">
            <Phone className="text-[#FF4A17]" />
          </div>
          <div>
            <div className="text-sm text-gray-500">Call Us Now:</div>
            <div className="font-semibold">903-807-8308</div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="p-2 border rounded-lg border-[#FF4A17]">
            <Mail className="text-[#FF4A17]" />
          </div>
          <div>
            <div className="text-sm text-gray-500">Email Address</div>
            <div className="font-semibold">Normanrepairs@yahoo.com</div>
          </div>
        </div>
        <Button onClick={() => navigate("/contact")} className="bg-[#FF4A17] hover:bg-[#FF4A17]/90">
          Request An Estimate
        </Button>
      </div>

      {/* Mobile Nav */}
      <div className="flex md:hidden">
        <MobileNav />
      </div>
    </div>
  </header>
  )
}

export default Header