import { useState } from "react"
import { motion } from "framer-motion"

// Optimized image URLs
const renovation = [
  "https://res.cloudinary.com/dia8x6y6u/image/upload/c_fill,h_300,w_400,q_auto,f_auto/v1740362869/IMG_0705_rjm0ci.jpg",
  "https://res.cloudinary.com/dia8x6y6u/image/upload/c_fill,h_300,w_400,q_auto,f_auto/v1740362850/IMG_0720_xf7grs.jpg"
];
const electrical = [
  "https://res.cloudinary.com/dia8x6y6u/image/upload/c_fill,h_300,w_400,q_auto,f_auto/v1740362876/IMG_0707_fy2emz.jpg",
  "https://res.cloudinary.com/dia8x6y6u/image/upload/c_fill,h_300,w_400,q_auto,f_auto/v1740362865/IMG_0723_raqdkl.jpg"
];
const plumbing = [
  "https://res.cloudinary.com/dia8x6y6u/image/upload/c_fill,h_300,w_400,q_auto,f_auto/v1740362861/IMG_0717_ztrjt3.jpg",
  "https://res.cloudinary.com/dia8x6y6u/image/upload/c_fill,h_300,w_400,q_auto,f_auto/v1740361369/plumber-repairs1_e1pawt.jpg"
];
const hvac = [
  "https://res.cloudinary.com/dia8x6y6u/image/upload/c_fill,h_300,w_300,q_auto/v1740362842/IMG_0730_aeehzh.jpg",
  "https://res.cloudinary.com/dia8x6y6u/image/upload/c_fill,h_300,w_400,q_auto,f_auto/v1740362861/IMG_0716_tfflfk.jpg"
];
const painting = [
  "https://res.cloudinary.com/dia8x6y6u/image/upload/c_fill,h_300,w_400,q_auto,f_auto/v1740361369/paint-repairs2_r5ybcq.jpg",
  "https://res.cloudinary.com/dia8x6y6u/image/upload/c_fill,h_300,w_400,q_auto,f_auto/v1740361369/paint-repairs1_yawgul.jpg"
];

const categories = ["All", "Renovation", "Electrical", "Plumbing", "HVAC", "Painting"]

const services = [
  {
    id: 1,
    title: "Home Renovation",
    category: "Renovation",
    image: renovation[0],
  },
  {
    id: 2,
    title: "Bathroom Renovation",
    category: "Renovation",
    image: renovation[1],
  },
  {
    id: 3,
    title: "Electrical Installation",
    category: "Electrical",
    image: electrical[0],
  },
  {
    id: 4,
    title: "Kitchen Renovation",
    category: "Electrical",
    image: electrical[1],
  },
  {
    id: 5,
    title: "Pipe Installation",
    category: "Plumbing",
    image: plumbing[0],
  },
  {
    id: 6,
    title: "Drain Cleaning",
    category: "Plumbing",
    image: plumbing[1],
  },
  {
    id: 7,
    title: "AC Installation",
    category: "HVAC",
    image: hvac[0],
  },
  {
    id: 8,
    title: "AC Repair",
    category: "HVAC",
    image: hvac[1],
  },
  {
    id: 9,
    title: "Interior Painting",
    category: "Painting",
    image: painting[0],
  },
  {
    id: 10,
    title: "Wall Painting",
    category: "Painting",
    image: painting[1],
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

