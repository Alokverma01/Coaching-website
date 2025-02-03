import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import EnrollPage from './pages/EnrollPage'
import CheckoutPage from './pages/CheckoutPage'
import CourseCard from './pages/CourseCard'
import { AuthProvider, useAuth } from './AuthContext/AuthContext';
import HeroSection from './components/HeroSection';
import Nav from './components/Nav';
import Footer from './components/Footer';


const App = () => {
  return ( 
    <>
    <AuthProvider>
      <Nav />
      <HeroSection />
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route 
            path="/" 
            element={
              <div className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                  <h1 className="text-3xl font-bold text-center mb-12">Our Courses</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      <CourseCard />
                  </div>
                </div>
              </div>
            } 
          />
          <Route path="/enroll/:courseId" element={<EnrollPage/>} />
          <Route path="/checkout/:courseId" element={<CheckoutPage/>} />
        </Routes>
      </div>
    </Router>
    <Footer />
    </AuthProvider>
    </>
  );
};

export default App;