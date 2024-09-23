import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from "./firebase";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Sobre from "./pages/Sobre";
import Login from "./pages/Login";
import Header from "./components/Header";
import { useEffect, useState } from "react";

export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUserLoggedIn(!!user); 
    });

    return () => unsubscribe(); 
  }, []);

  return (
    <Router>
      {userLoggedIn && <Header />}{" "}
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}
