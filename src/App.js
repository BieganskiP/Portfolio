import { BrowserRouter } from "react-router-dom";

import AnimatedRoutes from "./static/AnimatedRoutes/AnimatedRoutes";
import Header from "./static/Header/Header";
import MobileMenu from "./static/MobileMenu/MobileMenu";
import Footer from "./static/Footer/Footer";

import DecorationNav from "./components/DecorationNav/DecorationNav";

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Header />
      <AnimatedRoutes />
      <Footer />
      <MobileMenu />
      <DecorationNav />
    </BrowserRouter>
  );
}

export default App;
