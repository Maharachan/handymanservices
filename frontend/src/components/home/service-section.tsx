import { ServiceCard } from "./service-card"
import electricalServices from "@/assets/icons/electrical-service.png"
import renovationServices from "@/assets/icons/home-repair.png"
import plumbingServices from "@/assets/icons/plumbing-maintenance.png"
import hvacServices from "@/assets/icons/HVAC-service.png"
import paintingDrywall from "@/assets/icons/house-painting.png"
import roofingServices from "@/assets/icons/roof-service.png"

const services = [
  {
    icon: renovationServices,
    title: "Renovation Services",
    description:
      "About Our Renovation Services At Larreus repairs & Co LLC., we offer expert plumbing services for maintenance, repairs, and installations. Our licensed plumbers ensure efficient, reliable water ...",
  },
  {
    icon: electricalServices,
    title: "Electrical Services",
    description:
      "About Our Electrical Services At Larreus repairs & Co LLC., we offer expert plumbing services for maintenance, repairs, and installations. Our licensed plumbers ensure efficient, reliable water ...",
  },
  {
    icon: plumbingServices,
    title: "Plumbing Services",
    description:
      "About Our Plumbing Services At Larreus repairs & Co LLC., we offer expert plumbing services for maintenance, repairs, and installations. Our licensed plumbers ensure efficient, reliable water ...",
  },
  {
    icon: hvacServices,
    title: "HVAC Services",
    description:
      "About Our HVAC Services At Larreus repairs & Co LLC., we offer expert plumbing services for maintenance, repairs, and installations. Our licensed plumbers ensure efficient, reliable water ...",
  },
  {
    icon: paintingDrywall,
    title: "Painting and Drywall",
    description:
      "About Our Painting and Drywall At Larreus repairs & Co LLC., we offer expert plumbing services for maintenance, repairs, and installations. Our licensed plumbers ensure efficient, reliable ...",
  },
  {
    icon: roofingServices,
    title: "Roofing Services",
    description:
      "About Our Roofing Services At Larreus repairs & Co LLC., we offer expert plumbing services for maintenance, repairs, and installations. Our licensed plumbers ensure efficient, reliable water ...",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-500 rounded-full text-sm font-medium mb-4">
            WHAT WE DO?
          </span>
          <h2 className="text-4xl font-bold mb-4">Our Service That We Offer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We pride ourselves on delivering consistent, high-quality services that you can depend on. Whether it's a
            small fix or a large-scale renovation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

