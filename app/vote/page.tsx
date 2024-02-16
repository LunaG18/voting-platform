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
              <h2 className="text-lg font-bold leading-none">Cyril Ramaphosa</h2>
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="flex flex-col gap-4 items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Prime_Minister_Sunak_met_with_President_Ramaphosa_of_South_Africa_in_Number_10_-_2022_%28cropped%29.jpg"
                width="150"
                height="150"
                alt="Cyril Ramaphosa"
                className="rounded-full border overflow-hidden object-cover aspect-square"
              />
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                View Manifesto
              </button>
              <p className="max-w-3xl text-black font-semibold text-sm dark:text-gray-400 border p-4">
          Current president of South Africa and the African National Congress
        </p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-gray-300">
            Vote</button>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6 pb-0">
            <div className="space-y-2">
              <h2 className="text-lg font-bold leading-none">John Steenhuisen</h2>
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="flex flex-col gap-4 items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6f/John_Steenhuisen_%28cropped%29.jpg"
                width="150"
                height="150"
                alt="John Steenhuisen"
                className="rounded-full border overflow-hidden object-cover aspect-square"
              />
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                View Manifesto
              </button>
              <p className="max-w-3xl text-black font-semibold text-sm dark:text-gray-400 border p-4">
          general candidate info
        </p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-gray-300">
            Vote</button>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6 pb-0">
            <div className="space-y-2">
              <h2 className="text-lg font-bold leading-none">Julius Malema</h2>
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="flex flex-col gap-4 items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Julius_Malema_2011-09-14_%28cropped2%29.jpg"
                width="150"
                height="150"
                alt="Julius Malema"
                className="rounded-full border overflow-hidden object-cover aspect-square"
              />
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                View Manifesto
              </button>
              <p className="max-w-3xl text-black font-semibold text-sm dark:text-gray-400 border p-4">
          general candidate info        </p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-gray-300">
            Vote</button>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6 pb-0">
            <div className="space-y-2">
              <h2 className="text-lg font-bold leading-none">Michael Brown</h2>
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="flex flex-col gap-4 items-center">
              <img
                src="/placeholder.svg"
                width="150"
                height="150"
                alt="Michael Brown"
                className="rounded-full border overflow-hidden object-cover aspect-square"
              />
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                View Manifesto
              </button>
              <p className="max-w-3xl text-black font-semibold text-sm dark:text-gray-400 border p-4">
          general candidate info        </p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-gray-300">
            Vote</button>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6 pb-0">
            <div className="space-y-2">
              <h2 className="text-lg font-bold leading-none">Emily Davis</h2>
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="flex flex-col gap-4 items-center">
              <img
                src="/placeholder.svg"
                width="150"
                height="150"
                alt="Emily Davis"
                className="rounded-full border overflow-hidden object-cover aspect-square"
              />
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                View Manifesto
              </button>
              <p className="max-w-3xl text-black font-semibold text-sm dark:text-gray-400 border p-4">
          general candidate info        </p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-gray-300">
            Vote</button>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6 pb-0">
            <div className="space-y-2">
              <h2 className="text-lg font-bold leading-none">New Candidate</h2>
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="flex flex-col gap-4 items-center">
              <img
                src="/placeholder.svg"
                width="150"
                height="150"
                alt="New Candidate"
                className="rounded-full border overflow-hidden object-cover aspect-square"
              />
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                View Manifesto
              </button>
              <p className="max-w-3xl text-black font-semibold text-sm dark:text-gray-400 border p-4">
          general candidate info        </p>
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