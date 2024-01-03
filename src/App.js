import "./App.css";
import Home from "./pages/Home";

import {HashRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
import Page_404 from "./pages/404";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule-a-call" element={<Schedule />} />
        <Route path="/*" element={<Page_404 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
