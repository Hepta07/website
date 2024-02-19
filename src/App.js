import "./App.css";
import Home from "./pages/Home";

import {HashRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
import Page_404 from "./pages/404";
import CeylonWedding from "./pages/case-studies/CeylonWedding";
import YarnClothing from "./pages/case-studies/YarnClothing";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule-a-call" element={<Schedule />} />
        <Route path="/case-studies/ceylon-wedding" element={<CeylonWedding />} />
        <Route path="/case-studies/yarn-clothing" element={<YarnClothing />} />
        <Route path="/*" element={<Page_404 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
