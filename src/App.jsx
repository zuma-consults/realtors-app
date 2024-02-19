import { Route, Routes } from "react-router-dom";
import Home from './pages/home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/property-list" element={<Home />} />
      <Route path="/contact" element={<Home />} />
      <Route path="/add-property" element={<Home />} />
    </Routes>
  );
}

export default App;
