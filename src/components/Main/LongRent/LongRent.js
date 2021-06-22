import React from "react";
import image from "../../../images/longrent.png";

function LongRent() {
  return (
    <section className="mini-section">
      <h3 className="mini-section__title">долгосрочная аренда</h3>
      <div className="mini-section__wrapper">
        <div className="mini-section__text">
          <p>
            Долгосрочная аренда автомобиля - это отличное решение. Самое главное
            преимущество такого вида аренды, это экономия Ваших средств, ведь
            при долгосрочной аренде стоимость суток проката, намного меньше, чем
            если бы вы арендовали автомобиль на несколько дней.
          </p>
          <p>
            Неоспоримым плюсом, будет то, что вам не придется беспокоиться о
            техническом обслуживании автомобиля, мы сделаем это за вас!
          </p>
          <ul>
            <li>Заменим резину по погоде</li>
            <li>Осуществим ремонт и замену запчастей</li>
            <li>Оформим страховку</li>
          </ul>
        </div>
        <div className="mini-section__image_wrapper">
          <img className="mini-section__image" src={image} alt="car rent" />
        </div>
      </div>
    </section>
  );
}

export default LongRent;
