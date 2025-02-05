import { MapPin, Clock } from "lucide-react"


const TopBar = () => {
  return (

      <div className="bg-[#1C1F33] text-white py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span className="text-center md:text-left">
                307 Shamrock Dr. Longview Tx 75604, US
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span>8:00am - 10:00pm Mon-Sun</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default TopBar