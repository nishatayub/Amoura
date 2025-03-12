import { Link } from "react-router-dom";

const Navigation = () => {
    const userEmail = "nishatayub702@gmail.com"; // Replace with the actual user email

    return (
        <header className="bg-pink-50 py-4 px-6 md:px-12">
            <div className="container mx-auto flex justify-between items-center">
                <div className="w-40">
                    <Link to="/" className="text-3xl font-cursive text-gray-800">Zestwax</Link>
                </div>
                <nav className="hidden md:block">
                    <ul className="flex space-x-8">
                        <li>
                            <Link
                                to="/login"
                                className="text-sm tracking-wider font-medium text-gray-800 hover:text-gray-600"
                            >
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/signup"
                                className="text-sm tracking-wider font-medium text-gray-800 hover:text-gray-600"
                            >
                                Signup
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/home"
                                className="text-sm tracking-wider font-medium text-gray-800 hover:text-gray-600"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/form"
                                className="text-sm tracking-wider font-medium text-gray-800 hover:text-gray-600"
                            >
                                Product Form
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/my-products"
                                className="text-sm tracking-wider font-medium text-gray-800 hover:text-gray-600"
                            >
                                My Products
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/cart"
                                className="text-sm tracking-wider font-medium text-gray-800 hover:text-gray-600"
                            >
                                Cart
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={`/profile/${userEmail}`}
                                className="text-sm tracking-wider font-medium text-gray-800 hover:text-gray-600"
                            >
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={`/my-orders/${userEmail}`}
                                className="text-sm tracking-wider font-medium text-gray-800 hover:text-gray-600"
                            >
                                My Orders
                            </Link>
                        </li>
                    </ul>
                </nav>
                <button className="md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Navigation;
