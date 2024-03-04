import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  return (
    <>
      <div>
        <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe-item/:id" element={<Details />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
