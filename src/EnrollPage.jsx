import React from 'react'; // Make sure this is at the top
import { useParams } from 'react-router-dom';

const EnrollPage = () => {
  const { courseId } = useParams();

  return (
    <div>
      <h2>Enroll in Course {courseId}</h2>
      {/* Your Enroll Page content goes here */}
    </div>
  );
};

export default EnrollPage;
