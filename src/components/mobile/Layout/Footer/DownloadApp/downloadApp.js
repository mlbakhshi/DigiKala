import React from 'react';
import classes from './downloadApp.module.scss';
import  googlePlay  from '../../../../../assets/Google.png';
import bazar  from '../../../../../assets/Bazar.png';
import sib from '../../../../../assets/Sib App.png';
import  myket from '../../../../../assets/Myket.png';

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