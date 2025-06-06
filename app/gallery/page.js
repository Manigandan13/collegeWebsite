"use client"
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import cs1 from '../images/photos/y1.jpeg'
import cs2 from '../images/photos/y3.jpeg'
import cs3 from '../images/photos/y4.jpeg'
import cs4 from '../images/photos/y5.jpeg'

const page = () => {
  const photos = [
    { src: cs1, width: 1200, height: 800, alt: "Cultural Event 1" },
    { src: cs2, width: 1200, height: 800, alt: "Cultural Event 2" },
    { src: cs3, width: 1200, height: 800, alt: "Cultural Event 3" },
    { src: cs4, width: 1200, height: 800, alt: "Cultural Event 4" },
    // Add more images as needed
  ];

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="py-12 bg-gray-100 mt-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-blue-600">Cultural Gallery</h2>
        <p className="text-xl text-gray-700">A glimpse into the vibrant cultural life at SSS College</p>
      </div>

      {/* Gallery Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative overflow-hidden group"
            data-aos="fade-up"
            data-aos-delay={index * 100} // Stagger animations
          >
            <div className="w-full h-full">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                layout="responsive"
                className="object-cover w-full h-full rounded-lg group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
