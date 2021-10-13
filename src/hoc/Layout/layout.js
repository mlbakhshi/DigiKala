import React from 'react';
import Auxx from "../Auxx/Auxx";
import classes from './layout.module.css';
import Toolbar from "../../components/desktop/Navigation/toolbar/toolbar";
import Footer from "../../components/desktop/Footer/footer";
import ContainerHome from "../../components/desktop/SliderTop/ContainerHome";
import Incredible from "../../components/desktop/Incredible/incredible";
import Commercial from "../../components/desktop/Comercial NavBar/Comercial";
import IncredibleSuggestion from "../../components/desktop/IncredibleSuggestion/IncredibleSuggestion";
import CategorizedProducts from "../../components/desktop/CategorizedProducts/CategorizedProducts";
const Layout=(props)=>{
    return(
        <Auxx>
            <Toolbar />
            {/*<SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />*/}
            <main className={classes.Content}>
                {props.children}
                <ContainerHome />
                <Incredible />
                <Commercial />
                <IncredibleSuggestion />
                <CategorizedProducts />
                <Footer />
            </main>

        </Auxx>
    )
}
export default Layout;