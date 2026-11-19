
function Header({ t, secaoAtiva }) {
  return (
    <header>
      <nav>
        <a
          href="#sobre"
          className={secaoAtiva === 'sobre' ? 'ativo' : ''}
          aria-current={secaoAtiva === 'sobre' ? 'location' : undefined}
        >
          {t.menu.sobre}
        </a>

        <a
          href="#projetos"
          className={secaoAtiva === 'projetos' ? 'ativo' : ''}
          aria-current={secaoAtiva === 'projetos' ? 'location' : undefined}
        >
          {t.menu.projetos}
        </a>

        <a
          href="#experiencias"
          className={secaoAtiva === 'experiencias' ? 'ativo' : ''}
          aria-current={secaoAtiva === 'experiencias' ? 'location' : undefined}
        >
          {t.menu.experiencias}
        </a>

        <a
          href="#contato"
          className={secaoAtiva === 'contato' ? 'ativo' : ''}
          aria-current={secaoAtiva === 'contato' ? 'location' : undefined}
        >
          {t.menu.contato}
        </a>
      </nav>
    </header>
  );
}

export default Header;
