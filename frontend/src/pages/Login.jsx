import axios from 'axios';
import React, { useContext, useState } from 'react';
import {  Link } from 'react-router-dom';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ShopContext } from '../context/ShopContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { navigate, token, setToken } = useContext(ShopContext)

    const formHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/api/user/login', { email, password });
            const { success, token } = response.data;
            if (success) {
                localStorage.setItem("token", token);
                setToken(token);
                navigate("/")
                toast.success('Login successfully');
              
                
            } else {
                toast.error(message);
            }
        } catch (error) {
            // 🟢 Axios puts backend error inside error.response
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message); // show backend validation message
            } else {
                toast.error('Something went wrong! Please try again.');
            }
            console.error(error);
        }
    };

    return (
        <>
           
            <div className="flex justify-center items-center bg-gray-100 min-h-screen">
                <div className="bg-white w-96 rounded-lg p-5 shadow-lg text-center">
                    <h1 className="text-3xl font-bold text-gray-800">Login</h1>
                    <form className="mt-4" onSubmit={formHandler}>
                        {/* Email input */}
                        <div className="mb-3 text-left">
                            <label className="block text-gray-600 font-medium">Email</label>
                            <input
                                type="text"
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
                            className="bg-green-500 p-3 mb-3 w-full rounded-lg text-white mt-5 hover:bg-green-600 transition-all"
                        >
                            Login
                        </button>
                    </form>
                    <p className="text-gray-600 mt-4">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-blue-500 hover:underline">
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login; 