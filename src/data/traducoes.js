
const traducoes = {
  pt: {
    menu: {
      sobre: 'Sobre Mim',
      projetos: 'Projetos',
      experiencias: 'Experiências',
      contato: 'Contato',
    },

    sobre: {
      titulo: 'Sobre Mim',
      paragrafo:
        'Eu sou Pedro, tenho 18 anos, moro em Belo Horizonte - MG, torço para o Atlético Mineiro e me interesso bastante pela área da tecnologia. Tenho muita curiosidade em sempre aprender mais e descobrir novidades desse meio que só cresce. Sou uma pessoa colaborativa, paciente e sincera. No lazer, gosto de jogar video games, assistir e jogar futebol (principalmente o Galo) e escutar muita música.',
    },

    projetos: {
      titulo: 'Projetos',
      verGithub: 'Ver no GitHub',
      textoAlternativo: 'Tela do projeto',
      lista: [
        {
          descricao:
            'Sistema de criação de estágios para auxiliar empresas que desejam contratar estagiários e para auxiliar estudantes que procuram por estágios. Projeto destaque da disciplina Trabalho Interdisciplinar da turma 2026/2 do 1º período.',
        },
        {
          descricao:
            'Atividade dada em sala. Site criado para mostrar locais mais visitados no mundo.',
        },
        {
          descricao:
            'Sistema de avaliação de músicas, cantores e álbuns. Utiliza API do Spotify para puxar os dados de artistas, músicas e álbuns e para conectar a conta do usuário. Criado para fins pessoais e feito com auxílio de inteligência artificial.',
        },
      ],
    },

    experiencias: {
      titulo: 'Experiências',
      lista: [
        {
          cargo: 'Aluno do curso técnico de Informática para Internet no Senai',
          descricao:
            'Formação técnica com foco em entender como funcionam sistemas e no desenvolvimento de projetos práticos.',
        },
        {
          cargo: 'Desenvolvedor',
          descricao:
            'Desenvolvimento de um projeto de uso próprio para atender a uma demanda pessoal.',
        },
        {
          cargo: 'Estudante de Engenharia de Software',
          descricao:
            'Desenvolvimento de projetos inicialmente em HTML, CSS e JavaScript, avançando para projetos em React + Vite e Java.',
        },
      ],
    },

    contato: {
      titulo: 'Contatos',
      nome: 'Nome',
      email: 'E-mail',
      mensagem: 'Mensagem',
      enviar: 'Enviar',
      sucesso: 'Mensagem enviada com sucesso!',
      erroEnvio: 'Não foi possível enviar. Tente novamente.',
      erros: {
        nome: 'Digite seu nome.',
        emailVazio: 'Digite seu e-mail.',
        emailInvalido: 'E-mail inválido.',
        mensagem:
          'A mensagem precisa ter pelo menos 10 caracteres.',
      },
    },

    rodape: {
      direitos: 'Pedro Arthur © 2026',
    },
  },

  en: {
    menu: {
      sobre: 'About Me',
      projetos: 'Projects',
      experiencias: 'Experience',
      contato: 'Contact',
    },

    sobre: {
      titulo: 'About Me',
      paragrafo:
        "I'm Pedro, I'm 18 years old, I live in Belo Horizonte, MG, Brazil, and I support Atlético Mineiro. I'm very interested in technology and always curious to learn more and discover new things in a field that keeps growing. I'm a collaborative, patient and honest person. In my free time, I enjoy playing video games, watching and playing football (especially Galo) and listening to lots of music.",
    },

    projetos: {
      titulo: 'Projects',
      verGithub: 'View on GitHub',
      textoAlternativo: 'Project screenshot',
      lista: [
        {
          descricao:
            'An internship platform designed to help companies looking to hire interns and students searching for internship opportunities. Featured project in the Interdisciplinary Project course for the 2026/2 first-semester class.',
        },
        {
          descricao:
            'A classroom assignment. A website created to showcase the most visited places in the world.',
        },
        {
          descricao:
            'A system for rating songs, singers and albums. It uses the Spotify API to retrieve artist, song and album data and connect the user account. Created for personal use with the assistance of artificial intelligence.',
        },
      ],
    },

    experiencias: {
      titulo: 'Experience',
      lista: [
        {
          cargo: 'Internet Computing Technical Course Student at SENAI',
          descricao:
            'Technical education focused on understanding how systems work and developing practical projects.',
        },
        {
          cargo: 'Developer',
          descricao:
            'Development of a personal project to meet a personal need.',
        },
        {
          cargo: 'Software Engineering Student',
          descricao:
            'Development of projects initially using HTML, CSS and JavaScript, progressing to projects with React + Vite and Java.',
        },
      ],
    },

    contato: {
      titulo: 'Contact',
      nome: 'Name',
      email: 'Email',
      mensagem: 'Message',
      enviar: 'Send',
      sucesso: 'Message sent successfully!',
      erroEnvio: 'Could not send. Please try again.',
      erros: {
        nome: 'Please enter your name.',
        emailVazio: 'Please enter your email.',
        emailInvalido: 'Invalid email address.',
        mensagem:
          'Your message must contain at least 10 characters.',
      },
    },

    rodape: {
      direitos: 'Pedro Arthur © 2026',
    },
  },
};

export default traducoes;
