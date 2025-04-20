"use client"
import { useEffect } from 'react';
import Image from "next/image";
import bcaimage from '../images/photos/BCA COURSE LIST.jpg'
import dataimage from '../images/photos/datascienc.png'
import csimage from '../images/photos/Coding.jpg'
import cs1 from '../images/photos/commerce.jpg'

const SectionThird = () => {

  return (
    <section className="relative py-20 ">
      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">Explore Our Popular Programs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="program-card bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <Image src={dataimage} alt="B.Sc. Data Science" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl text-blue-600 mb-2">B.Sc. Data Science</h3>
            <p className="text-gray-700 mb-4">Dive into the world of data analytics and machine learning.</p>
          </div>

          <div className="program-card bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <Image src={bcaimage} alt="BCA" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl text-blue-600 mb-2">BCA</h3>
            <p className="text-gray-700 mb-4">Develop strong skills in computer science and software development.</p>
          </div>

          <div className="program-card bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <Image src={csimage} alt="B.Sc. Computer Science" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl text-blue-600 mb-2">B.Sc. Computer Science</h3>
            <p className="text-gray-700 mb-4">Explore algorithms, programming, and network technologies.</p>
          </div>

          <div className="program-card bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <Image src={cs1} alt="B.Com" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl text-blue-600 mb-2">B.Com</h3>
            <p className="text-gray-700 mb-4">Build a strong foundation in business, economics, and finance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThird;
