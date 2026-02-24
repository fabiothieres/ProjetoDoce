import { Link } from 'react-router-dom';
import s from "./home.module.scss";
import Banner from "../../assets/banner.jpg";

function Home() {
  return (
    <main className={s.mainHome}>
        <div className={s.textoHome}>
          <h1>Doces Artesanais</h1>
          <h2>Feitos com Amor</h2>
          <p>
            Cada doce é uma obra de arte criada especialmente para adoçar seus
            momentos mais especiais. Sabor, qualidade e carinho em cada mordida.
          </p>
          <Link to="/Cardapio" className={s.linkCardapio}>Ver Cardápio</Link>
        </div>

        <img src={Banner} alt="Imagem banner" />
    </main>
  );
}

export default Home;