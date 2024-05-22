import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/Header/Header.jsx";
import Footer from "./layout/Footer/Footer.jsx";
import Error from "./pages/Error/Error.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Housing from "./pages/Housing/Housing.jsx";

function AppRouter() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/OC-DW_P5_Kasa" element={<Home />} />
          <Route path="/OC-DW_P5_Kasa/a-propos" element={<About />} />
          <Route path="/OC-DW_P5_Kasa/fiche-logement/:id" element={<Housing />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default AppRouter;
