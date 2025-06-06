"use client"

import { useEffect } from 'react'; // React hook
import Image from 'next/image'; // For Next.js Image Optimization
import 'aos/dist/aos.css'; // Import AOS CSS
import cs1 from '../images/photos/138077.jpg'
import cs2 from '../images/photos/cultural.jpg'
import cs3 from '../images/photos/CompLab.jpg'
import cs4 from '../images/photos/PhyLab.jpg'
import cs5 from '../images/photos/ChemLab.jpg'
import cs6 from '../images/photos/Bus.jpg'

const page = () => {

  useEffect(() => {
    // Initialize AOS when the component is mounted
    import('aos').then((AOS) => {
      AOS.init({
        duration: 1000, // Duration for the animation
        easing: 'ease-in-out', // Easing function
        once: true, // Animation will only run once when it enters the viewport
        mirror: false, // Whether the animation should run when scrolling back up
      });
    });
  }, []);

  return (
    <div className="relative w-full  overflow-hidden mt-4">

      {/* Title Section */}
      <div className="text-center py-16">
        <h2 className="text-4xl font-semibold text-blue-600 mb-4">Campus Life at SSS College</h2>
        <p className="text-xl text-gray-700">
          Discover the vibrant life on our campus, from state-of-the-art facilities to cultural events and sports activities.
        </p>
      </div>

      {/* Row 1: Left Image, Right Content */}
      <div className="flex flex-col md:flex-row items-center justify-center py-16 px-8 space-x-8">
        {/* Image on Left */}
        <div className="w-full md:w-1/2" data-aos="fade-right">
          <Image 
            src={cs1} 
            alt="Sports Image" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Content on Right */}
        <div className="w-full md:w-1/2 text-center md:text-left" data-aos="fade-left">
          <h3 className="text-3xl font-semibold mb-6 text-blue-600">Sports Facilities</h3>
          <p className="text-lg text-gray-700">
            Our expansive sports facilities include cricket, football, basketball, and more. Students engage in inter-college tournaments and physical activities to enhance their fitness.
          </p>
        </div>
      </div>

      {/* Row 2: Right Image, Left Content */}
      <div className="flex flex-col md:flex-row items-center justify-center py-16 px-8 space-x-8">
        {/* Content on Left */}
        <div className="w-full md:w-1/2 text-center md:text-left" data-aos="fade-right">
          <h3 className="text-3xl font-semibold mb-6 text-purple-600">Cultural Activities</h3>
          <p className="text-lg text-gray-700">
            Our college celebrates a variety of cultural events that encourage students to showcase their talents and creativity in arts, drama, dance, and music.
          </p>
        </div>

        {/* Image on Right */}
        <div className="w-full md:w-1/2" data-aos="fade-left">
          <Image 
            src={cs2}
            alt="Cultural Image" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Row 3: Left Image, Right Content */}
      <div className="flex flex-col md:flex-row items-center justify-center py-16 px-8 space-x-8">
        {/* Image on Left */}
        <div className="w-full md:w-1/2" data-aos="fade-right">
          <Image 
            src={cs3} 
            alt="Computer Lab Image" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Content on Right */}
        <div className="w-full md:w-1/2 text-center md:text-left" data-aos="fade-left">
          <h3 className="text-3xl font-semibold mb-6 text-green-600">Computer Lab</h3>
          <p className="text-lg text-gray-700">
            Our computer labs are fully equipped with the latest technology, providing students with hands-on learning experiences for programming, design, and research.
          </p>
        </div>
      </div>

      {/* Row 4: Right Image, Left Content */}
      <div className="flex flex-col md:flex-row items-center justify-center py-16 px-8 space-x-8">
        {/* Content on Left */}
        <div className="w-full md:w-1/2 text-center md:text-left" data-aos="fade-right">
          <h3 className="text-3xl font-semibold mb-6 text-yellow-600">Physics Lab</h3>
          <p className="text-lg text-gray-700">
            The Physics lab is designed for practical experiments that help students understand the principles of physics through hands-on experience.
          </p>
        </div>

        {/* Image on Right */}
        <div className="w-full md:w-1/2" data-aos="fade-left">
          <Image 
            src={cs4} 
            alt="Physics Lab Image" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center py-16 px-8 space-x-8">
        {/* Image on Left */}
        <div className="w-full md:w-1/2" data-aos="fade-right">
          <Image 
            src={cs5}  
            alt="Chemistry Lab Image" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Content on Right */}
        <div className="w-full md:w-1/2 text-center md:text-left" data-aos="fade-left">
          <h3 className="text-3xl font-semibold mb-6 text-red-600">Chemistry Lab</h3>
          <p className="text-lg text-gray-700">
            The Chemistry lab is equipped with modern instruments for students to conduct experiments in chemical reactions and other scientific processes.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center py-16 px-8 space-x-8">
  {/* Content on Left */}
    <div className="w-full md:w-1/2 text-center md:text-left" data-aos="fade-right">
      <h3 className="text-3xl font-semibold mb-6 text-orange-600">Bus Facilities</h3>
      <p className="text-lg text-gray-700">
      Our college provides convenient bus facilities for students, ensuring easy and safe transportation to and from campus. 
      We offer bus services for areas including Vellore, Ranipet, and surrounding regions, making it easier for students from distant locations to commute to college.
      </p>
    </div>

  {/* Image on Right */}
  <div className="w-full md:w-1/2" data-aos="fade-left">
    <Image 
      src={cs6}
      alt="Bus Facilities Image" 
      width={600} 
      height={400} 
      className="rounded-lg shadow-lg"
    />
    </div>
    </div>
    </div>
  );
};

export default page;


