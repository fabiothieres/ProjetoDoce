import s from "./contato.module.scss";
import { useState } from "react";

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
          <input name="nome" type="text" onChange={handleChange} required placeholder="Seu nome" />

          <label>Seu Whatsapp (com DDD)</label>

          <input name="telefoneCliente" type="tel" onChange={handleChange} required placeholder="(00) 90000-0000" />

          <label>Mensagem</label>
          <textarea name="mensagem" className={s.caixaMensagem} onChange={handleChange} placeholder="Seu pedido ou sua dúvida..." required></textarea>
          <button type="submit">Enviar Mensagem</button>
        </form>
      </section>
    </main>
  );
}

export default Contato;
