import { toast } from 'react-toastify';
import * as S from "./card.module.scss";

export const Card = ({ image, alt, title, text, span, button }) => {
  
  // Função que dispara o alerta
  const notify = () => {
    toast.success("Inscrito com sucesso!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  }

  return (
    <article className={S.card}>
      <div className={S.card__image}>
        <img src={image} alt={alt} />
      </div>
      <h2 className={S.card__title}>{title}</h2>
      <p className={S.card__text}>{text}</p>
      <span className={S.card__text}>{span}</span>

      <button className={S.card__button} onClick={notify}>
        {button}
      </button>
    </article>
  );
}