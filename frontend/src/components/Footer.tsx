import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { MapPin, Mail, Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react"
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#1B1F3B] text-white py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
            <img src="https://res.cloudinary.com/dia8x6y6u/image/upload/v1740361112/logo_gqosyt.png" alt="Logo" className="w-8 h-8 mr-2" />
              <span className="text-xl md:text-2xl font-semibold text-[#FF4A17]">Larreus repairs & Co LLC.</span>
            </div>

            <div className="space-y-4">
              <Link to="https://maps.google.com" className="flex items-center space-x-2 hover:text-gray-300">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm md:text-base">307 Shamrock Dr. Longview Tx 75604, US</span>
              </Link>

              <Link to="mailto:hi.example@gmail.com" className="flex items-center space-x-2 hover:text-gray-300">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm md:text-base">Normanrepairs@yahoo.com</span>
              </Link>

              <div className="space-y-1">
                <p className="text-gray-400 text-sm md:text-base">Opening Times:</p>
                <p className="text-sm md:text-base">Mon - Fri: 9am - 5pm</p>
                <p className="text-sm md:text-base">Weekend: 10am - 4pm</p>
              </div>

              <div className="flex space-x-4">
                <Link to="https://www.facebook.com/larreusrepairs" className="hover:text-[#FF6B00]">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link to="https://www.twitter.com/larreusrepairs" className="hover:text-[#FF6B00]">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link to="https://www.instagram.com/larreusrepairs" className="hover:text-[#FF6B00]">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link to="https://www.linkedin.com/larreusrepairs" className="hover:text-[#FF6B00]">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link to="https://www.instagram.com/larreusrepairs" className="hover:text-[#FF6B00]">
                  <Send className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold">Subscribe Newsletter</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Sign up to get the latest news and events—we promise no spam.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-[#2A2F52] border-0 text-white placeholder:text-gray-400"
              />
              <Button className="bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white whitespace-nowrap">Subscribe</Button>
            </div>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:col-span-2">
            {/* About & Services */}
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-4 text-sm md:text-base">ABOUT</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="#" className="text-gray-400 hover:text-white text-sm md:text-base">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-gray-400 hover:text-white text-sm md:text-base">
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-gray-400 hover:text-white text-sm md:text-base">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-gray-400 hover:text-white text-sm md:text-base">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-sm md:text-base">SERVICES</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="#" className="text-gray-400 hover:text-white text-sm md:text-base">
                      Renovation Services
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-gray-400 hover:text-white text-sm md:text-base">
                      Electrical Services
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-gray-400 hover:text-white text-sm md:text-base">
                      Plumbing Services
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-gray-400 hover:text-white text-sm md:text-base">
                      HVAC Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Links & CTA */}
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-4 text-sm md:text-base">QUICK LINKS</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="#" className="text-gray-400 hover:text-white text-sm md:text-base">
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-gray-400 hover:text-white text-sm md:text-base">
                      FAQ's
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-gray-400 hover:text-white text-sm md:text-base">
                      Our Pricing
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-gray-400 hover:text-white text-sm md:text-base">
                      Shop
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-sm md:text-base">GET A FREE ESTIMATE TODAY!</h4>
                <p className="text-gray-400 text-xs md:text-sm mb-2">Call us for a cost estimate over the phone</p>
                <p className="text-lg md:text-xl font-bold mb-4">903-807-8308</p>
                <Button onClick={() => navigate("/contact")} className="bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white w-full text-sm md:text-base">
                  Request An Estimate
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
            Copyright © 2025 Larreus repairs & Co LLC.. All rights reserved
          </p>
          <div className="flex space-x-4 md:space-x-6">
            <Link to="#" className="text-gray-400 hover:text-white text-xs md:text-sm">
              Terms Of Services
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white text-xs md:text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

