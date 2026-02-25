import s from "./contato.module.scss";
import { useState } from "react";
import { FiPhone, FiMail, FiInstagram } from "react-icons/fi";
import { PiTiktokLogoLight  } from "react-icons/pi";

function Contato() {
  const [dados, setDados] = useState({
    nome: "",
    telefoneCliente: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const abrirWhatsapp = (e) => {
    e.preventDefault();

    const meuNumero = "5548998673404";

    const texto = `Olá! Meu nome é *${dados.nome}*.\nMeu contato: ${dados.telefoneCliente}\n\n*Mensagem:* ${dados.mensagem}`;

    const linkFinal = `https://wa.me/${meuNumero}?text=${encodeURIComponent(texto)}`;

    window.open(linkFinal, "_blank");
  };

  return (
    <main className={s.mainContato}>
      <h1>Entre em Contato</h1>
      <p>
        Faça sua encomenda pelo WhatsApp, ou tire suas dúvidas. Estamos aqui
        para adoçar seu dia!
      </p>
      <section className={s.containerInfo}>
        <form className={s.formContato} onSubmit={abrirWhatsapp}>
          <label>Nome</label>
          <input
            name="nome"
            type="text"
            onChange={handleChange}
            required
            placeholder="Seu nome"
          />

          <label>Seu Whatsapp (com DDD)</label>

          <input
            name="telefoneCliente"
            type="tel"
            onChange={handleChange}
            required
            placeholder="(00) 90000-0000"
          />

          <label>Mensagem</label>
          <textarea
            name="mensagem"
            className={s.caixaMensagem}
            onChange={handleChange}
            placeholder="Seu pedido ou sua dúvida..."
            required
          ></textarea>
          <button type="submit">Enviar Mensagem</button>
        </form>

        <section className={s.containerCards}>
          <article>
            <h2>Informações</h2>
            <div className={s.item}>
              <div className={s.circulo}>
                <FiPhone />
              </div>
              <div className={s.infoContato}>
                <h3>Telefone</h3>
                <p>+55 (48) 99867-3404</p>
              </div>
            </div>

            <div className={s.item}>
              <div className={s.circulo}>
                <FiMail />
              </div>
              <div className={s.infoContato}>
                <h3>Email</h3>
                <p>floripadoceria@gmail.com</p>
              </div>
            </div>
          </article>

          <article className={s.redes}>
            <h2>Redes Sociais</h2>
            <p>Siga-nos nas redes sociais e fique por dentro das novidades!</p>
            <div className={s.boxIcons}>
              <div className={s.bgIcons}>
                <a href="https://www.instagram.com/doceria.floripa/" target="_blank">
                  <FiInstagram />
                </a>
              </div>
              <div className={s.bgIcons}>
                <a href="mailto:floripadoceria@gmail.com" target="_blank">
                  <FiMail />
                </a>
              </div>
              <div className={s.bgIcons}>
                <a href="https://www.tiktok.com/@doceria.floripa" target="_blank">
                  <PiTiktokLogoLight className={s.iconTikTok}/>
                </a>
              </div>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}

export default Contato;
