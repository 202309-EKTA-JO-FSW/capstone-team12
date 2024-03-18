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
        <div className="container py-5">
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary" onClick={handleClick}>Logout</button>
            </div>
        </div>
    );
};

export default Logout;
