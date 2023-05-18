import { BrowserRouter } from "react-router-dom";

import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
import Header from "./components/Header/Header";
import MobileMenu from "./components/MobileMenu/MobileMenu";

import DecorationNav from "./components/DecorationNav/DecorationNav";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AnimatedRoutes />
      <MobileMenu />
      <DecorationNav />
    </BrowserRouter>
  );
}
