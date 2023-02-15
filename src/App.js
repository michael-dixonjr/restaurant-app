import './App.css';
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import SpecialSection from './components/SpecialSection';
import Testimonials from './components/Testimonials';
import AboutSection from './components/AboutSection';
import FooterNav from './components/FooterNav';

function App() {
  return (
    <>
      <Nav/>
      <HeroSection/>
      <SpecialSection/>
      <Testimonials/>
      <AboutSection/>
      <FooterNav/>
    </>
  );
}

export default App;
