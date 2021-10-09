import React from 'react';
import Auxx from "../Auxx/Auxx";
import classes from './layout.module.css';
import Toolbar from "../../components/desktop/Navigation/toolbar/toolbar";
import Footer from "../../components/desktop/Footer/footer";
import ContainerHome from "../../components/desktop/SliderTop/ContainerHome";
const Layout=(props)=>{
    return(
        <Auxx>
            <Toolbar />
            {/*<SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />*/}
            <main className={classes.Content}>
                {props.children}
                <ContainerHome />
            </main>
            <Footer />
        </Auxx>
    )
}
export default Layout;