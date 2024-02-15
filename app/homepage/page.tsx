'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CardContent, Card } from '@/components/ui/card';
 
const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="flex flex-col min-h-screen">
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
                  <li><a href="vote" className="text-dark">Vote for Candidate</a></li>
                  <li><a href="signup" className="text-dark">Register</a></li>
                  <li><a href="login" className="text-dark">Log In</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main className="flex-1 bg-blue-400" >
          <div className="py-8">
          <div className="flex flex-col items-center">
        <h2 className="text-xl md:text-2xl text-center font-bold mb-4">Live poll results</h2>
        <p className="text-base md:text-lg text-center mb-8">
          Welcome to the live polling results of our voting app, where real-time democracy unfolds at your fingertips! As the votes pour in, we're here to provide you with real-time updates on how your favourite candidates are performing. Whether you're a first-time visitor or a returning user, we encourage you to register or log in to take part in this pivotal process. Casting your vote for your favourite candidate not only amplifies your voice but also shapes the future direction of governance. Don't miss this chance to make your vote count in real-time, as we bring the power of decision-making closer to you than ever before.
        </p>
      </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="flex flex-col items-center">
                  <img
                    alt="Candidate"
                    className="rounded-full"
                    height="96"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "96/96",
                      objectFit: "cover",
                    }}
                    width="96"
                  />
                  <h2 className="text-2xl font-bold mt-4">Alice</h2>
                  <p className="text-sm text-gray-500 mt-1">@alice</p>
                  <div className="flex items-center gap-4 mt-6 w-full">
                    <div className="w-1/2">
                      <div className="rounded-lg bg-gray-200 w-full h-8 overflow-hidden">
                        <div className="rounded-lg bg-gray-300 h-8" />
                      </div>
                    </div>
                    <div className="w-1/2 text-right">
                      <p className="font-semibold">50%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center">
                  <img
                    alt="Candidate"
                    className="rounded-full"
                    height="96"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "96/96",
                      objectFit: "cover",
                    }}
                    width="96"
                  />
                  <h2 className="text-2xl font-bold mt-4">Bob</h2>
                  <p className="text-sm text-gray-500 mt-1">@bob</p>
                  <div className="flex items-center gap-4 mt-6 w-full">
                    <div className="w-1/2">
                      <div className="rounded-lg bg-gray-200 w-full h-8 overflow-hidden">
                        <div className="rounded-lg bg-gray-300 h-8" />
                      </div>
                    </div>
                    <div className="w-1/2 text-right">
                      <p className="font-semibold">50%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center">
                  <img
                    alt="Candidate"
                    className="rounded-full"
                    height="96"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "96/96",
                      objectFit: "cover",
                    }}
                    width="96"
                  />
                  <h2 className="text-2xl font-bold mt-4">Charlie</h2>
                  <p className="text-sm text-gray-500 mt-1">charlie</p>
                  <div className="flex items-center gap-4 mt-6 w-full">
                    <div className="w-1/2">
                      <div className="rounded-lg bg-gray-200 w-full h-8 overflow-hidden">
                        <div className="rounded-lg bg-gray-300 h-8" />
                      </div>
                    </div>
                    <div className="w-1/2 text-right">
                      <p className="font-semibold">50%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center">
                  <img
                    alt="Candidate"
                    className="rounded-full"
                    height="96"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "96/96",
                      objectFit: "cover",
                    }}
                    width="96"
                  />
                  <h2 className="text-2xl font-bold mt-4">David</h2>
                  <p className="text-sm text-gray-500 mt-1">david</p>
                  <div className="flex items-center gap-4 mt-6 w-full">
                    <div className="w-1/2">
                      <div className="rounded-lg bg-gray-200 w-full h-8 overflow-hidden">
                        <div className="rounded-lg bg-gray-300 h-8" />
                      </div>
                    </div>
                    <div className="w-1/2 text-right">
                      <p className="font-semibold">50%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center">
                  <img
                    alt="Candidate"
                    className="rounded-full"
                    height="96"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "96/96",
                      objectFit: "cover",
                    }}
                    width="96"
                  />
                  <h2 className="text-2xl font-bold mt-4">Eve</h2>
                  <p className="text-sm text-gray-500 mt-1">eve</p>
                  <div className="flex items-center gap-4 mt-6 w-full">
                    <div className="w-1/2">
                      <div className="rounded-lg bg-gray-200 w-full h-8 overflow-hidden">
                        <div className="rounded-lg bg-gray-300 h-8" />
                      </div>
                    </div>
                    <div className="w-1/2 text-right">
                      <p className="font-semibold">50%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center">
                  <img
                    alt="Candidate"
                    className="rounded-full"
                    height="96"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "96/96",
                      objectFit: "cover",
                    }}
                    width="96"
                  />
                  <h2 className="text-2xl font-bold mt-4">Frank</h2>
                  <p className="text-sm text-gray-500 mt-1">frank</p>
                  <div className="flex items-center gap-4 mt-6 w-full">
                    <div className="w-1/2">
                      <div className="rounded-lg bg-gray-200 w-full h-8 overflow-hidden">
                        <div className="rounded-lg bg-gray-300 h-8" />
                      </div>
                    </div>
                    <div className="w-1/2 text-right">
                      <p className="font-semibold">50%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    )
  }
  
  
  
  
  export default Navbar;