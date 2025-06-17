import { useParams } from "react-router-dom";

export default function VanDetail() {
  const { id } = useParams();

  return <h3>Details for Van ID: {id}</h3>;
}
