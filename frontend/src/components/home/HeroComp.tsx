import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";


const carouselImages = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/3822850/pexels-photo-3822850.jpeg",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/8292797/pexels-photo-8292797.jpeg",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section fixed */}
      <div className="relative h-[400px] md:h-[600px]">
        {carouselImages.map((image, index) => (
          <img
            key={image.id}
            src={image.url}
            alt={`Hero Background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-[#FF4A17]" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="container mx-auto relative h-full flex flex-col justify-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold max-w-2xl leading-tight">
            Fast & Professional Home Repairs
          </h1>
          <p className="text-white text-lg md:text-xl mt-4 max-w-2xl">
            Our expert handyman team is here to help with any project, big or
            small
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <Button className="bg-[#FF4A17] hover:bg-[#FF4A17]/90 text-white px-8">
              Book A Service
            </Button>
            <Button
              variant="outline"
              className="bg-white hover:bg-gray-100 px-8"
            >
              Get A Quote
            </Button>
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <div className="bg-[#1C1F33] py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Your Name"
            className="flex-1 px-4 py-2 rounded"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="flex-1 px-4 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Subject"
            className="flex-1 px-4 py-2 rounded"
          />
          <Button className="bg-[#FF4A17] hover:bg-[#FF4A17]/90 whitespace-nowrap">
            Make An Appointment
          </Button>
        </div>
      </div>
    </>
  );
}
