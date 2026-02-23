import { Link } from "react-router-dom";
import s from "./Header.module.scss"
import Logo from "../../assets/logo.jpg";
import {useState} from 'react';

const Header = () => {

  const [aberto, setAberto] = useState(false);
  const toggleMenu = () => setAberto(!aberto);

  return (
    <header className={s.header}>
      <Link to="/" className={s.BoxLogo}>
        <img src={Logo} alt="Logo doceria" />
        <h1>Doceria Floripa</h1>
      </Link>

      <button className={s.hamburguer} onClick={toggleMenu}>
        {aberto ? "✕" : "☰" }
      </button>

      <nav className={`${s.nav} ${aberto ? s.ativo : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Cardapio">Cardápio</Link>
          </li>
          <li>
            <Link to="/Contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
