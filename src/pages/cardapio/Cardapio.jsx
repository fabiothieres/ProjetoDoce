import { Link } from "react-router-dom";
import s from "./cardapio.module.scss";
import bolo from "../../assets/bolo.jpg";
import miniB from "../../assets/miniBrownie.png";
import brownie from "../../assets/brownie.png";
import ovo from "../../assets/ovo.png";
import copo from "../../assets/copo.png";

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
          <img src={brownie} alt="Imagem de brownie" />
          <div className={s.textoCards}>
            <h3>Brownies Artesanais</h3>
            <p>Brownies decorados com coberturas especiais</p>
          </div>
          <div className={s.boxPrecoLink}>
            <p>A partir de R$6,50</p>
            <a href="https://wa.me/5548998673404?text=Ol%C3%A1%2C%20gostaria%20de%20encomendar%20um%20brownie.%F0%9F%98%8A">Encomendar</a>
          </div>
        </article>

        <article>
          <img src={bolo} alt="Imagem de bolo" />
          <div className={s.textoCards}>
            <h3>Bolos Decorados</h3>
            <p>Bolos personalizados para momentos importantes</p>
          </div>
          <div className={s.boxPrecoLink}>
            <p>Consulte valores</p>
            <a href="https://wa.me/5548998673404?text=Ol%C3%A1%2C%20gostaria%20de%20encomendar%20um%20bolo.%F0%9F%98%8A">Encomendar</a>
          </div>
        </article>

        <article>
          <img src={miniB} alt="Mini brownie" />
          <div className={s.textoCards}>
            <h3>Mini Brownie</h3>
            <p>Mini brownies personalizados para adoçar a vida</p>
          </div>
          <div className={s.boxPrecoLink}>
            <p>A partir de R$1,50</p>
            <a href="https://wa.me/5548998673404?text=Ol%C3%A1%2C%20gostaria%20de%20encomendar%20um%20mini%20brownie.%F0%9F%98%8A">Encomendar</a>
          </div>
        </article>

        <article>
          <img src={ovo} alt="Ovo de páscoa" />
          <div className={s.textoCards}>
            <h3>Ovo de Páscoa</h3>
            <p>Ovos de páscoa para alegrar a sua páscoa</p>
          </div>
          <div className={s.boxPrecoLink}>
            <p>Consulte valores</p>
            <a href="https://wa.me/5548998673404?text=Ol%C3%A1%2C%20gostaria%20de%20encomendar%20um%20ovo%20de%20p%C3%A1scoa.%F0%9F%98%81">Encomendar</a>
          </div>
        </article>

        <article>
          <img src={copo} alt="Copo da felicidade" />
          <div className={s.textoCards}>
            <h3>Copo da Felicidade</h3>
            <p>Copo da felicidade para tornar seu dia mais feliz</p>
          </div>
          <div className={s.boxPrecoLink}>
            <p>A partir de R$17,90</p>
            <a href="https://wa.me/5548998673404?text=Ol%C3%A1%2C%20gostaria%20de%20encomendar%20um%20copo%20da%20felicidade.%F0%9F%98%81">Encomendar</a>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Cardapio;
