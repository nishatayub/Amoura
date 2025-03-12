import { useSelector } from "react-redux";

const Dashboard = () => {
  const email = useSelector((state) => state.user.email);  // ✅ Get email from Redux

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {email || "Guest"}!</p>
    </div>
  );
};

export default Dashboard;
