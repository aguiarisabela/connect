import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import * as S from "./header.module.scss";
import { useEffect, useState } from "react";

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className={S.Header}>
        <Link to={"/"}>
          <img className={S.imgLogo} src={Logo} alt="Logo" />
        </Link>

        {!isMobile && (
          <nav className={S.Nav}>
            <Link className={S.Link} to={"/doacao"}>
              Doação
            </Link>
            <Link className={S.Link} to={"/voluntariado"}>
              Voluntariado
            </Link>
            <Link className={S.Link} to={"/mentoria"}>
              Mentoria
            </Link>
            <Link className={S.Link} to={"/eventos"}>
              Eventos
            </Link>
          </nav>
        )}

        <img
          className={S.imgUser}
          src="https://media.licdn.com/dms/image/v2/D4E03AQHPIlJ-Iuk90Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727277901670?e=1772064000&v=beta&t=32Ztazrd7gNRivmnewayIZNTMjwcUnxHQUBHGS975qk"
          alt="Imagem de perfil do usuário"
          onClick={() => setMenuAberto(!menuAberto)}
        />
      </header>

      <nav className={menuAberto ? S.navUser : S.closedNavUser}>
        <div>
          <Link
            className={S.linkNome}
            to={"/usuario"}
            onClick={() => setMenuAberto(false)}
          >
            Isabela Aguiar
          </Link>
        </div>
        <div>
          <Link onClick={() => setMenuAberto(false)}>Meu voluntariado</Link>
        </div>
        <div>
          <Link onClick={() => setMenuAberto(false)}>
            Configurações da Conta
          </Link>
        </div>

        {isMobile && (
          <div>
            <div>
              <Link to={"/doacao"}>Doação</Link>
            </div>
            <div>
              <Link to={"/voluntariado"}>Voluntariado</Link>
            </div>
            <div>
              <Link to={"/mentoria"}>Mentoria</Link>
            </div>
            <div>
              <Link to={"/eventos"}>Eventos</Link>
            </div>
          </div>
        )}
        <div>
          <Link onClick={() => setMenuAberto(false)}>Sair</Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
