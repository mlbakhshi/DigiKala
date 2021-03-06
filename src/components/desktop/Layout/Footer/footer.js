import React from 'react';
import classes from './footer.module.scss';
import '../../../../assets/icon/style.css';
import Express from '../../../../assets/SVG/1.png';
import Pay from '../../../../assets/SVG/2.png';
import Allday from '../../../../assets/SVG/3.png';
import Return from '../../../../assets/SVG/4.png';
import Orginal from '../../../../assets/SVG/5.png';
import NavigationFooterItems from "./NavigationFooteritem/NavigationFooter/NavigationFooteritems";
import DownloadApp from './DownloadApp/downloadApp';
import Symbols from "./Symbols/symbols";
import SpecialServices from "./SpecialServices/SpecialServices";
import digikalaPrLogo from '../../../../assets/SVG/dg pr.png';
const Footer=()=>{
    return(
        <div className={classes.Footer}>
            <div className={classes.PrLogo}>
                <img src={digikalaPrLogo}  />
            </div>
            <div className={classes.About}>
                <div>تلفن پشتیبانی : </div>
                <div className={classes.Backup}>42920000-021 </div>
                <div className={classes.VeticalLine}>  | </div>
                <div >  هفت روز هفته، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم. </div>
            </div>

            <div className={classes.PNGLogo}>
                <div  >
                    <img src={Express} style={{width:"60%"}} />
                </div>
                <div >
                    <img src={Pay} style={{width:"60%"}} />
                </div>
                <div  >
                    <img src={Allday} style={{width:"60%"}} />
                </div>
                <div >
                    <img src={Return} style={{width:"60%"}} />
                </div>
                <div  >
                    <img src={Orginal} style={{width:"60%"}} />
                </div>
            </div>
            <hr style={{color:"#ded3d3"}} />
            <div className={classes.newColumnMenu}>
                <NavigationFooterItems />
            </div>
            <div>
                <DownloadApp />
            </div>
            <Symbols />
            <hr style={{color:"#ddd6d6"}} />
            <div className={classes.SpecialServices}>
                <SpecialServices  />
            </div>
        </div>
    )
}
export default Footer;
