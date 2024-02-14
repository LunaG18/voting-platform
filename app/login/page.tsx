'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
 
export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  return (
<>
<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
<div className="sm:mx-auto sm:w-full sm:max-w-sm">
<img
            className="mx-auto h-90 w-auto" 
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/election-campaign-logo-template-design-d097bf8c17d33549b3f4e7c6ed1c9de0_screen.jpg?ts=1677474006"
            alt="Election logo"
          />
<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black underline">
            Log in to your account
</h2>
</div>
 
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
<div className="space-y-6">
<div>
<label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
                Email address
</label>
<div className="mt-2">
<input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
</div>
</div>
 
            <div>
<div className="flex items-center justify-between">
<label htmlFor="password" className="block text-sm font-medium leading-6 text-black">
                  Password
</label>

</div>
</div>
<div className="mt-2">
<input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
</div>
</div>
 
            <div>
<button
                onClick={() => signIn('credentials', {email, password, redirect: true, callbackUrl: '/'})}
                disabled={!email || !password}
                className="disabled:opacity-50 flex w-full justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
>
                Log in
</button>
</div>
</div>
 
          <p className="mt-10 text-center text-sm text-gray-600">
            Not a member?{' '}
<button onClick={() => router.push('signup')} className="font-semibold leading-6 text-gray-400 hover:text-gray-300">
              Sign Up
</button>
</p>
</div>
</>
  )
}