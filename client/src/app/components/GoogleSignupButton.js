
import React from 'react';
import { useRouter } from 'next/navigation';

const GoogleSignupButton = () => {
  const router = useRouter()
  const handleGoogleSignup = () => {
   
    router.push ('http://localhost:3001/auth/google')
  };

  return (
    <button className="btn btn-danger me-2" onClick={handleGoogleSignup}><i className="fa-brands fa-google"></i> Google</button>
  );
};

export default GoogleSignupButton;
