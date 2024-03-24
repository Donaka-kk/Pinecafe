//import Greeting from "./Components/Greeting/Greeting";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import NoPage from "./Pages/NoPage";
import Location from "./Pages/Location";

function App() {
  const [showGreeting, setShowGreeting] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowGreeting(false);
    }, "2900");
  }, []);

  return (
    <>
      {showGreeting && (
        <div className="fixed w-screen h-screen z-10 animate-fadeOutUp">
          {/* <Greeting /> */}
        </div>
      )}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/location" element={<Location />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
