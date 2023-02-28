import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar.jsx";
import Footer from "./footer/Footer.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Footer />

      <Routes>
        <Route path="/contact" element={<contact />}></Route>
        <Route path="/cocktails" element={<cocktails />}></Route>
        <Route path="/collections" element={<collections />}></Route>
        <Route path="/heritage" element={<heritage />}></Route>
        <Route path="/" element={<home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
