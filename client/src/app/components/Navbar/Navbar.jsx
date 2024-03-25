'use client'
import React from 'react';
import { useState , useEffect } from 'react';
import Link from "next/link";
import Logout from '../Logout';

const Navbar = () => {
   
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check authentication status on the client-side
        const token = localStorage.getItem('token');
        setIsLoggedIn(token ? true : false);
    }, []);


    return (
        <>
              <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#001318' }}>
                <div className="container">
                <Link className="navbar-brand font-weight-bold" href="/">
                        <img src="/logo.webp" alt="Logo" height="40" />
                    </Link>
                    <Link className="navbar-brand font-weight-bold" href="/" style={{ color: '#f3d250' }}>HILM </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" href="/" style={{ color: '#f3d250' }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" href="/events" style={{ color: '#f3d250' }}>Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" href="/about" style={{ color: '#f3d250' }}> About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" href="/contact" style={{ color: '#f3d250' }}>Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" href="/dashboard" style={{ color: '#f3d250' }}>Dashboard</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            
                            {isLoggedIn ? (
                                <>
                                    
                                    <div className="ms-1">
                                        <Link href="/profile">
                                            <img
                                                src="https://picsum.photos/1000/1000"
                                                className="rounded-circle"
                                                height="25"
                                                alt="profile img"
                                            />
                                        </Link>
                                    </div>
                                    <Logout/>
                                    <div className="ms-3">
                                        
                                    </div>
                                    <div className='ms-1'>
                                        <Link href={'/cart'}>
                                        <i className="fa-solid fa-cart-shopping"></i>
                                        </Link>
                                    </div>
                                </>
                            ) : (
                                <>
                                    
                                    <div className="ms-3">
                                        <Link className="nav-link" href="/Login" style={{ color: '#f3d250' }}>Login</Link>
                                    </div>
                                   
                                    <div className="ms-3">
                                        <Link className="nav-link" href="/signup" style={{ color: '#f3d250' }}>Signup</Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
