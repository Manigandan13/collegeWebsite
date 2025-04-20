"use client"
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS
import SiteMap from "./SiteMap";

const Footer = () => {
  useEffect(() => {
    // Initialize AOS for scroll animations
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links Section */}
          <div className="space-y-4" data-aos="fade-up">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white hover:text-gray-200">Home</Link></li>
              <li><Link href="/academics" className="text-white hover:text-gray-200">Academics</Link></li>
              <li><Link href="/admission" className="text-white hover:text-gray-200">Admission</Link></li>
              <li><Link href="/campus" className="text-white hover:text-gray-200">Campus Life</Link></li>
              <li><Link href="/gallery" className="text-white hover:text-gray-200">Gallery</Link></li>
              <li><Link href="/apply" className="text-white hover:text-gray-200">Apply Now</Link></li>
            </ul>
          </div>

          {/* About Us Section */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p>
              SSS College, founded by A.K. Natarajan, is a premier institution dedicated to offering higher education to underprivileged students from rural areas. Our mission is to provide quality education with strong human values, preparing students for success in both professional and personal lives.
            </p>
          </div>

          {/* Map Section */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-lg font-semibold">Our Location</h3>
            <SiteMap/>
          </div>

          {/* Contact Details Section */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="600">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p>
              <strong>Address:</strong> #15, By-Pass Road, Arcot-632503, Ranipet District
            </p>
            <p>
              <strong>Contact Number:</strong> 9150122555
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:sssscareers@yahoo.co.in" className="text-white hover:text-gray-200">sssscareers@yahoo.co.in</a>
            </p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="800">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} SSS College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
