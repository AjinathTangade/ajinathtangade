import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Allprojects from "./components/Projects/Allprojects";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allprojects" element={<Allprojects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
