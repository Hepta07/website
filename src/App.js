import "./App.css";
import Home from "./pages/Home";

import {HashRouter, Route, Routes, BrowserRouter} from "react-router-dom";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
import Page_404 from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule-a-call" element={<Schedule />} />
        <Route path="/*" element={<Page_404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
