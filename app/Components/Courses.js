"use client"
import { FaGraduationCap, FaDollarSign } from "react-icons/fa";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Courses = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Animation happens once
    });
  }, []);

  return (
    <div className="px-6 py-12 ">
      <h2 className="text-3xl font-semibold text-center mb-8 text-blue-600">Courses We Offer</h2>

      {/* Undergraduate Programs */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-center text-blue-600 mb-4">Undergraduate Programs (UG)</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Course 1: BCA */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-3xl text-blue-500 mr-3" />
              <h4 className="text-xl font-semibold">BCA (Bachelor of Computer Applications)</h4>
            </div>
            <p className="text-gray-700 mb-4">The BCA program focuses on computer applications and software development. It prepares students for careers in IT, programming, and system management.</p>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">₹26,000/year</p>
            </div>
          </div>

          {/* Course 2: B.Sc Computer Science */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-3xl text-blue-500 mr-3" />
              <h4 className="text-xl font-semibold">B.Sc Computer Science</h4>
            </div>
            <p className="text-gray-700 mb-4">The B.Sc in Computer Science provides a solid foundation in programming, algorithms, and system architecture, preparing students for advanced roles in the tech industry.</p>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">₹25,000/year</p>
            </div>
          </div>

          {/* Course 3: B.Sc Data Science */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out" data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-3xl text-blue-500 mr-3" />
              <h4 className="text-xl font-semibold">B.Sc Data Science</h4>
            </div>
            <p className="text-gray-700 mb-4">This course equips students with the skills to analyze and interpret large datasets, focusing on data analysis, machine learning, and statistical techniques.</p>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">₹26,000/year</p>
            </div>
          </div>

          {/* Course 4: B.Sc Chemistry */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out" data-aos="fade-up" data-aos-delay="400">
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-3xl text-blue-500 mr-3" />
              <h4 className="text-xl font-semibold">B.Sc Chemistry</h4>
            </div>
            <p className="text-gray-700 mb-4">The B.Sc Chemistry program provides students with comprehensive knowledge of organic, inorganic, and physical chemistry, along with laboratory techniques.</p>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">₹19,000/year</p>
            </div>
          </div>

          {/* Course 5: B.Sc Physics */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out" data-aos="fade-up" data-aos-delay="500">
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-3xl text-blue-500 mr-3" />
              <h4 className="text-xl font-semibold">B.Sc Physics</h4>
            </div>
            <p className="text-gray-700 mb-4">The B.Sc Physics course offers a deep understanding of the fundamental laws of nature and prepares students for careers in research, education, and technology.</p>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">₹18,000/year</p>
            </div>
          </div>

          {/* Course 6: B.Sc Mathematics */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out" data-aos="fade-up" data-aos-delay="600">
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-3xl text-blue-500 mr-3" />
              <h4 className="text-xl font-semibold">B.Sc Mathematics</h4>
            </div>
            <p className="text-gray-700 mb-4">This program offers a rigorous study of mathematical concepts, including algebra, calculus, and statistical methods, preparing students for diverse fields of analysis and research.</p>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">₹13,000/year</p>
            </div>
          </div>

          {/* Course 7: B.Com */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out" data-aos="fade-up" data-aos-delay="700">
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-3xl text-blue-500 mr-3" />
              <h4 className="text-xl font-semibold">B.Com (Bachelor of Commerce)</h4>
            </div>
            <p className="text-gray-700 mb-4">The B.Com program offers a comprehensive understanding of accounting, economics, business management, and finance.</p>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">₹17,000/year</p>
            </div>
          </div>

          {/* Course 8: B.Com Computer Application */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out" data-aos="fade-up" data-aos-delay="800">
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-3xl text-blue-500 mr-3" />
              <h4 className="text-xl font-semibold">B.Com Computer Application</h4>
            </div>
            <p className="text-gray-700 mb-4">This course integrates business studies with computer applications, preparing students for careers in IT, business management, and system administration.</p>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">₹20,000/year</p>
            </div>
          </div>

          {/* Course 9: BBA */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out" data-aos="fade-up" data-aos-delay="900">
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-3xl text-blue-500 mr-3" />
              <h4 className="text-xl font-semibold">BBA (Bachelor of Business Administration)</h4>
            </div>
            <p className="text-gray-700 mb-4">The BBA program focuses on business management principles, marketing, finance, and entrepreneurship.</p>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">₹14,000/year</p>
            </div>
          </div>

          {/* Course 10: B.A English */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out" data-aos="fade-up" data-aos-delay="1000">
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-3xl text-blue-500 mr-3" />
              <h4 className="text-xl font-semibold">B.A English</h4>
            </div>
            <p className="text-gray-700 mb-4">The B.A English course provides an in-depth understanding of English literature, linguistics, and writing skills.</p>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">₹15,000/year</p>
            </div>
          </div>
          
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out" data-aos="fade-up">
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-3xl text-blue-500 mr-3" />
              <h4 className="text-xl font-semibold">B.A Defence Studies</h4>
            </div>
            <p className="text-gray-700 mb-4">The B.A Defence course offers insights into national security, defense management, and military history.</p>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">₹15,000/year</p>
            </div>
          </div>

          {/* Course 12: B.A Tamil */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out" data-aos="fade-up">
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-3xl text-blue-500 mr-3" />
              <h4 className="text-xl font-semibold">B.A Tamil</h4>
            </div>
            <p className="text-gray-700 mb-4">The B.A Tamil course focuses on the Tamil language, literature, and culture, enhancing students' linguistic and cultural understanding.</p>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">₹15,000/year</p>
            </div>
        </div>
      </div>
      </div>
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-center text-blue-600 mb-4">Postgraduate Programs (PG)</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* PG Course 1: M.Sc Computer Science */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out" data-aos="fade-up">
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-3xl text-blue-500 mr-3" />
              <h4 className="text-xl font-semibold">M.Sc Computer Science</h4>
            </div>
            <p className="text-gray-700 mb-4">M.Sc in Computer Science provides advanced knowledge in computer systems, data structures, and algorithm design.</p>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">₹25,000/year</p>
            </div>
          </div>

          {/* PG Course 2: M.Com */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out" data-aos="fade-up">
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-3xl text-blue-500 mr-3" />
              <h4 className="text-xl font-semibold">M.Com (Master of Commerce)</h4>
            </div>
            <p className="text-gray-700 mb-4">M.Com prepares students for advanced careers in accounting, business management, and financial analysis.</p>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">₹20,000/year</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;