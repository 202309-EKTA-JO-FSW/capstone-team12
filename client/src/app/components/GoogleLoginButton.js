
import React from 'react';
import { useRouter } from 'next/navigation';
const GoogleLoginButton = () => {
  const router = useRouter()
  
  const handleGoogleLogin = () => {
    
    router.push('http://localhost:3001/auth/google')
  };

  return (
    <button onClick={handleGoogleLogin}>Login with Google</button>
  );
};

export default GoogleLoginButton;
