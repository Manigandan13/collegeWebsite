import Image from 'next/image'
import React from 'react'
import yellow1 from '../images/photos/yellow1.png'
import Link from 'next/link';
const NavBar = () => {
  return (
    <nav className="bg-[#000000] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-white text-2xl font-bold">SSS College</h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-white hover:text-gray-200">Home</Link>
            <Link href="/academics" className="text-white hover:text-gray-200">Academics</Link>
            <Link href="/campus" className="text-white hover:text-gray-200">Campus Life</Link>
            <Link href="/gallery" className="text-white hover:text-gray-200">Gallery</Link>
            <Link href="/apply" className="text-white hover:text-gray-200">Apply Now</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;