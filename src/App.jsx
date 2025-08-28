import Header from "./components/Header.jsx";
import MainScreen from "./screens/MainScreen.jsx";
import FanerProfile from "./screens/faner_screen/FanerProfile.jsx";
import DemoProfile from "./screens/DemoProfile.jsx";
import ChioProfile from "./screens/chio_screen/ChioProfile.jsx";
import IpongProfile from "./screens/ipong_screen/IpongProfile.jsx";
import WenceslaoProfile from "./screens/wenceslao_screen/WenceslaoProfile";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/GRYZOR" element={<MainScreen />} />
        <Route path="/GRYZOR/profile/faner" element={<FanerProfile />} />
        <Route path="/GRYZOR/profile/demo" element={<DemoProfile />} />
        <Route path="/GRYZOR/profile/chio" element={<ChioProfile />} />
        <Route path="/GRYZOR/profile/ipong" element={<IpongProfile />} />
        <Route
          path="/GRYZOR/profile/wenceslao"
          element={<WenceslaoProfile />}
        />
      </Routes>
    </Router>
  );
}

export default App;
