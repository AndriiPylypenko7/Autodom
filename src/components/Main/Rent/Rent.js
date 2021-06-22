import React from "react";
import image from "../../../images/carrent.png";

function Rent() {
  return (
    <section className="mini-section">
      <h3 className="mini-section__title">аренда автомобиля</h3>
      <div className="mini-section__wrapper">
        <div className="mini-section__text">
          <p>
            Вы получаете технически протестированный, абсолютно исправный
            автомобиль, который не подведет вас в пути. Все расходы по
            техническому сопровождению и страховку компания берет на себя.
            Достаточно гибкий временной интервал аренды машины поможет
            сэкономить ваше время. Чем дольше вы используете авто – тем меньше
            цена за сутки. Возможность управлять своим временем в условиях
            современной жизни неоценима!
          </p>
          <p>
            Вполне демократичный диапазон цен делает доступной эту услугу для
            людей с разным достатком. Предлагаемый модельный ряд разных марок
            машин – от класса «эконом» и «средний» рассчитан по запросам
            клиентов.
          </p>
        </div>
        <div className="mini-section__image_wrapper">
          <img className="mini-section__image" src={image} alt="car rent" />
        </div>
      </div>
    </section>
  );
}

export default Rent;
