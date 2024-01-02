import "./App.css";
import Home from "./pages/Home";

import {HashRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule-a-call" element={<Schedule />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
