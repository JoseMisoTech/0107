import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;