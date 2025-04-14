import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from "../assets/images/banner/1.jpg"
import img2 from "../assets/images/banner/2.jpg"
import img3 from "../assets/images/banner/3.jpg"
import img4 from "../assets/images/banner/4.jpg"
import img5 from "../assets/images/banner/5.jpg"
import img6 from "../assets/images/banner/1.jpg"

function Banner() {
  const slides = [
    {
      id: 1,
      image: img1,
      title: "Affordable Price For Car Servicing",
      description: "There Are Many Variations Of Passages Of Available, But The Majority Have Suffered Alteration in Some Form"
    },
    {
      id: 2,
      image: img2,
      title: "Expert Car Maintenance Service",
      description: "Professional Car Care Services To Keep Your Vehicle Running At Its Best"
    },
    {
      id: 3,
      image: img3,
      title: "Quality Parts & Quick Service",
      description: "We Use Only The Highest Quality Parts To Ensure Your Vehicle's Performance"
    },
    {
      id: 4,
      image: img4,
      title: "Modern Workshop Facilities",
      description: "State-Of-The-Art Equipment And Certified Technicians For Your Car"
    }
  ];

  return (
    <div className="carousel relative w-full h-[600px] overflow-hidden">
      {slides.map((slide) => (
        <div key={slide.id} id={`slide${slide.id}`} className="carousel-item relative w-full h-full">
          <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          
          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
              <div className="max-w-2xl text-white space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl opacity-90">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                    Discover More
                  </button>
                  <button className="px-6 py-3 border-2 border-white text-white rounded-md hover:bg-white/10 transition-colors">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-5 right-5 flex gap-2 z-30">
            <a
              href={`#slide${slide.id === 1 ? slides.length : slide.id - 1}`}
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </a>
            <a
              href={`#slide${slide.id === slides.length ? 1 : slide.id + 1}`}
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Banner;