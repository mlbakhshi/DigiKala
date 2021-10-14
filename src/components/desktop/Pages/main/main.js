import React from 'react';
import classes from "../../../../hoc/Layout/layout.module.css";
import ContainerHome from "./SliderTop/ContainerHome";
import Incredible from "./Incredible/incredible";
import Commercial from "./Comercial NavBar/Comercial";
import IncredibleSuggestion from "./IncredibleSuggestion/IncredibleSuggestion";
import CategorizedProducts from "./CategorizedProducts/CategorizedProducts";
import BottomBanner from "./BottomBanner/BottomBanner";
import Footer from "../../Layout/Footer/footer";
import Auxx from "../../../../hoc/Auxx/Auxx";

const Main=(props)=>{
    return(
        <main className={classes.Content}>
            {props.children}
            <ContainerHome />
            <Incredible />
            <Commercial />
            <IncredibleSuggestion />
            <CategorizedProducts />
            <BottomBanner />

        </main>
    )
}
export default Main;
