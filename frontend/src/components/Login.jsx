import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        e.target = "";
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-pink-100">
            <form className="bg-white p-6 rounded shadow-md w-full max-w-sm" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4 text-center text-pink-700">Login</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-pink-700">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-pink-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-pink-700">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-pink-300"
                    />
                </div>
                <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600">Login</button>
            </form>
        </div>
    );
};

export default Login;