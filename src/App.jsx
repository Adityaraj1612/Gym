/* eslint-disable no-irregular-whitespace */
// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // ✅ correct import for your homepage
import TrainerPage from "./pages/TrainerDetail"; // or wherever you placed this

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainer/:id" element={<TrainerPage />} />

      </Routes>
    </Router>
  );
}

export default App;
