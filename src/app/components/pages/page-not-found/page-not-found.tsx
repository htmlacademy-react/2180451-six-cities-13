import { Link } from 'react-router-dom';
import style from './page-not-found.module.css';

export default function PageNotFound() {
  return (
    <>
      <h1 className={style.title}>Ошибка 404.<br/>Страница не существует.</h1>
      <Link className={style.link} to='/'>Вернуться на главную страницу</Link>
    </>
  );
}
