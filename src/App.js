import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import ContactUS from "./Components/ContactUS";
import Footer from "./Components/Footer";
import Jobs from "./Components/Jobs";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import HomeContainer from "./Container/HomeContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contactus" element={<ContactUS />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
