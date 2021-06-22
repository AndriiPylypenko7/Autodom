import React from "react";
import MainNav from "./MainNav/MainNav";
import Rent from "./Rent/Rent";
import LongRent from "./LongRent/LongRent";
import Weeding from "./Weeding/Weeding";
import Transfer from "./Transfer/Transfer";

import { Switch, Route } from "react-router-dom";

function Main() {
  return (
    <section className="section">
      <h1 className="section__title">Услуги</h1>
      <MainNav />
      <Switch>
        <Route exact path="/main" component={Rent} />
        <Route path="/main/longrent" component={LongRent} />
        <Route path="/main/weeding" component={Weeding} />
        <Route path="/main/transfer" component={Transfer} />
      </Switch>
    </section>
  );
}

export default Main;
