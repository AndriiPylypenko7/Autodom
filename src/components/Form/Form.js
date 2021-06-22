import React from "react";
import ReactDom from "react-dom";
import c from "./Form.module.css";

class Form extends React.Component {
  state = {
    currentPrice: "",
  };

  render(props) {
    let idx = this.props.index;

    const nameRef = React.createRef();
    const surnameRef = React.createRef();
    const telRef = React.createRef();
    const mailRef = React.createRef();
    const daysRef = React.createRef();

    const getFormData = () => {
      const nameData = nameRef.current.value;
      const surnameData = surnameRef.current.value;
      const mailData = mailRef.current.value;
      const telData = telRef.current.value;
      const daysData = daysRef.current.value;
      const carNameData = this.props.price[idx].name;
      const summaryData = this.state.currentPrice;
      return {
        clientName: nameData !== "" ? nameData : "empty",
        clientSurname: surnameData !== "" ? surnameData : "empty",
        mail: mailData !== "" ? mailData : "empty",
        tel: telData !== "" ? telData : "empty",
        days: daysData !== "" ? daysData : "empty",
        carName: carNameData,
        summary: summaryData,
      };
    };

    function clickHandler(event) {
      event.preventDefault();
      sendData();
      submitMessage();

      nameRef.current.value = "";
      surnameRef.current.value = "";
      mailRef.current.value = "";
      telRef.current.value = "";
      daysRef.current.value = "";
    }

    function sendData() {
      fetch("https:/autodom.com/admin", {
        body: JSON.stringify(getFormData()),
        method: "POST",
      });
    }

    const summaryPrice = () => {
      if (+daysRef.current.value >= 1 && +daysRef.current.value < 4) {
        this.setState({
          currentPrice:
            +daysRef.current.value * +this.props.price[idx].days1_3 + " грн",
        });
      } else if (+daysRef.current.value > 3 && +daysRef.current.value < 8) {
        this.setState({
          currentPrice:
            +daysRef.current.value * +this.props.price[idx].days4_7 + " грн",
        });
      } else if (+daysRef.current.value >= 8 && +daysRef.current.value < 15) {
        this.setState({
          currentPrice:
            +daysRef.current.value * +this.props.price[idx].days8_14 + " грн",
        });
      } else
        this.setState({
          currentPrice:
            "Цена договорная, с вами свяжется наш менеджер для обсуждения условий долгосрочной аренды",
        });
    };

    function submitMessage() {
      const el = React.createElement(
        "h2",
        null,
        "Спасибо что выбрали наш сервис! Мы свяжемся с вами для уточнения информации."
      );
      ReactDom.render(el, document.getElementById("submit__message"));
    }

    return (
      <section className="section">
        <h1 className="section__title">Введите данные для заполнения</h1>
        <form onSubmit={clickHandler} className={c.form__wrapper}>
          <div className={c.formImage__container}>
            <div className={c.formImage__wrapper}>
              <img
                src={
                  this.props.index !== ""
                    ? this.props.price[idx].src
                    : (window.location.href = window.location.hostname)
                }
                alt={
                  this.props.index !== ""
                    ? this.props.price[idx].name
                    : (window.location.href = window.location.hostname)
                }
                className={c.formImage}
              />
            </div>
            <div id="submit__message"></div>
          </div>
          <div className={c.formInput__wrapper}>
            <p className={c.formInput__title}>Модель авто:</p>
            <p className={c.formInput__text}>
              {this.props.index !== ""
                ? this.props.price[idx].name
                : (window.location.href = window.location.hostname)}
            </p>
            <label className={c.formInput__title}>
              Введите имя
              <input
                className={c.form__input}
                ref={nameRef}
                type="text"
                placeholder="Имя"
                maxLength="15"
                pattern="[A-Za-zА-Яа-яЁёА-Яа-яІіЇїЄє]{1,15}"
                title="Имя должно содержать только буквы"
                required
              />
            </label>
            <label className={c.formInput__title}>
              Введите фамилию
              <input
                className={c.form__input}
                ref={surnameRef}
                type="text"
                pattern="[A-Za-zА-Яа-яЁёА-Яа-яІіЇїЄє]{1,15}"
                maxLength="15"
                title="Фамилия должна содержать только буквы"
                placeholder="Фамилия"
                required
              />
            </label>
            <label className={c.formInput__title}>
              Электронная почта
              <input
                className={c.form__input}
                ref={mailRef}
                type="email"
                maxLength="30"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                placeholder="Email"
                required
              />
            </label>
            <label className={c.formInput__title}>
              Телефон
              <input
                className={c.form__input}
                ref={telRef}
                type="text"
                pattern="[0-9]{10}"
                title="номер телефона должен содержать только цифры"
                maxLength="10"
                minLength="10"
                placeholder="Телефон"
                required
              />
            </label>
            <label className={c.formInput__title}>
              Срок аренды
              <input
                className={c.form__input}
                ref={daysRef}
                onChange={summaryPrice}
                type="number"
                min="1"
                placeholder="Срок аренды"
                required
              />
            </label>
            <div className={c.formInput__text}>
              {"Итоговая стоимость: " + this.state.currentPrice}
            </div>
            <input className={c.form__button} type="submit" value="Отправить" />
          </div>
        </form>
      </section>
    );
  }
}

export default Form;
