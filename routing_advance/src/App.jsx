import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./nav_components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Mens from "./components/Mens";
import Women from "./components/Women";
import Course from "./components/Course";
import CourseDetails from "./components/CourseDetails";

function App() {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:courseId" element={<CourseDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Mens />} />
          <Route path="women" element={<Women />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
