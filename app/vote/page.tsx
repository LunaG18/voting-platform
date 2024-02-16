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
          Choose Your Candidate
        </p>
      </div>
    </div>
  </header>
  <main className="flex-1">
    <div className="container grid items-start justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-8">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6 pb-0">
            <div className="space-y-2">
              <h2 className="text-lg font-bold leading-none">John Doe</h2>
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="flex flex-col gap-4 items-center">
              <img
                src="/placeholder.svg"
                width="150"
                height="150"
                alt="John Doe"
                className="rounded-full border overflow-hidden object-cover aspect-square"
              />
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                View Manifesto
              </button>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                John Doe's manifesto outlines his vision for the future.
              </p>
            </div>
          </div>
          <div className="flex items-center p-6">
            <div>[object Object]</div>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6 pb-0">
            <div className="space-y-2">
              <h2 className="text-lg font-bold leading-none">Jane Smith</h2>
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="flex flex-col gap-4 items-center">
              <img
                src="/placeholder.svg"
                width="150"
                height="150"
                alt="Jane Smith"
                className="rounded-full border overflow-hidden object-cover aspect-square"
              />
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                View Manifesto
              </button>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Jane Smith's manifesto is a blueprint for change.
              </p>
            </div>
          </div>
          <div className="flex items-center p-6">
            <div>[object Object]</div>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6 pb-0">
            <div className="space-y-2">
              <h2 className="text-lg font-bold leading-none">Sarah Johnson</h2>
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="flex flex-col gap-4 items-center">
              <img
                src="/placeholder.svg"
                width="150"
                height="150"
                alt="Sarah Johnson"
                className="rounded-full border overflow-hidden object-cover aspect-square"
              />
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                View Manifesto
              </button>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Sarah Johnson's manifesto focuses on equality and progress.
              </p>
            </div>
          </div>
          <div className="flex items-center p-6">
            <div>[object Object]</div>
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
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Michael Brown's manifesto emphasizes community engagement.
              </p>
            </div>
          </div>
          <div className="flex items-center p-6">
            <div>[object Object]</div>
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
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Emily Davis's manifesto advocates for environmental sustainability.
              </p>
            </div>
          </div>
          <div className="flex items-center p-6">
            <div>[object Object]</div>
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
              <p className="text-sm text-gray-500 dark:text-gray-400">
                New Candidate's manifesto is under development.
              </p>
            </div>
          </div>
          <div className="flex items-center p-6">
            <div>[object Object]</div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer className="border-t py-4">
    <div className="container flex justify-center gap-4 text-center">
      <a className="text-sm underline" href="#">
        Terms of Service
      </a>
      <a className="text-sm underline" href="#">
        Privacy Policy
      </a>
    </div>
  </footer>
</div>
    )
  }
  
  
  
  
  export default Navbar;