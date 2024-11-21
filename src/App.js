import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { ContactUs } from "./pages/ContactUs";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import './style/style.css'
import { About } from "./pages/About";
import { WhatDoWeDo } from "./pages/WhatDoWeDo";
import { Portfolio } from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/whatdowedo" element={<WhatDoWeDo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
