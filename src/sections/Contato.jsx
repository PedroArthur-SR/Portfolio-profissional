import { useState } from 'react';
import emailjs from '@emailjs/browser';
import links from '../data/contatos';

const SERVICE_ID = 'service_tc2etso';
const TEMPLATE_ID = 'template_kgn4muk';
const PUBLIC_KEY = '1yw1yeVwQhqYc_hC4';

const EMAIL_DESTINO = 'pedroarthursena95@gmail.com';

function validar(form, t) {
  const erros = {};

  if (form.nome.trim() === '') {
    erros.nome = t.contato.erros.nome;
  }

  if (form.email.trim() === '') {
    erros.email = t.contato.erros.emailVazio;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    erros.email = t.contato.erros.emailInvalido;
  }

  if (form.mensagem.trim().length < 10) {
    erros.mensagem = t.contato.erros.mensagem;
  }

  return erros;
}

function Contato({ t }) {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const [erros, setErros] = useState({});
  const [enviado, setEnviado] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setEnviado(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const errosEncontrados = validar(form, t);
    setErros(errosEncontrados);

    if (Object.keys(errosEncontrados).length > 0) {
      return;
    }

        emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY })
      .then(() => {
        setEnviado(true);
        setForm({ nome: '', email: '', mensagem: '' });
      })
      .catch((erro) => {
        console.error('Falha no envio:', erro);
        alert(t.contato.erroEnvio);
      });
  }

  return (
    <section id="contato">
      <h2>{t.contato.titulo}</h2>

      <div className="links-contato">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.nome}
            title={link.nome}
          >
            <img
              src={link.icone}
              alt=""
              width="24"
              height="24"
            />
          </a>
        ))}
      </div>

      <form
        className="form-contato"
        onSubmit={handleSubmit}
        noValidate
      >
        <label htmlFor="nome">{t.contato.nome}</label>
        <input
          id="nome"
          name="nome"
          type="text"
          value={form.nome}
          onChange={handleChange}
        />
        {erros.nome && <span className="erro">{erros.nome}</span>}

        <label htmlFor="email">{t.contato.email}</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        {erros.email && <span className="erro">{erros.email}</span>}

        <label htmlFor="mensagem">{t.contato.mensagem}</label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows="5"
          value={form.mensagem}
          onChange={handleChange}
        />
        {erros.mensagem && <span className="erro">{erros.mensagem}</span>}

        <button type="submit">{t.contato.enviar}</button>

        {enviado && (
          <p className="sucesso">{t.contato.sucesso}</p>
        )}
      </form>
    </section>
  );
}

export default Contato;