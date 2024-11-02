import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="form-container">
      <h1>Отправить сообщение</h1>
      <form>
        <input placeholder="Имя" />
        <input placeholder="Email" />
        <input placeholder="Тема" />
        <textarea placeholder="Текст" rows="4"></textarea>
        <button>Отправить</button>
      </form>
    </div>
  );
}

export default ContactUs;
