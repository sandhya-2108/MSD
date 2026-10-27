import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import HOD from "./components/HOD";
import Programs from "./components/Programs";
import Faculty from "./components/Faculty";
import Facilities from "./components/Facilities";
import Activities from "./components/Activities";
import Achievements from "./components/Achievements";
import Gallery from "./components/Gallery";
import Downloads from "./components/Downloads";
import Placements from "./components/Placements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  return (
    <>

      <Header />

      <Navbar />

      <main>

        <Hero />

        <About />

        <HOD />

        <Programs />

        <Faculty />

        <Facilities />

        <Activities />

        <Achievements />

        <Gallery />

        <Downloads />

        <Placements />

        <Contact />

      </main>

      <Footer />

    </>
  );
}

export default App;