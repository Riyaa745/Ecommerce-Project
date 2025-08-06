import axios from 'axios';
import React, { useContext, useState } from 'react';
import {  Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ShopContext } from '../context/ShopContext';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formHandler = async (e) => {
    const { navigate } = useContext(ShopContext)
    e.preventDefault(); // prevent page refresh

    try {
      const response = await axios.post('http://localhost:4000/api/user/register', { name, email, password });
      const { success, message } = response.data;

      if (success) {
        // registration success
        toast.success('Registered successfully');
        navigate('/login');
      } else {
        // registration failed → show backend error message
        toast.error(message);
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong! Please try again.');
    }
  };

  return (
    <>
      <div className="flex justify-center items-center bg-gray-100 min-h-screen">
        <div className="bg-white w-96 rounded-lg p-5 shadow-lg text-center">
          <h1 className="text-3xl font-bold text-gray-800">Register</h1>
          <form className="mt-4" onSubmit={formHandler}>
            {/* Username input */}
            <div className="mb-3 text-left">
              <label className="block text-gray-600 font-medium">Username</label>
              <input
                type="text"
                name="username"
                value={name}
                placeholder="Enter your username"
                onChange={(e) => setName(e.target.value)}
                className="border w-full outline-blue-400 py-2 rounded-md px-3 mt-1"
                required
              />
            </div>
            {/* Email input */}
            <div className="mb-3 text-left">
              <label className="block text-gray-600 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                className="border w-full outline-blue-400 py-2 rounded-md px-3 mt-1"
                required
              />
            </div>
            {/* Password input */}
            <div className="mb-3 text-left">
              <label className="block text-gray-600 font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                className="border w-full outline-blue-400 py-2 rounded-md px-3 mt-1"
                required
              />
            </div>
            {/* Submit button */}
            <button
              type="submit"
              className="bg-blue-600 p-3 mb-3 w-full rounded-lg text-white mt-5 hover:bg-blue-700 transition-all"
            >
              Register
            </button>
          </form>
          <p className="text-gray-600 mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
