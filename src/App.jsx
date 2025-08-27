import Header from "./components/Header.jsx";
import MainScreen from "./screens/MainScreen.jsx";
import FanerProfile from "./screens/faner_screen/FanerProfile.jsx";
import DemoProfile from "./screens/DemoProfile.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/GRYZOR" element={<MainScreen />} />
        <Route path="/GRYZOR/profile/faner" element={<FanerProfile />} />
        <Route path="/GRYZOR/profile/demo" element={<DemoProfile />} />{" "}
        {/* 👈 add route */}
      </Routes>
    </Router>
  );
}

export default App;
