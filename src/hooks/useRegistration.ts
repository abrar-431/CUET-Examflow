import { create } from 'zustand';
import { Course } from '../types';

interface RegistrationStore {
  selectedCourses: Course[];
  addCourse: (course: Course) => void;
  removeCourse: (courseId: string) => void;
  confirmRegistration: () => Promise<void>;
  clear: () => void;
}

export const useRegistration = create<RegistrationStore>((set, get) => ({
  selectedCourses: [],
  addCourse: (course) => set((state) => ({
    selectedCourses: [...state.selectedCourses, course],
  })),
  removeCourse: (courseId) => set((state) => ({
    selectedCourses: state.selectedCourses.filter(c => c.id !== courseId),
  })),
  confirmRegistration: async () => {
    const { selectedCourses } = get();
    // Implement registration confirmation logic
    console.log('Confirming registration for courses:', selectedCourses);
    set({ selectedCourses: [] });
  },
  clear: () => set({ selectedCourses: [] }),
}));