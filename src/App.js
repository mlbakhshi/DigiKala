import React from 'react';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import classes from './App.module.css';
import Layout from "./hoc/Layout/layout";
import "./assets/common/font.scss";
import ProductDetail from "./components/desktop/Pages/ProductDetail/ProductDetail";
import Main from "./components/desktop/Pages/main/main";
function App() {
  return (
      <div className={classes.App}>
        <Layout>
          <BrowserRouter>
            <Switch>
              <Route path="/detail" component={ProductDetail} />
              {/*<Route path="/orders" component={Orders} />*/}
              <Route path="/" exact component={Main} />
            </Switch>
          </BrowserRouter>

        </Layout>
      </div>
  );
}

export default App;
