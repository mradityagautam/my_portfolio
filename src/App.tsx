import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <div id="work">
        <FeaturedWork />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
