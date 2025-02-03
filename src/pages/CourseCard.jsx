import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Clock, Calendar, BookOpen, ShoppingCart, ArrowLeft, Check } from 'lucide-react';
import { useAuth } from '../AuthContext/AuthContext';

const CourseCard = () => {
    const navigate = useNavigate();
    const { courses } = useAuth();
    return (
      <>  
        {courses.map((course) => (
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
        ))}
      </>
    );
  };
  

export default CourseCard