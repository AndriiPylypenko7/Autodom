import React from "react";
import c from "./Car.module.css";
import { Link } from "react-router-dom";

function Car(props) {
  const eventHandler = () => {
    props.getData(props.index);
  };
  return (
    <div className={c.item__wrapper}>
      <div className={c.image__wrapper}>
        <img className={c.car__image} src={props.src} alt={props.name} />
      </div>
      <div className={c.content__wrapper}>
        <h3 className={c.car__name}>{props.name}</h3>
        <div className={c.text__wrapper}>
          <span className={c.content__title}>
            Посадочных мест:
            <span className={c.content__text}>{props.seats}</span>
          </span>
          <span className={c.content__title}>
            Коробка передач:
            <span className={c.content__text}>{props.transmission}</span>
          </span>
          <span className={c.content__title}>
            Тип топлива:
            <span className={c.content__text}>{props.fuelType}</span>
          </span>
          <span className={c.content__title}>
            Расход топлива:
            <span className={c.content__text}>{props.fuel} л/100км</span>
          </span>
          <span className={c.content__title}>
            Кондиционер:
            <span className={c.content__text}>{props.condicioner}</span>
          </span>
          <span className={c.content__title}>
            Подогрев сидений:
            <span className={c.content__text}>{props.seatsWarm}</span>
          </span>
          <span className={c.content__title}>
            Bluetooth:
            <span className={c.content__text}>{props.bluetooth}</span>
          </span>
          <span className={c.content__title}>
            Камера заднего вида:
            <span className={c.content__text}>{props.camera}</span>
          </span>
        </div>
      </div>
      <Link onClick={eventHandler} className={c.form__link} to="/form">
        Заказать
      </Link>
    </div>
  );
}

export default Car;
