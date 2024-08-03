'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

const LoginForm = () => {
  const [employeeId, setEmployeeId] = useState(''); // Updated state variable name
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      console.log('Sending data:', { employeeId, password });
      const res = await axios.post('/LoginRoute', { employeeId, password });
      const { role, employeeId: loggedInEmployeeId } = res.data;

      // Store the employee information in localStorage or a global state management solution
      localStorage.setItem('employeeInfo', JSON.stringify({ role, employeeId: loggedInEmployeeId }));

      // Redirect to /home after successful login
      router.push('/Home');
    } catch (error) {
      console.error('Error signing in:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <div className="text-black-500 font-bold text-center py-3 rounded-t-lg">
          <h2 className="text-lg font-bold">Login</h2>
        </div>
        <form className="mt-4" onSubmit={handleSignIn}>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="employee-id">
              Employee ID
            </label>
            <input
              type="text"
              id="employee-id"
              value={employeeId} // Updated state variable reference
              onChange={(e) => setEmployeeId(e.target.value)} // Updated state variable reference
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Employee ID"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Password"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
            <Link href='/Registration'
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Register
            </Link>
          </div>
        </form>
        <div className="text-center mt-4">
          <Link href="/forgotPassword"
          className="text-blue-500 hover:underline">
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;