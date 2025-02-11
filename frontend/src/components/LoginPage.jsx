import { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-page bg-pink-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-pink-600">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-pink-600 mb-2">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-pink-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-pink-600 mb-2">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-pink-300 rounded"
            />
          </div>
          <button type="submit" className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
