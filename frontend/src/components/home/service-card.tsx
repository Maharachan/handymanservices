import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg">
      <div className="mb-6">
        <img src={icon || "/placeholder.svg"} alt={`${title} icon`} width={40} height={40} className="w-10 h-10" />
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
      <Link to="/" className="inline-flex items-center text-black font-medium hover:underline">
        Read More
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  )
}

