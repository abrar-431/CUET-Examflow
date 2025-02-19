import { Routes, Route } from 'react-router-dom';
import { TeacherCourses } from './TeacherCourses';
import { TeacherExams } from './TeacherExams';
import { DashboardNav } from '../../components/DashboardNav';
import { AddCourse } from '../../components/courses/AddCourse';

export function TeacherDashboard() {
  const navItems = [
    { label: 'My Courses', path: 'courses' },
    { label: 'Exams', path: 'exams' },
    { label: 'Home', path: '/' },
  ];

  return (
    <div className="space-y-6">
      <DashboardNav items={navItems} />
      <Routes>
        <Route path="courses" element={<TeacherCourses />} />
        <Route path="exams/*" element={<TeacherExams />} />
        <Route path="addCourse" element={<AddCourse/>} />
      </Routes>
    </div>
  );
}