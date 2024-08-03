'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Header from '../component/Header';
import Footer from '../component/Footer';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/forgot-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center bg-white py-6 px-4">
        <div className="w-full max-w-md bg-white p-8 rounded shadow">
          <h2 className="mb-4 text-2xl font-bold text-center">Reset Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Registered Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => router.push('/')}
                className="py-2 px-4 bg-gray-400 text-white rounded hover:bg-gray-500 focus:outline-none"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
              >
                Reset Password
              </button>
            </div>
            {message && <p className="mt-4 text-center text-red-500">{message}</p>}
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ForgotPasswordScreen;
