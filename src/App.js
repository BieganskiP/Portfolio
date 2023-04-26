import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Projects from "./pages/Projects/Projects";

import Header from "./static/Header/Header";
import MobileMenu from "./static/MobileMenu/MobileMenu";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<HomePage />} path="/"></Route>
        <Route element={<About />} path="/about"></Route>
        <Route element={<Contacts />} path="/contacts"></Route>
        <Route element={<Projects />} path="/projects"></Route>
      </Routes>
      <MobileMenu />
    </BrowserRouter>
  );
}

export default App;
