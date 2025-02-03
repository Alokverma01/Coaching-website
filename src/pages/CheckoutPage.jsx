import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '../AuthContext/AuthContext';

const CheckoutPage = () => {
  const { courses } = useAuth();
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
              <p className="text-gray-600">Start Date: {course.startDate}</p>
              <p className="text-xl font-bold text-indigo-600">{course.price}</p>
            </div>
            
            <div className="mt-6">
              <button 
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
                onClick={() => alert('Checkout successful!')}
              >
                Complete Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;