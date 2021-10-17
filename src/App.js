import React from 'react';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import classes from './App.module.css';
import Layout from "./hoc/Layout/layout";
import "./assets/common/font.scss";
import ProductDetail from "./components/desktop/Pages/ProductDetail/ProductDetail";
import Main from "./components/desktop/Pages/main/main";
import Cart from "./components/desktop/Pages/Cart/Cart";
import Login from "./components/desktop/Logn/Login";
function App() {
  return (
      <div className={classes.App}>
        {/*<Layout>*/}
          <BrowserRouter>
            <Switch>
              <Route path="/detail" component={ProductDetail} />
              <Route path="/cart" component={Cart} />
              <Route path="/" exact component={Main} />
              <Route path="/Login" exact component={Login} />

            </Switch>
          </BrowserRouter>

        {/*</Layout>*/}
      </div>
  );
}

export default App;
