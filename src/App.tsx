import Navbar from "./components/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import ServiceAlbum from "./pages/ServiceAlbum";
import Footer from "./components/Footer";


function App() {
  return (
    <div className=" overflow-y-scroll no-scrollbar">
      <Navbar />
      <main className="flex-grow ">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services/:serviceType" element={<ServiceAlbum />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}


export default App;
