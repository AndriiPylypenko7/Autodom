import React from "react";
import c from "./Requirements.module.css";

function Requirements() {
  return (
    <section className="section">
      <h1 className="section__title">Условия проката</h1>
      <div className={c.req__wrapper}>
        <div className={c.req__text}>
          <ul className={c.req__list}>
            <li className={c.req__list_item}>Минимальный возраст 25 лет</li>
            <li className={c.req__list_item}>Паспорт</li>
            <li className={c.req__list_item}>
              Водительское удостоверение (минимальный стаж 1 год)
            </li>
            <li className={c.req__list_item}>
              Идентификационный код (для граждан Украины)
            </li>
            <li className={c.req__list_item}>
              Залог (сумму уточняйте у менеджера)
            </li>
            <li className={c.req__list_item}>
              Минимальный срок проката авто 1 сутки с момента передачи ключей
            </li>
            <li className={c.req__list_item}>
              Возврат автомобиля в грязном виде 200 грн.
            </li>
            <li className={c.req__list_item}>
              Суточный пробег автомобиля составляет 250 км. Сверх лимита 2
              грн/км.
            </li>
            <li className={c.req__list_item}>
              Полная страховка КАСКО оплачивается дополнительно при желании
              клиента
            </li>
            <li className={c.req__list_item}>
              Продление автомобиля происходит по предварительной договоренности
              с менеджером
            </li>
          </ul>
        </div>
        <div className={c.req__image_wrapper}></div>
      </div>
    </section>
  );
}

export default Requirements;
