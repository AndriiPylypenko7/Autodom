import React from "react";
import image from "../../../images/weeding.png";

function Weeding() {
  return (
    <section className="mini-section">
      <h3 className="mini-section__title">Свадебный кортеж</h3>
      <div className="mini-section__wrapper">
        <div className="mini-section__text">
          <p>
            Уникальную возможность создать шикарный свадебный кортеж дарит вам
            прокат свадебных авто в Кременчуге. Вам помогут подобрать автомобили
            разных марок самым тщательным образом, исходя от ваших пожеланий.
            Учитывая целевую направленность, ваш волшебный кортеж заставит
            обратить на себя восхищенные взгляды.
          </p>
          <ul>
            В своем выборе вы должны руководствоваться такими критериями:
            <li>Определиться с марками авто и их количеством;</li>
            <li>Уточнить дату и время подачи;</li>
            <li>Оговорить маршрут передвижения;</li>
            <li>Сроки предполагаемой аренды.</li>
          </ul>
        </div>
        <div className="mini-section__image_wrapper">
          <img className="mini-section__image" src={image} alt="car rent" />
        </div>
      </div>
    </section>
  );
}

export default Weeding;
