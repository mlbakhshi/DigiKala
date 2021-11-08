import React from 'react';
import '../../../../../assets/icon/style.css';
import Auxx from "../../../../../hoc/Auxx/Auxx";
import DigikalaLogo from '../../../../../assets/SVG/dg.png';
import classes from './Logo.module.scss';
import {Link} from "react-router-dom";
const Logo=()=>{
    return(
        <Auxx>
            <div >
                <Link to={"/"}>
                <img className={classes.Logo} src={DigikalaLogo} />
                </Link>
            </div>
        </Auxx>

    )
}
export default Logo;
