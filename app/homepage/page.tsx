'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
 
const Header: React.FC = () => {
    const router = useRouter();
    return (
        <header>
            <nav className="bg-white border-b border-gray-200 shadow-sm mb-3">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-3">
                        
                        <h2 className="text-mediumblue font-bold text-xl">
                                        Log in to your account
                        </h2>
                        <button className="navbar-toggler" type="button">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="flex-grow">
                            <ul className="flex justify-between">
                                
                                <button onClick={() => router.push('homepage')} className="nav-item bg-powderblue text dark underline">
                                                  Home
                                </button>
                                <button onClick={() => router.push('vote')} className="nav-item bg-powderblue">
                                                  Vote for candidate
                                </button>
                                <button onClick={() => router.push('signup')} className="nav-item bg-powderblue">
                                                  Sign Up
                                </button>
                                <button onClick={() => router.push('login')} className="nav-item bg-powderblue">
                                                  Log In
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
