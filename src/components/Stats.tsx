import React from 'react';
import { GraduationCap, Award, Building2, Users } from 'lucide-react';

export function Stats() {
  const stats = [
    { icon: <Users />, value: '5000+', label: 'Students' },
    { icon: <GraduationCap />, value: '15000+', label: 'Alumni' },
    { icon: <Building2 />, value: '20+', label: 'Departments' },
    { icon: <Award />, value: '50+', label: 'Awards' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-blue-200 mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-blue-200 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}