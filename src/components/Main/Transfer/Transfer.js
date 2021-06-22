import React from "react";
import image from "../../../images/transfer.png";

function Transfer() {
  return (
    <section className="mini-section">
      <h3 className="mini-section__title">трансфер из аэропорта</h3>
      <div className="mini-section__wrapper">
        <div className="mini-section__text">
          <p>
            Вас нужно встретить в терминале аэропорта или на перроне ж/д
            вокзала? Без проблем! Мы можем организовать трансфер в любой точке
            Украины. Забронируйте нужный вам автомобиль, закажите дополнительную
            услугу «личный водитель», и машина будет ждать вас в условленном
            месте согласно договоренности. При заказе этой услуги вас будут
            ждать, даже если поезд или самолет задерживается, главное что вы
            прибываете оговоренным рейсом, притом дополнительная плата за
            простой не будет взиматься, в отличие от обычного такси.
          </p>
          <p>Базовая стоимость трансфера составляет 3 грн/км.</p>
          <p>
            Стоимость услуги с дополнительными опциями, уточняйте у нашего
            менеджера.
          </p>
        </div>
        <div className="mini-section__image_wrapper">
          <img className="mini-section__image" src={image} alt="car rent" />
        </div>
      </div>
    </section>
  );
}

export default Transfer;
