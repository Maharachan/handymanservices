import React from 'react';
import ServiceNavigation from './ServiceNavigation';
import { Link } from 'react-router-dom';
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



import { Button } from "@/components/ui/button";

interface ServicePageProps {
  serviceId?: string;
}

// Mock data for services
const serviceData = {
  'renovation-services': {
    title: 'Renovation Services',
    description: 'Transform your space with our comprehensive renovation services. We handle everything from small updates to complete home makeovers, ensuring quality craftsmanship and attention to detail.',
    features: [
      {
        title: 'Kitchen Remodeling',
        description: 'Complete kitchen renovations including cabinets, countertops, and appliance installation.'
      },
      {
        title: 'Bathroom Updates',
        description: 'Modern bathroom renovations with premium fixtures and waterproof installations.'
      },
      {
        title: 'Room Additions',
        description: 'Expand your living space with professionally constructed room additions.'
      },
      {
        title: 'Basement Finishing',
        description: 'Convert your basement into a functional living space with proper insulation and finishing.'
      }
    ],
    images: [service1, service2]
  },
  'electrical-services': {
    title: 'Electrical Services',
    description: 'Professional electrical services for your home and business. Our licensed electricians ensure safe and reliable electrical systems with modern solutions.',
    features: [
      {
        title: 'Electrical Repairs',
        description: 'Quick and reliable repairs for all electrical issues, from outlets to circuit breakers.'
      },
      {
        title: 'New Installations',
        description: 'Expert installation of lighting, panels, and electrical systems for new construction.'
      },
      {
        title: 'Safety Inspections',
        description: 'Comprehensive electrical safety inspections and preventive maintenance.'
      },
      {
        title: 'Smart Home Integration',
        description: 'Installation and setup of smart home electrical systems and automation.'
      }
    ],
    images: [service3, service4]
  },
  'plumbing-services': {
    title: 'Plumbing Services',
    description: 'Expert plumbing services for all your needs. Our licensed plumbers handle everything from repairs to complete system installations.',
    features: [
      {
        title: 'Emergency Repairs',
        description: '24/7 emergency plumbing repair service for leaks, clogs, and other urgent issues.'
      },
      {
        title: 'Installation Services',
        description: 'Professional installation of fixtures, pipes, and plumbing systems.'
      },
      {
        title: 'Maintenance Plans',
        description: 'Regular maintenance to prevent issues and extend system lifespan.'
      },
      {
        title: 'Water Treatment',
        description: 'Water softener and filtration system installation and maintenance.'
      }
    ],
    images: [service5, service6]
  },
  'hvac-services': {
    title: 'HVAC Services',
    description: 'Complete HVAC solutions for your comfort. We service, repair, and install all types of heating and cooling systems.',
    features: [
      {
        title: 'System Installation',
        description: 'Expert installation of new HVAC systems and equipment.'
      },
      {
        title: 'Repairs & Maintenance',
        description: 'Professional repair and maintenance services for all HVAC brands.'
      },
      {
        title: 'Air Quality Solutions',
        description: 'Indoor air quality improvements with advanced filtration systems.'
      },
      {
        title: 'Energy Efficiency',
        description: 'Energy-saving HVAC solutions and system optimization.'
      }
    ],
    images: [service7, service8]
  },
  'painting-and-drywall': {
    title: 'Painting and Drywall',
    description: 'Professional painting and drywall services for a perfect finish. We handle interior and exterior painting, repairs, and installations.',
    features: [
      {
        title: 'Interior Painting',
        description: 'Expert interior painting with premium paints and precise application.'
      },
      {
        title: 'Exterior Painting',
        description: 'Durable exterior painting solutions with weather-resistant materials.'
      },
      {
        title: 'Drywall Installation',
        description: 'Professional drywall installation and finishing services.'
      },
      {
        title: 'Texture & Repair',
        description: 'Drywall repair and texture matching for seamless walls.'
      }
    ],
    images: [service9, service10]
  }
};

const ServicePage: React.FC<ServicePageProps> = ({ serviceId }) => {
  const services = Object.keys(serviceData).map((key) => serviceData[key as keyof typeof serviceData].title);
  const currentService = serviceId ? serviceData[serviceId as keyof typeof serviceData] : serviceData['renovation-services'];

  const features = [
    {
      icon: '⚒️',
      title: 'Customized Solutions'
    },
    {
      icon: '⏱️',
      title: 'Timely Response'
    },
    {
      icon: '🎯',
      title: 'Quality Products'
    },
    {
      icon: '💰',
      title: 'Transparent Pricing'
    }
  ];

  return (
    <div>
      <ServiceNavigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-3">
            {/* Services Navigation */}
            <nav className="mb-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={`/services/${Object.keys(serviceData)[index]}`}
                  className={`block py-3 border-b ${
                    service === currentService.title 
                      ? 'text-[#FF4A17] border-[#FF4A17]' 
                      : 'text-gray-600 hover:text-[#FF4A17] hover:border-[#FF4A17]'
                  }`}
                >
                  {service}
                </Link>
                
              ))}
              <div className="flex justify-center mt-4">
              <Button className="bg-[#FF4A17] hover:bg-[#FF4A17]/90 text-white px-8">
                Book A Service
              </Button>
              </div>
            </nav>

            {/* Why Choose Us Section */}
            <div className="bg-[#1C1F33] text-white p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-6 text-center">
                Why Our Customers Choose Us?
              </h3>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <span className="text-3xl mb-2">{feature.icon}</span>
                    <span className="text-sm">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>

        
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            <h2 className="text-4xl font-bold mb-6">About Our {currentService.title}</h2>
            <p className="text-gray-600 mb-8">
              {currentService.description}
            </p>

            <div className="space-y-6 mb-8">
              {currentService.features.map((feature: { title: string; description: string }, index: number) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="text-[#FF4A17]">✓</span>
                  <div>
                    <h3 className="font-bold text-lg">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Service Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentService.images.map((image: string, index: number) => (
                <div key={index} className="relative group overflow-hidden rounded-lg">
                  <img 
                    src={image} 
                    alt={`${currentService.title} ${index + 1}`} 
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>

            <p className="text-gray-600 mt-8">
              {currentService.description}
            </p>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
