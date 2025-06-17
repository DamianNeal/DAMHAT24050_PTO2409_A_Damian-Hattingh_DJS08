import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VanDetail />} />
      </Route>
    </Routes>
  );
}
