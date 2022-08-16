import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Balance from "./pages/balance";
import Stake from "./pages/stake";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter basename="">
          <Switch>
            <Route path="/balance" component={Balance} />
            <Route path="/stake" component={Stake} />
            <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter>

        <Footer />
      </>
    );
  }
}

export default App;
