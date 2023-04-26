import { BrowserRouter } from "react-router-dom";

import AnimatedRoutes from "./static/AnimatedRoutes/AnimatedRoutes";
import Header from "./static/Header/Header";
import MobileMenu from "./static/MobileMenu/MobileMenu";
import Footer from "./static/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AnimatedRoutes />
      <Footer />
      <MobileMenu />
    </BrowserRouter>
  );
}

export default App;
