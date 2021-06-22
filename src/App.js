import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import Cars from "./components/Cars/Cars";
import Price from "./components/Price/Price";
import Requirements from "./components/Requirements/Requirements";
import Contacts from "./components/Contacts/Contacts";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Burger from "./components/Navigation/Burger/Burger";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App(props) {
  let dataIndex = "";
  const getData = (data) => {
    dataIndex = data;
  };
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Burger />
        <Header />
        <Sidebar />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={500} classNames="fade">
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <Cars getData={getData} cars={props.state.cars} />
                    )}
                  />
                  <Route path="/main" component={Main} />
                  <Route
                    path="/price"
                    render={() => <Price price={props.state.price} />}
                  />
                  <Route path="/requirements" component={Requirements} />
                  <Route path="/contacts" component={Contacts} />
                  <Route
                    path="/form"
                    render={() => (
                      <Form price={props.state.price} index={dataIndex} />
                    )}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        ></Route>
      </div>
    </Router>
  );
}

export default App;
