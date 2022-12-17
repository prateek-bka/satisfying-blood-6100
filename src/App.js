import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import HomeContainer from "./Container/HomeContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<HomeContainer />}></Route>
        {/* <Route path="" element={}>Jobs</Route>
        <Route path="" element={}>Companies</Route>
        <Route path="" element={}>Services</Route>
        <Route path="" element={}>Login</Route>
        <Route path="" element={}>Signup</Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
