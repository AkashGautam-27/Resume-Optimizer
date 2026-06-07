import React from 'react'
import {useNavigate,Link} from "react-router-dom"
const Register = () => {
  const navigate = useNavigate()
  return (
    <>
         <main className="flex min-h-screen items-center justify-center bg-gray-100">
                <div className="w-full max-w-md bg-gray-100 p-8">
                    <h2 className="mb-6 text-2xl font-bold text-gray-800">Register for an Account</h2>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="mb-4">
                            <label htmlFor="username" className="mb-2 block text-sm font-bold text-gray-700">Name</label>
                            <input type="text" id="username" className="w-full rounded-2xl border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none" placeholder="Enter your name" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="mb-2 block text-sm font-bold text-gray-700">Email</label>
                            <input type="email" id="email" className="w-full rounded-2xl border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none" placeholder="Enter your email" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="mb-2 block text-sm font-bold text-gray-700">Password</label>
                            <input type="password" id="password" className="w-full rounded-2xl border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none" placeholder="Enter your password" />
                        </div>
                        <button type="submit" className="w-full bg-green-400 cursor-pointer hover:bg-green-600 text-white font-bold py-2 px-4 rounded-2xl hover:font-extrabold focus:outline-none transition duration-300 ease-in-out scale-095 hover:scale-105">
                            Register
                        </button>
                        <p className="mt-4 text-sm flex justify-center font-medium text-gray-600">Already have an account? &nbsp;&nbsp;<Link to={"/login"} className="text-blue-500 font-bold hover:underline transition-all scale-100 hover:scale-110">Login here</Link></p>
                    </form>
                </div>
         </main>

    </>
    
  )
}

export default Register
