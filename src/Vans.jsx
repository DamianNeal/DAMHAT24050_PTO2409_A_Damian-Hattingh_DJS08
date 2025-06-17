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
