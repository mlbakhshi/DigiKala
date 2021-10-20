import React from 'react';
import '../../../../../assets/icon/style.css';
import Auxx from "../../../../../hoc/Auxx/Auxx";
import DigikalaLogo from '../../../../../assets/SVG/dg.png';
import classes from './Logo.module.scss';
const Logo=()=>{
    return(
        <Auxx>
            <div >

                <img className={classes.Logo} src={DigikalaLogo} />
            </div>
        </Auxx>

    )
}
export default Logo;
