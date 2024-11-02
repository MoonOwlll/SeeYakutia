import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>SeeYakutia</h1>
          <p>Пейзажи Якутии</p>
        </div>
        <div className="icons">
          <a href="/">
            <i className="fa-brands fa-whatsapp-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-github-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Проект</h4>
          <a href="/">Изменения</a>
          <a href="/">Статус</a>
          <a href="/">Лицензия</a>
        </div>

        <div>
          <h4>Сообщество</h4>
          <a href="/">GitHub</a>
          <a href="/">Whatsapp</a>
          <a href="/">Telegram</a>
        </div>

        <div>
          <h4>Помощь</h4>
          <a href="/">Поддержка</a>
          <a href="/">Устранение неполадок</a>
          <a href="/">Связаться с нами</a>
        </div>

        <div>
          <h4>Другие</h4>
          <a href="/">Условия использования</a>
          <a href="/">Политика конфиденциальности </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
