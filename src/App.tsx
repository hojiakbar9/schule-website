import Card from "./components/Card";
import Hero from "./sections/Hero";
import Links from "./components/Link";
import NavBar from "./components/NavBar";
import TextBox from "./components/TextBox";
import About from "./sections/About";
import Stats from "./sections/Stats";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Stats />
    </div>
  );
}

export default App;
