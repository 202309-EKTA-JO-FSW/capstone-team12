import React from "react";
import { useRouter } from 'next/navigation';

const Logout = () => {
    const router = useRouter();

    const handleClick = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        router.push('/');
    };

    return (
        
        <div className="ms-3">
        <button className="btn btn-light p-1" style={{ fontSize: '0.875rem', lineHeight: '1.5', borderRadius: '0.25rem',color:'f3d250' }} onClick={handleClick}>Logout</button>
    </div>        
    );
};

export default Logout;
