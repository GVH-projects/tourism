import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/userAuthContext";
import "./styles/App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";

import Bisnis from "./pages/Destination/Bisnis";
import Petualangan from "./pages/Destination/Petualangan";
import Santai from "./pages/Destination/Santai";
import FooterBar from "./components/FooterBar";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bisnis" element={<Bisnis />} />
        <Route path="/petualangan" element={<Petualangan />} />
        <Route path="/santai" element={<Santai />} />
      </Routes>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </UserAuthContextProvider>
      <FooterBar />
    </>
  );
}

export default App;
