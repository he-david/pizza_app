import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Pizza from "./pages/Pizza";

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
        </Routes>
      </Container>
    </>
  );
}

export default App;
