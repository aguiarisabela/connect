import { IoLocationSharp, IoMail } from "react-icons/io5";
import { MdCalendarMonth } from "react-icons/md";
import * as S from "./user.module.scss";


const User = () => {
  return (
    <main>
      <section className={S.usuario}>
        <div className={S.usuarioImage}>
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQHPIlJ-Iuk90Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727277901670?e=1772064000&v=beta&t=32Ztazrd7gNRivmnewayIZNTMjwcUnxHQUBHGS975qk"
            alt="Imagem do usuário"
          />
        </div>
        <div className={S.usuario__content}>
          <div className={S.usuario__header}>
            <h3 className={S.usuario__name}>Isabela Aguiar</h3>
            <p className={S.usuario__function}>Voluntária Ativa</p>
          </div>

          <p className={S.usuarioBio}>
            Apaixonada por fazer a diferença na comunidade. Acredito que
            pequenas ações podem transformar vidas e estou sempre em busca de
            novas oportunidades para ajudar.
          </p>

          <ul className={S.infoList}>

            <li className={S.infoList__infoLocal}>
              <IoLocationSharp /> Governador Valadares - Minas Gerais
            </li>
            <li className={S.infoList__infoEmail}>
              <IoMail /> aaguiarisabela@gmail.com
            </li>
            <li className={S.infoList__infoDate}>
              <MdCalendarMonth /> Membro desde Fevereiro de 2026
            </li>
          </ul>
          <ul className={S.usuario__tagList}>
            <li className={S.usuario__tagList_item}>Educação</li>
            <li className={S.usuario__tagList_item}>Meio Ambiente</li>
            <li className={S.usuario__tagList_item}>Assistencia Social</li>
            <li className={S.usuario__tagList_item}>Design</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default User;
