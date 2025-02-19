import { useState, useEffect } from 'react';
import { Course } from '../types';
import axios from 'axios';


export function useCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);



  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      axios.get('https://cuet-examflow-server.vercel.app/courses')
        .then(res => {
          console.log(res.data);
          setCourses(res.data);
          setLoading(false);
        })
    }, 1000);
  }, []);

  return { courses, loading, error };
}