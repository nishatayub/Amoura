import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:4000/api/protected-route", {
            method: "GET",
            credentials: "include", // 🔥 Sends cookies with request
        })
        .then(response => {
            if (!response.ok) {
                navigate("/login"); // 🔥 Redirect if unauthorized
            }
        })
        .catch(() => navigate("/login"));
    }, [navigate]);

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Welcome, User!</p>
        </div>
    );
};

export default Dashboard;
