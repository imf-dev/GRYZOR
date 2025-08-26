import Header from "./components/Header.jsx";
import MainScreen from "./screens/MainScreen.jsx";
import FanerProfile from "./screens/FanerProfile.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/GRYZOR" element={<MainScreen />} />
        <Route path="/GRYZOR/profile/faner" element={<FanerProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
