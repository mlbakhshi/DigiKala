import React from 'react';
import '../../../../../assets/icon/style.css';
import classes from './Logo.module.scss';
import Auxx from "../../../../../hoc/Auxx/Auxx";
import DigikalaLogo from '../../../../../assets/SVG/dg.png';
import {Link} from "react-router-dom";
import isPlainObject from "react-redux/lib/utils/isPlainObject";

const Logo=()=>{
    return(
        <Auxx>
            <div className={classes.Logo}>
               <Link to={"/"}>
                <img src={DigikalaLogo} />
               </Link>
            </div>
        </Auxx>

    )
}
export default Logo;
