export function calculateGPA(results: Array<{ score: number; credits: number }>): number {
  if (results.length === 0) return 0;

  const totalPoints = results.reduce((sum, result) => {
    return sum + (getGradePoints(result.score) * result.credits);
  }, 0);

  const totalCredits = results.reduce((sum, result) => sum + result.credits, 0);

  return totalPoints / totalCredits;
}

export function getGradePoints(score: number): number {
  if (score >= 80) return 4.0;
  if (score >= 75) return 3.75;
  if (score >= 70) return 3.5;
  if (score >= 65) return 3.25;
  if (score >= 60) return 3.0;
  if (score >= 55) return 2.75;
  if (score >= 50) return 2.5;
  if (score >= 45) return 2.25;
  if (score >= 40) return 2.0;
  return 0.0;
}

export function getGradeLetter(score: number): string {
  if (score >= 80) return 'A+';
  if (score >= 75) return 'A';
  if (score >= 70) return 'A-';
  if (score >= 65) return 'B+';
  if (score >= 60) return 'B';
  if (score >= 55) return 'B-';
  if (score >= 50) return 'C+';
  if (score >= 45) return 'C';
  if (score >= 40) return 'D';
  return 'F';
}