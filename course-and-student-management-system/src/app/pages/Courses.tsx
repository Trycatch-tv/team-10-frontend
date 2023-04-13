import CoursesList from '../components/CoursesList';

import { getCourses } from '../api/services/courses.service';

const Courses: React.FC = () => {
  const courses = getCourses();
  return (
    <div className="p-4 bg-gray-200">
      <h2 className="text-xl font-bold mb-4 gap-4 flex justify-center items-center">Cursos disponibles</h2>
      <CoursesList courses={courses} />
    </div>
  );
};

export default Courses;
