// ... existing types ...

export type Enrollment = {
  id: string;
  courseId: string;
  studentId: string;
  enrolledAt: string;
};

// Update Course type
export interface Course {
  id: string;
  code: string;
  name: string;
  semester: string;
  teacherId: string;
  upcomingExams?: number;
}