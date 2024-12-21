import Navbar from "./components/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import { InViewImagesGrid } from "./pages/Gallery";
import { FeaturesSectionDemo } from "./pages/ServiceCard";
import Wedding from "./pages/Wedding";
import Potrait from "./pages/Potrait";
import Fashion from "./pages/Fashion";
import ContactUsSection from "./pages/Contact";


function App() {
  return (
    <div className=" overflow-y-scroll no-scrollbar">
      <Navbar />
      <main className="flex-grow ">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services/wedding" element={<Wedding />} />
          <Route path="/services/portrait" element={<Potrait/>} />
          <Route path="/services/fashion" element={<Fashion/>} />
          <Route path="/gallery" element={<InViewImagesGrid />} />
          <Route path="/services" element={<FeaturesSectionDemo/>}/>
          <Route path="/contact" element={<ContactUsSection/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}


export default App;
