import React from "react";
import { Link } from "react-router-dom";
import c from "./CarPrice.module.css";

function CarPrice(props) {
  return (
    <div className={c.carPrice__wrapper}>
      <div className={c.carImage__wrapper}>
        <img className={c.carImage} src={props.src} alt={props.name} />
      </div>
      <Link to="/" className={c.carName__link}>
        {props.name}
      </Link>
      <div className={c.priceList__wrapper}>
        <div className={c.price__wrapper}>
          <p className={c.price__title}>Дни</p>
          <p className={c.price__text}>Цена</p>
        </div>
        <div className={c.price__wrapper}>
          <p className={c.price__title}>1-3</p>
          <p className={c.price__text}>{props.days1_3}</p>
        </div>
        <div className={c.price__wrapper}>
          <p className={c.price__title}>4-7</p>
          <p className={c.price__text}>{props.days4_7}</p>
        </div>
        <div className={c.price__wrapper}>
          <p className={c.price__title}>8-14</p>
          <p className={c.price__text}>{props.days8_14}</p>
        </div>
        <div className={c.price__wrapper}>
          <p className={c.price__title}>от 15</p>
          <p className={c.price__text}>{props.long}</p>
        </div>
        <div className={c.price__wrapper}>
          <p className={c.price__title}>Залог</p>
          <p className={c.price__text}>{props.deposit}</p>
        </div>
      </div>
    </div>
  );
}

export default CarPrice;
