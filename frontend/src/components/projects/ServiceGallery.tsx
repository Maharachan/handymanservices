import { useState } from "react"
import { motion } from "framer-motion"
import service1 from '@/assets/services/renovation-repairs1.jpg';
import service2 from '@/assets/services/renovation-repairs2.jpg';
import service3 from '@/assets/services/electrical-repairs1.jpg';
import service4 from '@/assets/services/electrical-repairs2.jpg';
import service5 from '@/assets/services/plumber-repairs1.jpg';
import service6 from '@/assets/services/plumber-repairs2.jpg';
import service7 from '@/assets/services/hvac-repairs1.jpg';
import service8 from '@/assets/services/renovation-repairs2.jpg';
import service9 from '@/assets/services/paint-repairs1.jpg';
import service10 from '@/assets/services/paint-repairs2.jpg';

const categories = ["All", "Renovation", "Electrical", "Plumbing", "HVAC", "Painting"]

const services = [
  {
    id: 1,
    title: "Kitchen Renovation",
    category: "Renovation",
    image: service1,
  },
  {
    id: 2,
    title: "Bathroom Renovation",
    category: "Renovation",
    image: service2,
  },
  {
    id: 3,
    title: "Electrical Installation",
    category: "Electrical",
    image: service3,
  },
  {
    id: 4,
    title: "Circuit Repair",
    category: "Electrical",
    image: service4,
  },
  {
    id: 5,
    title: "Pipe Installation",
    category: "Plumbing",
    image: service5,
  },
  {
    id: 6,
    title: "Drain Cleaning",
    category: "Plumbing",
    image: service6,
  },
  {
    id: 7,
    title: "AC Installation",
    category: "HVAC",
    image: service7,
  },
  {
    id: 8,
    title: "Home Renovation",
    category: "Renovation",
    image: service8,
  },
  {
    id: 9,
    title: "Interior Painting",
    category: "Painting",
    image: service9,
  },
  {
    id: 10,
    title: "Wall Painting",
    category: "Painting",
    image: service10,
  },
  {
    id: 11,
    title: "Complete Renovation",
    category: "Renovation",
    image: service1,
  },
  {
    id: 12,
    title: "Room Renovation",
    category: "Renovation",
    image: service2,
  },
]

export default function ServiceGallery() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredServices =
    activeCategory === "All" ? services : services.filter((service) => service.category === activeCategory)

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Category Navigation */}
      <nav className="flex flex-wrap gap-4 mb-8 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeCategory === category ? "bg-primary text-primary-foreground" : "hover:bg-muted"
            }`}
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Gallery Grid */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 cursor-pointer" layout>
        {filteredServices.map((service) => (
          <motion.div
            key={service.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative aspect-square group"
          >
            <img
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              className="object-cover rounded-lg w-full h-full"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center"
            >
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-white text-xl font-semibold text-center p-4"
              >
                {service.title}
              </motion.h3>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

