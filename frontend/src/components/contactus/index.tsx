"use client"

import { useState, useEffect } from "react"
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "react-toastify"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "@/store/useAuthStore"


const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
  date: z.string().min(1, "Please select a date for your appointment"),
  time: z.string().min(1, "Please select a time for your appointment"),
})

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const navigate = useNavigate()
  const { isLoggedIn, userData } = useAuthStore()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      date: "",
      time: "",
    },
  })

  // Pre-fill form with user data if logged in
  useEffect(() => {
    if (isLoggedIn && userData) {
      form.setValue("name", userData.name || "")
      form.setValue("email", userData.email || "")
      if ('phone' in userData) {
        form.setValue("phone", String(userData.phone) || "")
      }
    }
  }, [isLoggedIn, userData, form])

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    // Check if user is logged in
    if (!isLoggedIn) {
      toast.info("Please log in to make an appointment")
      navigate("/login", { state: { from: "/contact-us" } })
      return
    }
    
    setLoading(true)
    
    // No need to format the date since it's already a string in yyyy-MM-dd format
    const formattedDate = data.date
    const formattedTime = data.time
    
    const bookingData = {
      ...data,
      date: formattedDate,
      time: formattedTime,
    }
    
    try {
      const response = await axios.post(`${backendUrl}/api/auth/thanks-for-booking`, bookingData)
      console.log(response)
      const responseData = response.data.success

            
      if (responseData === true) {
        toast.success("Booking Successful! We've received your booking request. Check your email for confirmation.")
        
        // Reset form
        form.reset()
      } else {
        const errorMessage = response.data.message || "Something went wrong. Please try again."
        toast.error(`Booking Failed: ${errorMessage}`)
      }
    } catch (error) {
      console.error("Booking submission error:", error)
      toast.error("Error: Failed to submit your booking. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  // Add a login button component
  const LoginButton = () => (
    <Button
      type="button"
      onClick={() => navigate("/login", { state: { from: "/contact-us" } })}
      className="w-full bg-[#FF4A17] hover:bg-[#FF4A17]/90 text-white"
    >
      Log in to Make an Appointment
    </Button>
  )

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

              {!isLoggedIn ? (
                <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
                  <h3 className="text-lg font-medium mb-4 text-gray-800">Login Required</h3>
                  <p className="text-gray-600 mb-6">
                    Please log in to your account to make an appointment with our team.
                  </p>
                  <LoginButton />
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Your Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input type="email" placeholder="Email address" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Phone Number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Choose Services" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="renovation">Renovation Services</SelectItem>
                              <SelectItem value="electrical">Electrical Services</SelectItem>
                              <SelectItem value="plumbing">Plumbing Services</SelectItem>
                              <SelectItem value="hvac">HVAC Services</SelectItem>
                              <SelectItem value="painting">Painting and Drywall</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input 
                                type="date" 
                                placeholder="Preferred Date" 
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="time"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input 
                                type="time" 
                                placeholder="Preferred Time" 
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message" 
                              className="min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit"
                      className="w-full bg-[#FF4A17] hover:bg-[#FF4A17]/90 text-white"
                      disabled={loading}
                    >
                      {loading ? "Processing..." : "Make An Appointment"}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


