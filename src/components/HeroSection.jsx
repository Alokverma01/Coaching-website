import React from "react";
import { ArrowRight } from "lucide-react";
import LoginPage from "../pages/LoginPage";

const HeroSection = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <div className="sm:h-screen sm:w-screen">
      <div className="container mx-auto px-4 py-16 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl font-bold text-blue-600">
              Your Gateway to Success in JEE & NEET
            </h1>
            <p className="text-gray-600 text-lg">
              Join India's most trusted online learning platform for comprehensive preparation.
            </p>
            <button
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold 
              transform transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
              onClick={() => setToggle(!toggle)}
            >
              Start Learning Now <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
              alt="Students studying"
              className="rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Login Page (Sliding Half-Screen) */}
        {toggle && (
          <div className="w-full h-screen bg-white">
            <div
            className="fixed top-0 right-[-10] left-0 bg-white shadow-2xl transition-transform duration-300"
          >
            <LoginPage />
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
