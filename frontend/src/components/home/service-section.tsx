import { ServiceCard } from "./service-card"

const services = [
  {
    icon: "/placeholder.svg?height=40&width=40",
    title: "Renovation Services",
    description:
      "About Our Renovation Services At Larreus repairs & Co LLC., we offer expert plumbing services for maintenance, repairs, and installations. Our licensed plumbers ensure efficient, reliable water ...",
  },
  {
    icon: "/placeholder.svg?height=40&width=40",
    title: "Electrical Services",
    description:
      "About Our Electrical Services At Larreus repairs & Co LLC., we offer expert plumbing services for maintenance, repairs, and installations. Our licensed plumbers ensure efficient, reliable water ...",
  },
  {
    icon: "/placeholder.svg?height=40&width=40",
    title: "Plumbing Services",
    description:
      "About Our Plumbing Services At Larreus repairs & Co LLC., we offer expert plumbing services for maintenance, repairs, and installations. Our licensed plumbers ensure efficient, reliable water ...",
  },
  {
    icon: "/placeholder.svg?height=40&width=40",
    title: "HVAC Services",
    description:
      "About Our HVAC Services At Larreus repairs & Co LLC., we offer expert plumbing services for maintenance, repairs, and installations. Our licensed plumbers ensure efficient, reliable water ...",
  },
  {
    icon: "/placeholder.svg?height=40&width=40",
    title: "Painting and Drywall",
    description:
      "About Our Painting and Drywall At Larreus repairs & Co LLC., we offer expert plumbing services for maintenance, repairs, and installations. Our licensed plumbers ensure efficient, reliable ...",
  },
  {
    icon: "/placeholder.svg?height=40&width=40",
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

