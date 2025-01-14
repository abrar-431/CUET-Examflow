import React from 'react';
import { GraduationCap, MapPin, Building2, History, Award, Navigation } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

function AboutSection() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <GraduationCap className="w-16 h-16 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Chittagong University of Engineering & Technology
          </h1>
          <p className="text-xl text-gray-600">Excellence in Engineering Education Since 1968</p>
        </div>

        {/* Main Image */}
        <div className="relative h-[600px] rounded-2xl overflow-hidden mb-16 shadow-xl">
          <img
            src="https://i.ibb.co.com/ZXPMwfx/IMG-7095.jpg"
            alt="CUET Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <div className="flex items-center mb-2">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Chittagong-Kaptai Road, Chittagong, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <History className="w-8 h-8 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-900">Our History</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Founded in 1968 as Engineering College, Chittagong, CUET has evolved through several transformations. Initially functioning as the Faculty of Engineering of the University of Chittagong, it was converted into Bangladesh Institute of Technology (BIT) Chittagong in 1986. In 2003, the institute achieved university status, becoming CUET.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <Award className="w-8 h-8 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-900">Academic Excellence</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              CUET stands as one of Bangladesh's most prestigious engineering institutions. The university's commitment to excellence is reflected in its autonomous status and self-degree-awarding capabilities. The President of Bangladesh serves as the Chancellor, ensuring the highest standards of educational governance.
            </p>
          </div>
        </div>

        {/* Location Highlights */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <Navigation className="w-8 h-8 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900">Strategic Location</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Port City Proximity",
                description: "Located near Chittagong, Bangladesh's major sea-port"
              },
              {
                title: "Natural Beauty",
                description: "Close to Kaptai Lake and the scenic hills of Rangamati and Bandarban"
              },
              {
                title: "Tourist Attractions",
                description: "Near Cox's Bazar, the world's longest natural sea beach"
              }
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200">
            <Building2 className="w-5 h-5 mr-2" />
            Visit Our Campus
          </button>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
}

export default AboutSection;