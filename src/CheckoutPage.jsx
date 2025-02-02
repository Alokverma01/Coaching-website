import React from 'react'; // Make sure this is at the top
import { useParams } from 'react-router-dom';

const CheckoutPage = () => {
  const { courseId } = useParams();

  return (
    <div>
      <h2>buy {courseId}</h2>
      {/* Your Enroll Page content goes here */}
    </div>
  );
};

export default CheckoutPage;
