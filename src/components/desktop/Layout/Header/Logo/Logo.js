import React from 'react';
import '../../../../../assets/icon/style.css';
import Auxx from "../../../../../hoc/Auxx/Auxx";
import DigikalaLogo from '../../../../../assets/SVG/dg.png';
import {Link} from "react-router-dom";

const Logo=()=>{
    return(
        <Auxx>
            <div >
               <Link to={"/"}>
                <img src={DigikalaLogo} style={{width:"175px",marginTop:"27px"}}/>
               </Link>
            </div>
        </Auxx>

    )
}
export default Logo;
