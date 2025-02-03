import React from "react";
import { createContext, useContext } from "react";

const AuthContext = createContext();
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

// Provider Component
export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ courses }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
