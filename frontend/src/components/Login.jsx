import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEmail } from "../store/userActions"; // Import action

const Login = () => {
  const [email, setEmailInput] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch(); // Redux dispatch
  const navigate = useNavigate(); // Router navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:4000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        alert("Login Successful!");
        
        dispatch(setEmail(email));  // ✅ Store email in Redux

        navigate("/");  // ✅ Redirect to Dashboard
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-100">
      <form onSubmit={handleSubmit} className="bg-yellow-100 p-10 rounded-lg shadow-2xl w-96">
        <h2 className="text-4xl font-extrabold mb-8 text-center">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="mb-6">
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmailInput(e.target.value)}
            required
            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-8">
          <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button type="submit" className="w-full py-3 text-lg text-black bg-blue-200 rounded-lg hover:bg-blue-300">
          Login
        </button>
        <div className="text-center mt-4">
          <Link to="/signup" className="text-blue-500 hover:underline">
            Don&apos;t have an account? Sign up here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
