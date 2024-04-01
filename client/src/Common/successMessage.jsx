import React, { useEffect } from 'react';

const SuccessAnimation = ({ message }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to other page after 2 seconds
      // You can use React Router's history or any other navigation method here
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className="success-animation">
      <div className="success-message">{message}</div>
      <div className="success-icon">✓</div>
    </div>
  );
};

export default SuccessAnimation;