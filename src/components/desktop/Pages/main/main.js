import React from 'react';
import classes from "./main.module.scss";
import ContainerHome from "./SliderTop/ContainerHome";
import Incredible from "./Incredible/incredible";
import Commercial from "./Comercial NavBar/Comercial";
import IncredibleSuggestion from "./IncredibleSuggestion/IncredibleSuggestion";
import CategorizedProducts from "./CategorizedProducts/CategorizedProducts";
import BottomBanner from "./BottomBanner/BottomBanner";
import Footer from "../../Layout/Footer/footer";
import Auxx from "../../../../hoc/Auxx/Auxx";
import Toolbar from "../../Layout/Header/toolbar/toolbar";

const Main=(props)=>{
    return(
        <Auxx>
            <Toolbar />
            <main className={classes.Content}>
                {props.children}
                <ContainerHome />
                <Incredible />
                <Commercial />
                <IncredibleSuggestion />
                <CategorizedProducts />
                <BottomBanner />
                <Footer />
            </main>
        </Auxx>

    )
}
export default Main;
