import React, { use, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

function Services() {
//   const services = [
//     {
//       id: 1,
//       title: "Electrical System",
//       price: 20.00,
//       image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1920"
//     },
//     {
//       id: 2,
//       title: "Engine Diagnostics",
//       price: 20.00,
//       image: "https://images.unsplash.com/photo-1632823469850-2f77dd0f3da5?auto=format&fit=crop&q=80&w=1920"
//     },
//     {
//       id: 3,
//       title: "Auto Car Repair",
//       price: 20.00,
//       image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1920"
//     },
//     {
//       id: 4,
//       title: "Electrical System",
//       price: 20.00,
//       image: "https://images.unsplash.com/photo-1625047509168-a7026afe0c19?auto=format&fit=crop&q=80&w=1920"
//     },
//     {
//       id: 5,
//       title: "Engine Diagnostics",
//       price: 20.00,
//       image: "https://images.unsplash.com/photo-1630026317249-c1c27ce14b24?auto=format&fit=crop&q=80&w=1920"
//     },
//     {
//       id: 6,
//       title: "Auto Car Repair",
//       price: 20.00,
//       image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1920"
//     }
//   ];




  const [services,setServices]=useState([])

  useEffect(()=>{
    fetch("services.json")
    .then(res=>res.json())
    .then((data)=>setServices(data))
  },[])

  console.log(services);



  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <h3 className="text-red-600 font-semibold text-lg">Service</h3>
        <h2 className="text-4xl md:text-5xl font-bold">Our Service Area</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised 
          Words Which Don't Look Even Slightly Believable.
        </p>
      </div>

      {/* Service Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services?.map((service) => (
        <div
          key={service._id}
          className="group bg-white rounded-lg overflow-hidden border hover:shadow-xl transition-shadow duration-300"
        >
          <div className="aspect-video overflow-hidden">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <div className="flex items-center justify-between">
              <span className="text-red-600 font-semibold">
                Price : ${parseFloat(service.price).toFixed(2)}
              </span>
              <button className="p-2 rounded-full hover:bg-red-50 text-red-600 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
      </div>

      {/* More Services Button */}
      <div className="text-center mt-12">
        <button className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
          More Services
        </button>
      </div>
    </div>
  );
}

export default Services;