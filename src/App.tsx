import Card from "./components/Card";
import Hero from "./sections/Hero";
import Links from "./components/Link";
import NavBar from "./components/NavBar";
import TextBox from "./components/TextBox";
import About from "./sections/About";
import Stats from "./sections/Stats";
import Programs from "./sections/Programs";
import Gallery from "./sections/Gallery";
import UpcomingEvents from "./sections/UpcomingEvents";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Stats />
      <Programs />
      <Gallery />
      <UpcomingEvents />
    </div>
  );
}

export default App;
