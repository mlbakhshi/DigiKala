import React from 'react';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import classes from './App.module.css';
import Layout from "./hoc/Layout/layout";
import "./assets/common/font.scss";
function App() {
  return (
      <div className={classes.App}>
        <Layout>
          <BrowserRouter>
            <Switch>
              {/*<Route path="/checkout" component={Checkout} />*/}
              {/*<Route path="/orders" component={Orders} />*/}
              {/*<Route path="/" exact component={BurgerBuilder} />*/}
            </Switch>
          </BrowserRouter>

        </Layout>
      </div>
  );
}

export default App;
