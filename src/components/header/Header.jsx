import { Link } from "react-router-dom";
import s from "./Header.module.scss"
import Logo from "../../assets/logo.jpg";

const Header = () => {
  return (
    <header className={s.header}>
      <Link to="/" className={s.BoxLogo}>
        <img src={Logo} alt="Logo doceria" />
        <h1>Doceria Floripa</h1>
      </Link>

      <nav>
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
