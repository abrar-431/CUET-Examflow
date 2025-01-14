import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { StudentCourses } from './StudentCourses';
import { StudentExams } from './StudentExams';
import { StudentResults } from './StudentResults';
import { DashboardNav } from '../../components/DashboardNav';

export function StudentDashboard() {
  const navItems = [
    { label: 'My Courses', path: 'courses' },
    { label: 'Exams', path: 'exams' },
    { label: 'Results', path: 'results' },
  ];

  return (
    <div className="space-y-6">
      <DashboardNav items={navItems} />
      <Routes>
        <Route path="/courses" element={<StudentCourses />} />
        <Route path="exams/*" element={<StudentExams />} />
        <Route path="results" element={<StudentResults />} />
      </Routes>
    </div>
  );
}