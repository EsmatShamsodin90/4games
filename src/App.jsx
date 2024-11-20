import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Game1 from "./pages/Game1";
import Game2 from "./pages/Game2";
import Game3 from "./pages/Game3";
import Game4 from "./pages/Game4";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game1" element={<Game1.jsx />} />
        <Route path="/game2" element={<Game2.jsx />} />
        <Route path="/game3" element={<Game3.jsx />} />
        <Route path="/game4" element={<Game4.jsx />} />
      </Routes>
    </Router>
  );
}

export default App;
