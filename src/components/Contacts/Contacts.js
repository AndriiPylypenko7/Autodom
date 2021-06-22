import React from "react";
import iconSet from "../../IconFont/selection.json";
import IcomoonReact from "icomoon-react";
import c from "./Contacts.module.css";

function Contacts() {
  return (
    <section className="section">
      <h1 className="section__title">Контакты</h1>
      <div className={c.contacts__wrapper}>
        <iframe
          className={c.contacts__map}
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1848.4023653450847!2d33.396893471236694!3d49.06695619211499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1623583584444!5m2!1sru!2sua"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <div className={c.contacts__content}>
          <p className={c.content__title}>Адрес:</p>
          <p className={c.content__text}>
            г.Кременчуг, ул. Троицкая 1А
            <p>(возле магазина "Добряна")</p>
          </p>
          <p className={c.content__title}>Телефон:</p>
          <p className={c.content__text}>+380 (12) 345 67 89</p>
          <p className={c.content__text}>+380 (21) 345 67 89</p>
          <IcomoonReact
            className={c.messengers__item}
            iconSet={iconSet}
            size={30}
            icon="telegram"
          />
          <IcomoonReact
            className={c.messengers__item}
            iconSet={iconSet}
            size={30}
            icon="viber"
          />
          <IcomoonReact
            className={c.messengers__item}
            iconSet={iconSet}
            size={30}
            icon="whatsapp"
          />
          <p className={c.content__title}>Время работы:</p>
          <p className={c.content__text}>9:00 - 19:00</p>
          <p className={c.content__title}>Электронная почта:</p>
          <p className={c.content__text}>Autodom@gmail.com</p>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
