import { Course } from '../../types';
import { TeacherCourseCard } from './TeacherCourseCard';
import { SemesterFilter } from '../shared/SemesterFilter';
import { Button } from '../ui/Button';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface CourseListProps {
  courses: Course[];
  role: 'teacher' | 'student';
}

export function CourseList({ courses, role }: CourseListProps) {
  const [selectedSemester, setSelectedSemester] = useState<string>('all');

  const filteredCourses = selectedSemester === 'all'
    ? courses
    : courses.filter(course => course.semester === selectedSemester);

  const semesters = Array.from(new Set(courses.map(course => course.semester)));

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <SemesterFilter
          semesters={semesters}
          selectedSemester={selectedSemester}
          onSelect={setSelectedSemester}
        />

        {role === 'teacher' && (
          <Link to='/dashboard/teacher/addCourse'>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add New Course
            </Button>
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <TeacherCourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}