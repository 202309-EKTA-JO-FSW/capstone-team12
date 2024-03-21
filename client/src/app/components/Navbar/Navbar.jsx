'use client'
import React from 'react';
import Link from "next/link";
import Logout from '../Logout';

const Navbar = () => {
   
    let isLoggedIn = false; 

    // Check if localStorage is available (client-side only)
    if (typeof window !== 'undefined') {
        isLoggedIn = localStorage.getItem('token') ? true : false;
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <Link className="navbar-brand font-weight-bold" href="/">HILM </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" href="/events">Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" href="/about"> About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" href="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" href="/dashboard">Dashboard</Link>
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
                                        <Link className="nav-link" href="/Login">Login</Link>
                                    </div>
                                   
                                    <div className="ms-3">
                                        <Link className="nav-link" href="/signup">Signup</Link>
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
