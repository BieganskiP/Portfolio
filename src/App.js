import { BrowserRouter } from "react-router-dom";

import AnimatedRoutes from "./static/AnimatedRoutes/AnimatedRoutes";
import Header from "./static/Header/Header";
import MobileMenu from "./static/MobileMenu/MobileMenu";

import DecorationNav from "./components/DecorationNav/DecorationNav";
import Social from "./components/Social/Social";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AnimatedRoutes />
      <MobileMenu />
      <DecorationNav />
      <Social />
    </BrowserRouter>
  );
}

export default App;
