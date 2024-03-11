
import React from 'react';
import { useRouter } from 'next/navigation';

const GoogleSignupButton = () => {
  const router = useRouter()
  const handleGoogleSignup = () => {
   
    router.push ('http://localhost:3001/auth/google')
  };

  return (
    <button onClick={handleGoogleSignup}>Sign up with Google</button>
  );
};

export default GoogleSignupButton;
