import React from 'react';
import { BookOpen, Users, Award, Clock } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Digital Learning',
      description: 'Access course materials anytime, anywhere with our comprehensive digital learning platform.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Interactive Classes',
      description: 'Engage in interactive online sessions with experienced faculty members.',
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Quality Education',
      description: 'Benefit from our internationally recognized curriculum and teaching methods.',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Flexible Schedule',
      description: 'Study at your own pace with our flexible course scheduling system.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose CUET?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Experience world-class education with our innovative learning approach
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-500 blur" />
              <div className="relative p-6 bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}