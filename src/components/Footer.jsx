import React from 'react'
const Footer = () => {
    return (
        <div className='w-full bg-gray-900'>
            <div className="container mx-auto px-6 lg:px-20 flex justify-between items-center w-full bg-gray-900">
      <footer className="bg-gray-900 text-gray-300 py-5 sm:w-screen">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {/* About Section */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">About Us</h2>
              <p className="text-gray-400">
                We provide top-quality coaching to help students achieve their academic and professional goals.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">Courses</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
  
            {/* Contact Section */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-gray-400">123 Coaching Street, City, Country</p>
              <p className="text-gray-400">Email: info@coaching.com</p>
              <p className="text-gray-400">Phone: +91 98765 43210</p>
              <div className="flex justify-center md:justify-start mt-4 space-x-4">
                <a href="#" className="hover:text-white"><i className="fab fa-facebook"></i></a>
                <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i></a>
                <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
                <a href="#" className="hover:text-white"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm mt-8 border-t border-gray-700 pt-4">
            © {new Date().getFullYear()} Coaching Website. All Rights Reserved.
          </div>
        </div>
      </footer>
      </div>
        </div>
    );
  };
  
  export default Footer;
  