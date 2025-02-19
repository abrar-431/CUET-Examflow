import axios from 'axios';
import { useState, useEffect } from 'react';


export function useExams() {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        axios.get('https://cuet-examflow-server.vercel.app/exams')
        .then(res=>{
          setExams(res.data)
        })
      } catch (err) {
        setError('Failed to fetch exams'+err);
      } finally {
        setLoading(false);
      }
    };

    fetchExams();
  }, []);

  return { exams, loading, error };
}