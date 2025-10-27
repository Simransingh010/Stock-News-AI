import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import CTA from "./components/CTA/cta";
import FAQ from "./components/FAQ/faq";
import Footer from "./components/Footer/Footer";

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
