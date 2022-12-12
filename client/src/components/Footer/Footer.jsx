import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Категории:</h1>
          <Link className="link" to="/products/1">
            Бизнес-литература
          </Link>
          <Link className="link" to="/products/1">
            Детские книги
          </Link>
          <Link className="link" to="/products/1">
            Комиксы. Манга. Артбуки
          </Link>
          <Link className="link" to="/products/1">
            Научная литература
          </Link>
          <Link className="link" to="/products/1">
            Художественная литература
          </Link>
        </div>
        <div className="item">
          <h1>Ссылки</h1>
          <Link className="link" to="/questions">
            Часто задаваемые вопросы
          </Link>
            <Link className="link" to="/whatread">
              Журнал «Что почитать?»
            </Link>
            <Link className="link" to="/whatread">
              Новости
            </Link>
            <Link className="link" to="/whatread">
              Подборки
            </Link>
        </div>
        <div className="item">
          <h1>О нас</h1>
          <span>
            Booking.ru – официальный книжный магазин крупнейшей в России издательской группы Эксмо-АСТ.
            <div />
            Book24.ru одним из первых получает книжные новинки ведущих российских издательств
            и предлагает их покупателям по лучшей цене.
            На книги, которые только планируются к выходу, доступен предзаказ.
          </span>
        </div>
        <div className="item">
          <h1>Контактная информация</h1>
          <span>
            8-495-268-08-41
            imarket@booking.ru
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">BOOKING</span>
          <span className="copyright">
            © Все права защищены ООО "BOOKING". 2022.
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
