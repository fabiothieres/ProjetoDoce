import s from "./footer.module.scss";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.BoxLogo}>
        <img src={logo} alt="Logo doceria" />
        <h1>Doceria Floripa</h1>
      </div>
      <div className={s.BoxTexto}>
        <p>Feito com 🩷 e muito carinho!</p>
      </div>
      <p>© 2026 Doceria Floripa. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
