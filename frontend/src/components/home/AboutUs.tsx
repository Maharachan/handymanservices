import { Trophy, Headphones, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
      <div className="relative aspect-[4/3] w-full">
        <img
          src="https://res.cloudinary.com/dia8x6y6u/image/upload/v1740364344/aboutus_fjy9wg.jpg"
          alt="Professional contractor with tools"
          className="rounded-lg h-full w-full object-cover"
        />
      </div>

      <div className="space-y-8">
        <div>
          <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium">ABOUT US</span>
        </div>

        <h2 className="text-4xl font-bold leading-tight text-gray-900">Reliable Home Repairs And Renovations</h2>

        <p className="text-gray-600 leading-relaxed">
          Expert services you can trust for every repair and renovation project, ensuring lasting results, exceptional
          quality, and peace of mind for you and your home, every time we visit, no matter the size or complexity of the
          job.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Trophy className="w-12 h-12 text-gray-900" />
            <h3 className="text-xl font-semibold text-gray-900">Experienced, Skilled Team</h3>
            <p className="text-gray-600">Our experienced team provides expert solutions tailored to your renovation.</p>
          </div>

          <div className="space-y-4">
            <Headphones className="w-12 h-12 text-gray-900" />
            <h3 className="text-xl font-semibold text-gray-900">Support 24/7</h3>
            <p className="text-gray-600">Our experienced team provides expert solutions tailored to your renovation.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
            Request An Estimate
          </Button>

          <div className="space-y-1">
            <p className="text-sm text-gray-600">Have any Question?</p>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-orange-500" />
              <span className="text-lg font-semibold">903-807-8308</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

