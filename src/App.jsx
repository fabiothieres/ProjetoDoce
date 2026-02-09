import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import "./globalStyle.scss";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Cardapio from "./pages/cardapio/Cardapio";
import Contato from "./pages/contato/Contato";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Cardapio" element={<Cardapio />} />
          <Route path="/Contato" element={<Contato />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
