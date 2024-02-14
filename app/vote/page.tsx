'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
 
const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
    return (
        <header>
          <nav className="bg-white shadow-md p-3">
            <div className="container mx-auto">
              <div className="flex items-center justify-between">
                <a href="homepage" className="text-blue-500 font-bold text-2xl">Election Platform</a>
                <button onClick={toggleNavbar} className="focus:outline-none lg:hidden">
                  <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0  0  24  24">
                    <path d="M4  6h16M4  12h16M4  18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className={`${isOpen ? '' : 'hidden'} lg:block`}>
                <ul className="flex space-x-4">
                  <li><a href="homepage" className="text-dark"><u>Home</u></a></li>
                  
                </ul>
              </div>
            </div>
          </nav>
        </header>
      );
    };


export default Navbar;