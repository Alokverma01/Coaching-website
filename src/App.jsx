import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { Clock, Calendar, BookOpen, ShoppingCart, ArrowLeft } from 'lucide-react';

// Original course data
const courses = [
  {
    id: 1,
    title: "Advanced Web Development",
    instructor: "Sarah Chen",
    duration: "12 weeks",
    startDate: "March 15, 2024",
    price: "$599",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",
    category: "Programming"
  },
  {
    id: 2,
    title: "Digital Marketing Mastery",
    instructor: "Michael Ross",
    duration: "8 weeks",
    startDate: "April 1, 2024",
    price: "$449",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    category: "Marketing"
  },
  {
    id: 3,
    title: "Data Science Fundamentals",
    instructor: "Emily Watson",
    duration: "10 weeks",
    startDate: "March 20, 2024",
    price: "$699",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    category: "Data Science"
  },
  {
    id: 4,
    title: "UX/UI Design Principles",
    instructor: "David Kim",
    duration: "6 weeks",
    startDate: "April 5, 2024",
    price: "$399",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600",
    category: "Design"
  },
  {
    id: 5,
    title: "Business Analytics",
    instructor: "Lisa Johnson",
    duration: "8 weeks",
    startDate: "March 25, 2024",
    price: "$549",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    category: "Business"
  },
  {
    id: 6,
    title: "Mobile App Development",
    instructor: "Alex Turner",
    duration: "10 weeks",
    startDate: "April 10, 2024",
    price: "$649",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600",
    category: "Programming"
  }
];

// EnrollPage Component
const EnrollPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courses.find(c => c.id === parseInt(courseId));

  if (!course) {
    return <div className="p-8">Course not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <button 
        onClick={() => navigate('/')}
        className="flex items-center text-indigo-600 mb-6 hover:text-indigo-800"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Courses
      </button>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Enroll in {course.title}</h2>
          <div className="space-y-4">
            <p className="text-gray-600">Instructor: {course.instructor}</p>
            <p className="text-gray-600">Duration: {course.duration}</p>
            <p className="text-gray-600">Start Date: {course.startDate}</p>
            <p className="text-xl font-bold text-indigo-600">{course.price}</p>
            
            <div className="mt-6">
              <button 
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
                onClick={() => alert('Enrollment successful!')}
              >
                Complete Enrollment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// CheckoutPage Component
const CheckoutPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courses.find(c => c.id === parseInt(courseId));

  if (!course) {
    return <div className="p-8">Course not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <button 
        onClick={() => navigate('/')}
        className="flex items-center text-indigo-600 mb-6 hover:text-indigo-800"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Courses
      </button>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Checkout for {course.title}</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <p className="text-gray-600">Course: {course.title}</p>
              <p className="text-gray-600">Instructor: {course.instructor}</p>
              <p className="text-gray-600">Duration: {course.duration}</p>
              <p className="font-bold text-indigo-600">Price: {course.price}</p>
            </div>
            
            <div className="pt-4">
              <button 
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
                onClick={() => alert('Payment successful!')}
              >
                Complete Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// CourseCard Component
const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative h-48">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
          {course.category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">Instructor: {course.instructor}</p>

        <div className="space-y-2">
          <div className="flex items-center text-gray-700">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm">{course.duration}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm">Starts {course.startDate}</span>
          </div>
        </div>

        <div className="mt-6">
          <div className="text-2xl font-bold text-indigo-600 mb-4">{course.price}</div>
          <div className="flex gap-4">
            <button
              onClick={() => navigate(`/enroll/${course.id}`)}
              className="flex-1 flex items-center justify-center px-4 py-2 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-300"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Enroll
            </button>
            <button
              onClick={() => navigate(`/checkout/${course.id}`)}
              className="flex-1 flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
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
                    {courses.map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
                </div>
              </div>
            } 
          />
          <Route path="/enroll/:courseId" element={<EnrollPage />} />
          <Route path="/checkout/:courseId" element={<CheckoutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;