import Hero from "./sections/Hero";
import NavBar from "./components/NavBar";
import About from "./sections/About";
import Stats from "./sections/Stats";
import Programs from "./sections/Programs";
import Gallery from "./sections/Gallery";
import UpcomingEvents from "./sections/UpcomingEvents";
import AdmissionProcess from "./sections/AdmissionProcess";
import Footer from "./sections/Footer";
import BeyondClassroom from "./sections/BeyondClassroom";
import ApplicationForm from "./sections/ApplicationForm";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Stats />
      <Programs />
      <BeyondClassroom />
      <Gallery />
      <UpcomingEvents />
      <AdmissionProcess />
      <ApplicationForm />
      <Footer />
    </div>
  );
}

export default App;
