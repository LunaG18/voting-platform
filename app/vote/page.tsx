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
  <button
        type="button"
        aria-pressed="false"
        data-state="off"
        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground bg-transparent h-10 px-3 ml-4"
        aria-label="Toggle bar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="h-6 w-6"
        >
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
      </button>
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
        <details className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-yellow-500 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
  <summary className="cursor-pointer">
    View Manifesto
  </summary>
  <div className="absolute z-10 w-1000 p-4 bg-yellow-200 rounded shadow-lg">
    
    <p>The African National Congress (ANC) is a political party in South Africa. It originated <br></br>
    as a liberation movement known for its opposition to apartheid and has governed the<br></br>
     country since 1994, when the first post-apartheid election resulted in <br></br>
     Nelson Mandela being elected as President of South Africa. Cyril Ramaphosa, the <br></br>
     incumbent national President, has served as President of the ANC since 18 December 2017.</p>
  </div>
</details>
              
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
            
        <details className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
  <summary className="cursor-pointer">
    View Manifesto
  </summary>
  <div className="absolute z-10 w-1000 p-4 bg-gray-200 rounded shadow-lg">
    
    <p>The Democratic Alliance (DA; Afrikaans: Demokratiese Alliansie) is a South African political party and the official<br></br>
     opposition to the ruling African National Congress (ANC). The party is broadly centrist, and has been attributed <br></br>
     both centre-left and centre-right policies. It is a member of Liberal International and the Africa Liberal Network. <br></br>
     The DA traces its roots to the founding of the anti-apartheid Progressive Party in 1959, with many mergers and name <br></br>
     changes between that time and the present. The DA ideologically shows a variety of liberal tendencies, including<br></br>
      social liberalism, classical liberalism, and conservative liberalism.<br></br>
      The current leader of the party is John Steenhuisen, who was announced as the new leader on 1 November 2020<br></br> after the party's Federal Congress.</p>
  </div>
</details>
             
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
                  <details className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-stone-950 text-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
  <summary className="cursor-pointer">
    View Manifesto
  </summary>
  <div className="absolute z-10 w-1000 p-4 bg-gray-400 rounded shadow-lg">
    
    <p>The Economic Freedom Fighters (EFF) is a South African Marxist–Leninist and black nationalist political party.<br></br>
     It was founded by expelled former African National Congress Youth League (ANCYL) President Julius Malema, <br></br>
     and his allies, in 2013. Malema is President of the EFF, heading the Central Command Team which serves as the<br></br>
      central structure of the party. It is currently the third-largest party in both houses of the South African <br></br>
      Parliament. The party is also the official opposition in three of South Africa's nine provincial legislatures.</p>
  </div>
</details>
              
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
                  <details className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-red-500 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
  <summary className="cursor-pointer">
    View Manifesto
  </summary>
  <div className="absolute z-10 w-1000 p-4 bg-red-200 rounded shadow-lg">
    
    <p>The Inkatha Freedom Party (IFP; Zulu: IQembu leNkatha yeNkululeko) is a right-wing political party<br></br>
     in South Africa. Although registered as a national party, it has had only minor electoral success<br></br>
      outside its home province of KwaZulu-Natal. Mangosuthu Buthelezi, who served as chief minister of<br></br>
       KwaZulu during the Apartheid period, founded the party in 1975 and led it until 2019. He was succeeded <br></br>
       as party president in 2019 by Velenkosini Hlabisa.</p>
  </div>
</details>
              
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
                  Current president of the Freedom Front Plus        </p>
                  <details className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-orange-500 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
  <summary className="cursor-pointer">
    View Manifesto
  </summary>
  <div className="absolute z-10 w-1000 p-4 bg-orange-200 rounded shadow-lg">
    
    <p>The Freedom Front Plus (FF Plus; Afrikaans: Vryheidsfront Plus, VF Plus) is a right-wing <br></br>
    political party in South Africa that was formed (as the Freedom Front) in 1994. It is led by <br></br>
    Pieter Groenewald.<br></br>
    The Freedom Front was founded on 1 March 1994 by members of the Afrikaner community under Constand Viljoen,<br></br>
     after he had left the Afrikaner Volksfront amidst disagreements. Seeking to achieve his goals through<br></br>
      electoral means, Viljoen registered the Freedom Front with the Independent Electoral Commission (IEC) on <br></br>
      4 March 1994 to take part in the April 1994 general elections (This date has also been given as 7 March).<br></br>
       On 12 March 1994 Viljoen handed in a list of candidates for the FF to the IEC, confirming that his party <br></br>
       would take part in the elections.
    </p>
  </div>
</details>
              
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
                  <details className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-stone-950 text-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
  <summary className="cursor-pointer">
    View Manifesto
  </summary>
  <div className="absolute z-10 w-1000 p-4 bg-gray-300 rounded shadow-lg">
    
    <p>Good (stylised as GOOD) is a South African political party that was formed in December 2018. It is led by<br></br>
     its founder Patricia de Lille, current Minister of Tourism and former mayor of Cape Town. The party's<br></br>
      policies are predominantly left-wing and its platform is premised on social democracy, environmentalism,<br></br>
       anti-racism and Broad-Based Black Economic Empowerment. The party's stronghold is the<br></br>
        Western Cape and mainly draws support from the Coloured community.<br></br>
        The party holds two seats in the National Assembly of South Africa, while it also has one seat in<br></br>
         the Western Cape Provincial Parliament. In May 2019, De Lille was the only opposition member appointed <br></br>
         to serve in the cabinet of South Africa. She had stated that Good would remain an opposition party.</p>
  </div>
</details>
              
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