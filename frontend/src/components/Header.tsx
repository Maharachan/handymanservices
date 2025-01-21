import { Mail } from "lucide-react"
import { Link } from "react-router-dom"
import { MobileNav } from "./mobile-nav"
import { Button } from "./ui/button"
import { Phone } from "lucide-react"


const Header = () => {
  return (
    <header className="py-4 border-b">
    <div className="container mx-auto flex justify-between items-center px-4">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <div className="text-[#FF4A17] text-2xl md:text-3xl font-bold flex items-center">
          <span className="text-3xl md:text-4xl">⚒</span>
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
        <Button className="bg-[#FF4A17] hover:bg-[#FF4A17]/90">
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