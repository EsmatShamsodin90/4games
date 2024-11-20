// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Game Web App</h1>
      <div>
        <Link to="/game1">Game 1</Link>
        <Link to="/game2">Game 2</Link>
        <Link to="/game3">Game 3</Link>
        <Link to="/game4">Game 4</Link>
      </div>
    </div>
  );
}
