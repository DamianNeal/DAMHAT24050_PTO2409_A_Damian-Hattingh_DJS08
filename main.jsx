import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

/*
  FILE: App.jsx
*/
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

/*
  FILE: pages/Layout.jsx
*/
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

/*
  FILE: components/Navbar.jsx
*/
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink> | 
      <NavLink to="/about">About</NavLink> | 
      <NavLink to="/vans">Vans</NavLink>
    </nav>
  );
}

/*
  FILE: pages/Home.jsx
*/
export default function Home() {
  return <h1>Welcome to VanLife</h1>;
}

/*
  FILE: pages/About.jsx
*/
export default function About() {
  return <h1>About Us</h1>;
}

/*
  FILE: pages/Vans.jsx
*/
import { Link } from "react-router-dom";

export default function Vans() {
  const vans = [
    { id: "1", name: "Camper Classic" },
    { id: "2", name: "Urban Cruiser" },
  ];

  return (
    <div>
      <h2>Our Vans</h2>
      <ul>
        {vans.map((van) => (
          <li key={van.id}>
            <Link to={`/vans/${van.id}`}>{van.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/*
  FILE: pages/VanDetail.jsx
*/
import { useParams } from "react-router-dom";

export default function VanDetail() {
  const { id } = useParams();

  return <h3>Details for Van ID: {id}</h3>;
}
