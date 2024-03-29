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
       <header className="fixed inset-x-0 top-0 z-10 bg-white shadow-sm dark:shadow dark:bg-gray-950">
  <div className="container flex h-16 items-center px-4 md:px-6">
  <div className="flex items-center justify-between">
                <a href="homepage" className="text-blue-500 font-bold text-2xl">Election Platform</a>
                <button onClick={toggleNavbar} className="focus:outline-none lg:hidden">
                  <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0  0  24  24">
                    <path d="M4  6h16M4  12h16M4  18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
    <div className="flex items-center gap-2 ml-auto shrink-0">
      <a
        className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        href="vote"
      >
        Vote
      </a>
      <a
        className="inline-flex h-10 items-center justify-center rounded-md border-b-2 border-blue-500 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
        href="signup"
      >
        Register
      </a>
      <a
        className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 underline"
        href="login"
      >
        Login
      </a>
    </div>
  </div>
</header>
        
        <main className="flex-1 bg-blue-300" >
          <div className="py-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold"> National Elections</h2>
        <h1 className="text-3xl font-bold">Live poll results</h1>
        <p className="max-w-3xl text-black dark:text-gray-400 border p-4">
          Welcome to the live polling results of our voting app, where real-time democracy unfolds at your fingertips! As the votes pour in, we're here to provide you with real-time updates on how your favourite candidates are performing. Whether you're a first-time visitor or a returning user, we encourage you to register or log in to take part in this pivotal process. Casting your vote for your favourite candidate not only amplifies your voice but also shapes the future direction of governance. Don't miss this chance to make your vote count in real-time, as we bring the power of decision-making closer to you than ever before.
        </p>
        <div className="my-4 border-b border-gray-200 dark:border-gray-800" />
      </div>      
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="flex flex-col items-center bg-green-600">
                  <img
                    alt="Cyril Ramaphosa"
                    className="rounded-full"
                    height="200"
                    src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Prime_Minister_Sunak_met_with_President_Ramaphosa_of_South_Africa_in_Number_10_-_2022_%28cropped%29.jpg"
                    style={{
                      aspectRatio: "150/200",
                      objectFit: "cover",
                    }}
                    width="150"
                  />
                  <h3 className="text-2 font-bold mt-4">Cyril Ramaphosa</h3>
                  <p className="text-sm mt-1">ANC</p>
                  <img
                    alt="ANC flags"
                    className="rounded-full"
                    height="60"
                    src="https://upload.wikimedia.org/wikipedia/en/0/0d/African_National_Congress_logo.svg"
                    style={{
                      aspectRatio: "60/60",
                      objectFit: "cover",
                    }}
                    width="60"
                  />
                  <p className="text-sm mt-1 font-bold">Votes:</p>
                  <div className="flex items-center gap-4 mt-6 w-full">
                    <div className="w-1/2">
                      <div className="rounded-lg bg-yellow-200 w-full h-8 overflow-hidden">
                        <div className="rounded-lg bg-yellow-500 h-8" />
                      </div>
                    </div>
                    <div className="w-1/2 text-right">
                      <p className="font-semibold">50%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center bg-sky-500">
                  <img
                    alt="John Steenhuisen"
                    className="rounded-full"
                    height="200"
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6f/John_Steenhuisen_%28cropped%29.jpg"
                    style={{
                      aspectRatio: "150/200",
                      objectFit: "cover",
                    }}
                    width="150"
                  />
                  <h3 className="text-2 font-bold mt-4">John Steenhuisen</h3>
                  <p className="text-sm mt-1">DA</p>
                  <img
                    alt="flags"
                    className="rounded-full"
                    height="60"
                    src="https://liberal-international.org/wp-content/uploads/2017/05/DA-240x240.jpg"
                    style={{
                      aspectRatio: "60/60",
                      objectFit: "cover",
                    }}
                    width="60"
                  />
                  <p className="text-sm mt-1 font-bold">Votes:</p>
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
                <CardContent className="flex flex-col items-center bg-red-600">
                  <img
                    alt="Julius Malema"
                    className="rounded-full"
                    height="200"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Julius_Malema_2011-09-14_%28cropped2%29.jpg"
                    style={{
                      aspectRatio: "150/200",
                      objectFit: "cover",
                    }}
                    width="150"
                  />
                  <h3 className="text-2 font-bold mt-4">Julius Malema</h3>
                  <p className="text-sm mt-1">EFF</p>
                  <img
                    alt="flags"
                    className="rounded-full"
                    height="60"
                    src="https://www.politicsweb.co.za/politicsweb/media_stream/politicsweb/1/394442/images/EffLogo2.png"
                    style={{
                      aspectRatio: "80/60",
                      objectFit: "cover",
                    }}
                    width="80"
                  />
                  <p className="text-sm mt-1 font-bold">Votes:</p>
                  <div className="flex items-center gap-4 mt-6 w-full">
                    <div className="w-1/2">
                      <div className="rounded-lg bg-stone-950 w-full h-8 overflow-hidden">
                        <div className="rounded-lg bg-stone-950 h-8" />
                      </div>
                    </div>
                    <div className="w-1/2 text-right">
                      <p className="font-semibold">50%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center bg-yellow-400">
                  <img
                    alt="Velenkosini Hlabisa"
                    className="rounded-full"
                    height="200"
                    src="https://upload.wikimedia.org/wikipedia/commons/3/33/Hon-velenkosini-hlabisa.jpg"
                    style={{
                      aspectRatio: "150/200",
                      objectFit: "cover",
                    }}
                    width="150"
                  />
                  <h3 className="text-2 font-bold mt-4">Velenkosini Hlabisa</h3>
                  <p className="text-sm mt-1">IFP</p>
                  <img
                    alt="flags"
                    className="rounded-full"
                    height="60"
                    src="https://upload.wikimedia.org/wikipedia/en/6/6e/Inkatha_Freedom_Party_logo.svg"
                    style={{
                      aspectRatio: "60/60",
                      objectFit: "cover",
                    }}
                    width="60"
                  />
                  <p className="text-sm mt-1 font-bold">Votes:</p>
                  <div className="flex items-center gap-4 mt-6 w-full">
                    <div className="w-1/2">
                      <div className="rounded-lg bg-red-600 w-full h-8 overflow-hidden">
                        <div className="rounded-lg bg-red-500 h-8" />
                      </div>
                    </div>
                    <div className="w-1/2 text-right">
                      <p className="font-semibold">50%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center bg-green-500">
                  <img
                    alt="Pieter Groenewald"
                    className="rounded-full"
                    height="200"
                    src="https://upload.wikimedia.org/wikipedia/commons/3/35/PJ_Groenewald_%28cropped%29.jpg"
                    style={{
                      aspectRatio: "150/200",
                      objectFit: "cover",
                    }}
                    width="150"
                  />
                  <h3 className="text-2 font-bold mt-4">Pieter Groenewald</h3>
                  <p className="text-sm mt-1">VF+</p>
                  <img
                    alt="flags"
                    className="rounded-full"
                    height="60"
                    src="https://upload.wikimedia.org/wikipedia/en/7/72/Freedom_Front_Plus.svg"
                    style={{
                      aspectRatio: "60/60",
                      objectFit: "cover",
                    }}
                    width="60"
                  />
                  <p className="text-sm mt-1 font-bold">Votes:</p>
                  <div className="flex items-center gap-4 mt-6 w-full">
                    <div className="w-1/2">
                      <div className="rounded-lg bg-orange-500 w-full h-8 overflow-hidden">
                        <div className="rounded-lg bg-orange-500 h-8" />
                      </div>
                    </div>
                    <div className="w-1/2 text-right">
                      <p className="font-semibold">50%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center bg-orange-500">
                  <img
                    alt="Patricia de Lille"
                    className="rounded-full"
                    height="200"
                    src="https://www.gov.za/sites/default/files/Minister%20of%20Public%20Works%20and%20Infrastructure%20Patricia%20De%20Lille%20NGI_8397.jpg"
                    style={{
                      aspectRatio: "150/200",
                      objectFit: "cover",
                    }}
                    width="150"
                  />
                  <h3 className="text-2 font-bold mt-4">Patricia de Lille</h3>
                  <p className="text-sm mt-1">Good</p>
                  <img
                    alt="flags"
                    className="rounded-full"
                    height="60"
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8d/GOOD_%28political_party%29.svg"
                    style={{
                      aspectRatio: "60/60",
                      objectFit: "cover",
                    }}
                    width="60"
                  />
                  <p className="text-sm mt-1 font-bold">Votes:</p>
                  <div className="flex items-center gap-4 mt-6 w-full">
                    <div className="w-1/2">
                      <div className="rounded-lg bg-stone-950 w-full h-8 overflow-hidden">
                        <div className="rounded-lg bg-stone-950 h-8" />
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