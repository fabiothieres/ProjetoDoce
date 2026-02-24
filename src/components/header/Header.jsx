import { Link } from "react-router-dom";
import s from "./Header.module.scss";
import Logo from "../../assets/logo.jpg";
import { useState } from "react";

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  }

  return (
    <header className={s.header}>
      <Link to="/" className={s.BoxLogo}>
        <img src={Logo} alt="Logo doceria" />
        <h1>Doceria Floripa</h1>
      </Link>

      <div className={s.hamburger} onClick={alternarMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`${s.nav} ${menuAberto ? s.active : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={'fecharMenu'}>Home</Link>
          </li>
          <li>
            <Link to="/Cardapio" onClick={'fecharMenu'}>Cardápio</Link>
          </li>
          <li>
            <Link to="/Contato" onClick={'fecharMenu'}>Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
