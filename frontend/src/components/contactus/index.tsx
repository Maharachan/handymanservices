"use client"

import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Map Section */}
      <div className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13457.232232751046!2d-94.79596471814783!3d32.51791840295884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86363943c27a105f%3A0x1b47f93214c53ce1!2s307%20Shamrock%20Dr%2C%20Longview%2C%20TX%2075604%2C%20USA!5e0!3m2!1sen!2sin!4v1739851877628!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-md mb-6">
                BOOK A CONSULTATION
              </div>
              <h1 className="text-4xl font-bold mb-4">Book Your Trusted Handyman Expert Now!</h1>
              <p className="text-gray-600">
                Affordable pricing plans tailored to your home repair needs, from quick fixes to large-scale
                renovations.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-gray-600" />
                <div>
                  <p>307 Shamrock Dr, Longview, TX 75604, USA</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-600" />
                <a href="mailto:Normanrepairs@yahoo.com" className="hover:underline">
                Normanrepairs@yahoo.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-600" />
                <a href="tel:903-807-8308" className="hover:underline">
                903-807-8308
                </a>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/wpnhpFTM29PEik5U7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-600 hover:underline"
            >
              Google Map
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Right Column */}
          <div>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Get a Free Consultation</h2>
                <p className="text-gray-600">Use the form below to get in touch with the sales team</p>
              </div>

              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Input placeholder="Your Name" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email address" />
                  </div>
                </div>

                <div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose Services" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="renovation">Renovation Services</SelectItem>
                      <SelectItem value="electrical">Electrical Services</SelectItem>
                      <SelectItem value="plumbing">Plumbing Services</SelectItem>
                      <SelectItem value="hvac">HVAC Services</SelectItem>
                      <SelectItem value="painting">Painting and Drywall</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Textarea placeholder="Your message" className="min-h-[150px]" />
                </div>

                <Button className="w-full bg-[#FF4A17] hover:bg-[#FF4A17]/90 text-white">
                  Make An Appointment
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

