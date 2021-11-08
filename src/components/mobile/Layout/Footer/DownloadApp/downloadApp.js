import React from 'react';
import classes from './downloadApp.module.scss';
import  googlePlay  from '../../../../../assets/SVG/googleplay.png';
import bazar  from '../../../../../assets/SVG/bazar.png';
import sib from '../../../../../assets/SVG/sib.png';
import  myket from '../../../../../assets/SVG/myket.png';

const downloadApp=()=>{
    return(
        <div className={classes.downloadApp}>
            <div className={classes.DownLoad} >
                دانلود اپلیکیشن دیجی کالا
            </div>
            <div className={classes.DownlaodLogo} >
                <div style={{display:"flex",justifyContent:"center"}}>
                    <div className={classes.App} >
                        <img src={googlePlay} alt="Google Play"/>
                    </div>
                    <div className={classes.App} >
                        <img src={bazar} alt="Cafe Bazar"  />
                    </div>
                </div>
               <div style={{display:"flex",justifyContent:"center"}}>
                   <div className={classes.App} >
                       <img src={myket} alt="Myket"  />
                   </div>
                   <div className={classes.App} >
                       <img src={sib} alt="Sib App" />
                   </div>
               </div>

            </div>


        </div>
    )
}
export default downloadApp;