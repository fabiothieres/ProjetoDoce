import { Link } from "react-router-dom";
import s from "./cardapio.module.scss";
import teste from "../../assets/brownie.JPG";
import bolo from "../../assets/bolo.jpg";
import miniB from "../../assets/miniBrownie.png";

function Cardapio() {
  return (
    <main className={s.mainCardapio}>
      <div className={s.textoCardapio}>
        <h1>Nosso Cardápio</h1>
        <p>
          Delícias artesanais feitas com ingredientes selecionados e muito
          carinho
        </p>
      </div>

      <section className={s.containerCards}>
        <article>
          <img src={teste} alt="teste imagem" />
          <div className={s.textoCards}>
            <h3>Brownies Artesanais</h3>
            <p>Brownies decorados com coberturas especiais</p>
          </div>
          <div className={s.boxPrecoLink}>
            <p>A partir de R$10</p>
            <a href="https://wa.me/5548998673404?text=Ol%C3%A1%2C%20gostaria%20de%20encomendar%20um%20brownie.%F0%9F%98%8A">Encomendar</a>
          </div>
        </article>

        <article>
          <img src={bolo} alt="teste imagem" />
          <div className={s.textoCards}>
            <h3>Bolos Decorados</h3>
            <p>Bolos personalizados para ocasiões especiais</p>
          </div>
          <div className={s.boxPrecoLink}>
            <p>A partir de R$80</p>
            <a href="https://wa.me/5548998673404?text=Ol%C3%A1%2C%20gostaria%20de%20encomendar%20um%20bolo.%F0%9F%98%8A">Encomendar</a>
          </div>
        </article>

        <article>
          <img src={miniB} alt="teste imagem" />
          <div className={s.textoCards}>
            <h3>Mini Brownie</h3>
            <p>Mini brownies personalizados para adoçar a vida</p>
          </div>
          <div className={s.boxPrecoLink}>
            <p>A partir de R$1,50</p>
            <a href="https://wa.me/5548998673404?text=Ol%C3%A1%2C%20gostaria%20de%20encomendar%20um%20mini%20brownie.%F0%9F%98%8A">Encomendar</a>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Cardapio;
