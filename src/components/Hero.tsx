import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ArrowRight, GraduationCap, Users, BookOpen } from 'lucide-react';

export function Hero() {
  const navigate = useNavigate()
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px] animate-[pulse_4s_ease-in-out_infinite]" />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/40" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-8">
          <div className="flex justify-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-800/50 backdrop-blur-sm border border-blue-700/50 text-blue-200 animate-[fadeIn_1s_ease-out]">
              <GraduationCap className="h-5 w-5 mr-2" />
              <span>Welcome to CUET Exam Flow</span>
            </div>
          </div>

          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl animate-[slideUp_1s_ease-out]">
            <span className="block">Chittagong University of</span>
            <span className="block bg-gradient-to-r from-blue-200 to-blue-400 text-transparent bg-clip-text">
              Engineering & Technology
            </span>
          </h1>

          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl animate-[fadeIn_1s_ease-out_0.5s_both]">
            Access your courses, exams, and results seamlessly. Join the next generation of engineering excellence at CUET.
          </p>

          {/* <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 animate-[slideUp_1s_ease-out_0.7s_both]">
              <button onClick={()=>navigate('/login')} className="group inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">Get Started <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"/></button>
            <Link
              to="/about"
              className="group inline-flex items-center px-8 py-3 border-2 border-blue-400/30 text-base font-medium rounded-xl text-blue-200 bg-blue-900/50 hover:bg-blue-800/50 md:py-4 md:text-lg md:px-10 transition-all duration-300 backdrop-blur-sm hover:border-blue-400/50"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
            </Link>
          </div> */}

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto animate-[fadeIn_1s_ease-out_1s_both]">
            <div className="flex flex-col items-center space-y-2 text-blue-200">
              <Users className="h-8 w-8" />
              <span className="text-2xl font-bold">5000+</span>
              <span className="text-sm">Students</span>
            </div>
            <div className="flex flex-col items-center space-y-2 text-blue-200">
              <BookOpen className="h-8 w-8" />
              <span className="text-2xl font-bold">200+</span>
              <span className="text-sm">Courses</span>
            </div>
            <div className="flex flex-col items-center space-y-2 text-blue-200">
              <GraduationCap className="h-8 w-8" />
              <span className="text-2xl font-bold">98%</span>
              <span className="text-sm">Success Rate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Image */}
      <div className="absolute inset-0">
        <img
          src="https://i.ibb.co.com/ZXPMwfx/IMG-7095.jpg"
          alt="CUET Campus"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
    </div>
  );
}