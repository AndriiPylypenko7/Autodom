import React from "react";
import c from "./Cars.module.css";
import Car from "./Car";

function Cars(props) {
  let carItem = props.cars.map((item, idx) => (
    <Car
      getData={props.getData}
      name={item.name}
      src={item.src}
      type={item.type}
      fuel={item.fuel}
      fuelType={item.fuelType}
      transmission={item.transmission}
      seats={item.seats}
      condicioner={item.condicioner}
      bluetooth={item.bluetooth}
      seatsWarm={item.seatsWarm}
      camera={item.camera}
      index={idx}
      key={idx}
    />
  ));

  return (
    <section className="section">
      <h1 className="section__title">Автопарк</h1>
      <div className={c.cars__wrapper}>{carItem}</div>
    </section>
  );
}

export default Cars;
