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
      <div className="flex flex-col h-screen bg-blue-300">
  <header className="py-10 text-center">
    <div className="container">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"><a href="homepage" >Voting Page</a></h1>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Vote For Your Candidate
        </p>
      </div>
    </div>
  </header>
  <main className="flex-1">
    <div className="container grid items-start justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-8">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-green-600" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6 pb-0">
            <div className="space-y-2">
              <h2 className="text-lg font-bold leading-none"><u>Cyril Ramaphosa</u></h2>
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="flex flex-col gap-4 items-center">
            <img
                    alt="Cyril Ramaphosa"
                    className="rounded-full"
                    height="180"
                    src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Prime_Minister_Sunak_met_with_President_Ramaphosa_of_South_Africa_in_Number_10_-_2022_%28cropped%29.jpg"
                    style={{
                      aspectRatio: "150/180",
                      objectFit: "cover",
                    }}
                    width="150"
                  />
                  <p className="max-w-3xl text-black font-semibold text-sm dark:text-gray-400 border p-4">
          Current president of South Africa and the African National Congress
        </p>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-yellow-500 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                View Manifesto
              </button>
              
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-gray-300">
            Vote</button>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-sky-500" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6 pb-0">
            <div className="space-y-2">
              <h2 className="text-lg font-bold leading-none"><u>John Steenhuisen</u></h2>
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="flex flex-col gap-4 items-center">
            <img
                    alt="John Steenhuisen"
                    className="rounded-full"
                    height="180"
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6f/John_Steenhuisen_%28cropped%29.jpg"
                    style={{
                      aspectRatio: "150/180",
                      objectFit: "cover",
                    }}
                    width="150"
                  />
                   <p className="max-w-3xl text-black font-semibold text-sm dark:text-gray-400 border p-4">
          Current president of the Democratic Alliance
        </p>      
            
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-gray-180 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                View Manifesto
              </button>
             
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-gray-300">
            Vote</button>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-red-600" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6 pb-0">
            <div className="space-y-2">
              <h2 className="text-lg font-bold leading-none"><u>Julius Malema</u></h2>
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="flex flex-col gap-4 items-center">
            <img
                    alt="Julius Malema"
                    className="rounded-full"
                    height="180"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Julius_Malema_2011-09-14_%28cropped2%29.jpg"
                    style={{
                      aspectRatio: "150/180",
                      objectFit: "cover",
                    }}
                    width="150"
                  />
                  <p className="max-w-3xl text-black font-semibold text-sm dark:text-gray-400 border p-4">
                  Current president of the Economic Freedom Fighters        </p>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-stone-950 text-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                View Manifesto
              </button>
              
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-gray-300">
            Vote</button>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-yellow-400" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6 pb-0">
            <div className="space-y-2">
              <h2 className="text-lg font-bold leading-none"><u>Velenkosini Hlabisa</u></h2>
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="flex flex-col gap-4 items-center">
            <img
                    alt="Velenkosini Hlabisa"
                    className="rounded-full"
                    height="180"
                    src="https://upload.wikimedia.org/wikipedia/commons/3/33/Hon-velenkosini-hlabisa.jpg"
                    style={{
                      aspectRatio: "150/180",
                      objectFit: "cover",
                    }}
                    width="150"
                  />
                  <p className="max-w-3xl text-black font-semibold text-sm dark:text-gray-400 border p-4">
                  Current president of the Inkatha Freedom Party        </p>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-red-500 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                View Manifesto
              </button>
              
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-gray-300">
            Vote</button>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-green-500" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6 pb-0">
            <div className="space-y-2">
              <h2 className="text-lg font-bold leading-none"><u>Pieter Groenewald</u></h2>
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="flex flex-col gap-4 items-center">
            <img
                    alt="Pieter Groenewald"
                    className="rounded-full"
                    height="180"
                    src="https://upload.wikimedia.org/wikipedia/commons/3/35/PJ_Groenewald_%28cropped%29.jpg"
                    style={{
                      aspectRatio: "150/180",
                      objectFit: "cover",
                    }}
                    width="150"
                  />
                  <p className="max-w-3xl text-black font-semibold text-sm dark:text-gray-400 border p-4">
                  Current president of the Democratic Alliance        </p>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-orange-500 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                View Manifesto
              </button>
              
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-gray-300">
            Vote</button>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-orange-500" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6 pb-0">
            <div className="space-y-2">
              <h2 className="text-lg font-bold leading-none"><u>Patricia de Lille</u></h2>
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="flex flex-col gap-4 items-center">
            <img
                    alt="Patricia de Lille"
                    className="rounded-full"
                    height="180"
                    src="https://www.gov.za/sites/default/files/Minister%20of%20Public%20Works%20and%20Infrastructure%20Patricia%20De%20Lille%20NGI_8397.jpg"
                    style={{
                      aspectRatio: "150/180",
                      objectFit: "cover",
                    }}
                    width="150"
                  />
                  <p className="max-w-3xl text-black font-semibold text-sm dark:text-gray-400 border p-4">
                  Current president of Good        </p>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-stone-950 text-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                View Manifesto
              </button>
              
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-gray-300">
            Vote</button>
          </div>
        </div>
      </div>
    </div>
  </main>  
</div>
    )
  }
  

  
  
  export default Navbar;