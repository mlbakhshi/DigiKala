import React from 'react';
import classes from './footer.module.scss';
import '../../../../assets/icon/style.css';
import NavigationFooterItems from "./NavigationFooteritem/NavigationFooter/NavigationFooteritems";
import DownloadApp from './DownloadApp/downloadApp';
import Symbols from "./Symbols/symbols";
import digikalaPrLogo from '../../../../assets/SVG/dg pr.png';

const Footer=()=>{
    return(
        <div className={classes.Footer}>
            <div className={classes.PrLogo}>
                <img src={digikalaPrLogo} />
            </div>
            <div className={classes.About}>
                <div>تلفن پشتیبانی : </div>
                <div>42920000-021 </div>
            </div>
            <div className={classes.Alldays}>  هفت روز هفته، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم. </div>

            <div className={classes.newColumnMenu}>
                <NavigationFooterItems />
            </div>
            <div>
                <DownloadApp />
            </div>
            <div style={{display:"flex"}}>
                <Symbols />
            </div>
            <hr style={{color:"#ddd6d6"}} />
        </div>
    )
}
export default Footer;
