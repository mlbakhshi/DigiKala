import React from 'react';
import '../../../../assets/icon/style.css';
import Auxx from "../../../../hoc/Auxx/Auxx";
import DigikalaLogo from '../../../../assets/SVG/dg.png';

const Logo=()=>{
    return(
        <Auxx>
            <div >
                {/*<span class="icon-Digikala-Logowine"></span>*/}
                {/*<span class="icon-Digikala-Logo .path2"></span>*/}
                <img src={DigikalaLogo} style={{width:"175px",marginTop:"27px"}}/>
            </div>
        </Auxx>

    )
}
export default Logo;
