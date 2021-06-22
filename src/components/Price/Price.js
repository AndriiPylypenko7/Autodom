import React from "react";
import CarPrice from "./CarPrice";

function Price(props) {
  let priceItem = props.price.map((item, idx) => (
    <CarPrice
      name={item.name}
      src={item.src}
      days1_3={item.days1_3}
      days4_7={item.days4_7}
      days8_14={item.days8_14}
      long={item.long}
      deposit={item.deposit}
      key={idx}
    />
  ));
  return (
    <section className="section">
      <h1 className="section__title">Тарифы</h1>
      <div>{priceItem}</div>
    </section>
  );
}

export default Price;
