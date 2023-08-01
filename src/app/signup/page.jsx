'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignUpPage() {
const onSignup = async () => {

}

const [user, setUser] = React.useState({
  email: "",
  password: "",
  setUser: "",
})

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h1 className='text-center text-2xl'>SignUp</h1>
        <hr />
        <label htmlFor="username">username</label>
        <input 
        className='p-2 border border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-800'
          type="text"
          id='username'
          value={user.username}
          onChange={(e) => setUser({...user, username: e.target.value})}
          placeholder='username'
          />
        <label htmlFor="email">Email</label>
        <input 
        className='p-2 border border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-800'
          type="email"
          id='email'
          value={user.email}
          onChange={(e) => setUser({...user, email: e.target.value})}
          placeholder='email'
          />
        <label htmlFor="password">Password</label>
        <input 
        className='p-2 border border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-800'
          type="password"
          id='password'
          value={user.password}
          onChange={(e) => setUser({...user, password: e.target.value})}
          placeholder='password'
          />
          <button
            onClick={onSignup} 
            className='p-2 border border-gray-500 rounded-lg mb-4 focus:outline-none focus:border-gray-800'>
            Sign Up here
          </button>
          < Link href="/login">LoginPage</Link>
    </div>
  )
}
