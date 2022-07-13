import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Pizza from "./pages/Pizza";
import Vegan from "./pages/Vegan";
import Pizzeppa from "./pages/Pizzeppa";
import Salads from "./pages/Salads";
import Desserts from "./pages/Desserts";
import Drinks from "./pages/Drinks";
import Extras from "./pages/Extras";
import Creator from "./pages/Creator";
import Login from "./pages/Login";

// Styles
import { Container } from "react-bootstrap";

// Components
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/vegan" element={<Vegan />} />
          <Route path="/pizzeppa" element={<Pizzeppa />} />
          <Route path="/salads" element={<Salads />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/extras" element={<Extras />} />
          <Route path="/creator" element={<Creator />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
