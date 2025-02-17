
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Homepage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path = "/" element= {<Homepage/>} />
      </Routes>
    </Router>
  );
}

export default App;
