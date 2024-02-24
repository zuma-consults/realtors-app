import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import PropertyList from "./pages/property-list";
import Contact from "./pages/contact";
import AOS from "aos";
import "aos/dist/aos.css";
import Single from "./pages/single-page";

function App() {
  AOS.init();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/property-list" element={<PropertyList />} />
      <Route path="/property-list/:id" element={<Single />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/add-property" element={<Home />} />
    </Routes>
  );
}

export default App;
