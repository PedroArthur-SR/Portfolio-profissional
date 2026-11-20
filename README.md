# Portfólio Profissional | Pedro Arthur

Site de portfólio profissional com as seções **Sobre Mim**, **Projetos**, **Experiências** e **Contato**, em português e inglês, com design responsivo e formulário de contato que envia e-mail.

🔗 **Site publicado:** [https://portfolio-profissional-alpha-two.vercel.app/](https://portfolio-profissional-alpha-two.vercel.app/)

![Prévia do portfólio](src\assets\tela-portfolio.png)

## ✨ Funcionalidades

- Menu de navegação fixo com destaque da seção ativa
- Página **Sobre Mim** com alternância entre português e inglês
- **Projetos** em linha do tempo, com tecnologias, imagem e link do GitHub
- **Experiências** em cartões organizados a partir de uma lista de dados
- **Contato** com ícones clicáveis (GitHub, Instagram, Spotify, WhatsApp, e-mail e LinkedIn)
- Formulário com validação (nome, e-mail e mensagem) e envio por e-mail via EmailJS
- Layout responsivo 

## 🛠 Tecnologias utilizadas

| Tecnologia | Uso |
|---|---|
| React | Construção da interface com componentes |
| Vite | Servidor de desenvolvimento e build |
| JavaScript (ES6+) | Lógica da aplicação |
| CSS puro | Estilização e responsividade |
| EmailJS | Envio do e-mail do formulário, sem back-end |
| Vercel | Hospedagem gratuita |
| Git e GitHub | Versionamento |
| Figma | Wireframes das páginas |

## 📦 Dependências

**Produção**

| Pacote | Versão | Uso |
|---|---|---|
| `react` | X.X.X | Biblioteca de interface |
| `react-dom` | X.X.X | Renderização no navegador |
| `@emailjs/browser` | X.X.X | Envio de e-mail pelo formulário |

**Desenvolvimento**

| Pacote | Versão | Uso |
|---|---|---|
| `vite` | X.X.X | Build e servidor de desenvolvimento |
| `@vitejs/plugin-react` | X.X.X | Suporte a React no Vite |
| `eslint` | X.X.X | Análise de código |

## 📂 Estrutura de diretórios

```
Portfolio-profissional/
├── public/                  # Arquivos estáticos
├── src/
│   ├── assets/              # Imagens dos projetos
│   │   └── icons/           # Ícones (SVG) dos contatos
│   ├── components/
│   │   ├── Header.jsx       # Menu de navegação
│   │   └── Footer.jsx       # Rodapé
│   ├── data/
│   │   ├── projetos.js      # Dados dos projetos
│   │   ├── experiencias.js  # Dados das experiências
│   │   ├── contatos.js      # Links e ícones de contato
│   │   └── traducoes.js     # Textos em português e inglês
│   ├── sections/
│   │   ├── SobreMim.jsx
│   │   ├── Projetos.jsx
│   │   ├── Experiencias.jsx
│   │   └── Contato.jsx
│   ├── App.jsx              # Componente principal e controle do idioma
│   ├── main.jsx             # Ponto de entrada
│   └── index.css            # Estilos globais
├── index.html
├── package.json
└── README.md
```

## 🚀 Como executar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS)
- [Git](https://git-scm.com/)

### Passo a passo

1. Clone o repositório:

```bash
git clone https://github.com/PedroArthur-SR/Portfolio-profissional.git
cd Portfolio-profissional
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra no navegador o endereço exibido no terminal (normalmente `http://localhost:5173`).

### Formulário de contato

O envio de e-mail usa o EmailJS. Para usar a sua própria conta, edite as constantes `SERVICE_ID`, `TEMPLATE_ID` e `PUBLIC_KEY` no topo de `src/sections/Contato.jsx`.

## 🌐 Hospedagem

O site está hospedado na **Vercel**, com publicação automática a cada `push` na branch `main`.

🔗 [https://portfolio-profissional-alpha-two.vercel.app/](https://portfolio-profissional-alpha-two.vercel.app/)

## 👤 Autor

**Pedro Arthur**

- GitHub: [@PedroArthur-SR](https://github.com/PedroArthur-SR)
- LinkedIn: [Pedro Arthur](https://www.linkedin.com/in/pedro-arthur-184771387)