import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Events from "../components/Events";
import Resources from "../components/Resources";
import Publications from "../components/Publications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Events />
        <Resources />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
