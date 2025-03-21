import React from 'react'
import { Link } from 'react-router'
import pencilLogo from '@src/assets/pencil-logo.png'

const Login: React.FC  = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <img className="w-20 m-auto" src={pencilLogo} alt="pencil loog" />
                <h2 className="text-2xl font-bold text-center text-gray-800 mt-2">Login</h2>
                <p className="mt-2 text-sm text-gray-600 text-center">
                    Welcome back! Please enter your credentials to log in.
                </p>
                <form className="mt-6">
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="********"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-sm text-gray-600 text-center">
                    Don’t have an account?{" "}
                    <Link className="text-blue-500 hover:underline" to="/register">Register</Link>
                </p>
                <p className="mt-3 text-sm text-gray-600 text-center">
                    Forgot your password?{" "}
                    <Link className="text-blue-500 hover:underline" to="/forgot-password">Forgot Password</Link>
                </p>
            </div>
        </div>
    );
}

export default Login