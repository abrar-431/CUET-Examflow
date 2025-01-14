import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { LandingPage } from './pages/LandingPage';
import { StudentDashboard } from './pages/student/StudentDashboard';
import { TeacherDashboard } from './pages/teacher/TeacherDashboard';
import { useAuthStore } from './store/authStore';
import { StudentCourses } from './pages/student/StudentCourses';
import AboutSection from './components/AboutUs';

function PrivateRoute({ children, allowedRole }: { children: React.ReactNode; allowedRole: 'student' | 'teacher' }) {
  const { user } = useAuthStore();
  
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  if (user.role !== allowedRole) {
    return <Navigate to={`/dashboard/${user.role}`} />;
  }
  
  return <>{children}</>;
}

export function App() {
  const { user } = useAuthStore();

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<LandingPage />} />
          <Route path="/courses" element={<StudentCourses />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/login" element={<Login />} />
          
          {/* Protected Routes */}
          <Route path="/dashboard">
            {/* Student Routes */}
            <Route
              path="student/*"
              element={
                <PrivateRoute allowedRole="student">
                  <StudentDashboard />
                </PrivateRoute>
              }
            />
            
            {/* Teacher Routes */}
            <Route
              path="teacher/*"
              element={
                <PrivateRoute allowedRole="teacher">
                  <TeacherDashboard />
                </PrivateRoute>
              }
            />
            
            {/* Redirect to appropriate dashboard based on user role */}
            <Route
              index
              element={
                user ? (
                  <Navigate to={`/dashboard/${user.role}`} replace />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}