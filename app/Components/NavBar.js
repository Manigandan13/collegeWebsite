"use client"
import Image from 'next/image'
import React from 'react'
import yellow1 from '../images/photos/yellow1.png'
import Link from 'next/link';
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2f2626] fixed top-0 left-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-white text-2xl font-bold">SSS College</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/">
              <a className="text-white hover:text-gray-200">Home</a>
            </Link>
            <Link href="/academics">
              <a className="text-white hover:text-gray-200">Academics</a>
            </Link>
            <Link href="/campus">
              <a className="text-white hover:text-gray-200">Campus Life</a>
            </Link>
            <Link href="/gallery">
              <a className="text-white hover:text-gray-200">Gallery</a>
            </Link>
            <Link href="/apply">
              <a className="text-white hover:text-gray-200">Apply Now</a>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-2 pt-2 pb-3 space-y-1">
          <Link href="/">
            <a
              onClick={() => setIsOpen(false)}
              className="block text-white hover:bg-gray-700 px-3 py-2 rounded"
            >
              Home
            </a>
          </Link>
          <Link href="/academics">
            <a
              onClick={() => setIsOpen(false)}
              className="block text-white hover:bg-gray-700 px-3 py-2 rounded"
            >
              Academics
            </a>
          </Link>
          <Link href="/campus">
            <a
              onClick={() => setIsOpen(false)}
              className="block text-white hover:bg-gray-700 px-3 py-2 rounded"
            >
              Campus Life
            </a>
          </Link>
          <Link href="/gallery">
            <a
              onClick={() => setIsOpen(false)}
              className="block text-white hover:bg-gray-700 px-3 py-2 rounded"
            >
              Gallery
            </a>
          </Link>
          <Link href="/apply">
            <a
              onClick={() => setIsOpen(false)}
              className="block text-white hover:bg-gray-700 px-3 py-2 rounded"
            >
              Apply Now
            </a>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
