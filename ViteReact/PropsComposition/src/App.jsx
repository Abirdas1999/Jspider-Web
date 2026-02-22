import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Product from "./pages/Product";
import Service from "./pages/Service";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/service" element={<Service />}>
          <Route path="profile" element={<Profile/>}/>
          <Route path="settings" element={<Settings/>}/>
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
