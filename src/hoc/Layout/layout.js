import React from 'react';
import Auxx from "../Auxx/Auxx";
import classes from './layout.module.css';
import Toolbar from "../../components/desktop/Layout/Header/toolbar/toolbar";
import Footer from "../../components/desktop/Layout/Footer/footer";
import ContainerHome from "../../components/desktop/Pages/main/SliderTop/ContainerHome";
import Commercial from "../../components/desktop/Pages/main/Comercial NavBar/Comercial";
import IncredibleSuggestion from "../../components/desktop/Pages/main/IncredibleSuggestion/IncredibleSuggestion";
import BottomBanner from "../../components/desktop/Pages/main/BottomBanner/BottomBanner";
import Incredible from "../../components/desktop/Pages/main/Incredible/incredible";
import CategorizedProducts from "../../components/desktop/Pages/main/CategorizedProducts/CategorizedProducts";
const Layout=(props)=>{
    return(
        <Auxx>
            <Toolbar />
            {/*<SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />*/}
            {/*<main className={classes.Content}>*/}
                {props.children}
                {/*<ContainerHome />*/}
                {/*<Incredible />*/}
                {/*<Commercial />*/}
                {/*<IncredibleSuggestion />*/}
                {/*<CategorizedProducts />*/}
                {/*<BottomBanner />*/}
                <Footer />
            {/*</main>*/}

        </Auxx>
    )
}
export default Layout;