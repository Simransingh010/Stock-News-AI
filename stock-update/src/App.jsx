import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/cta";
import FAQ from "./components/faq";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <CTA />
      <FAQ />
      <Footer />
    </Router>
  );
}

export default App;
