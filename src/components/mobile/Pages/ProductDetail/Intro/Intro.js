import React from 'react';
import classes from './Intro.module.scss';
import Auxx from "../../../../../hoc/Auxx/Auxx";
import Express from "../../../../../assets/SVG/1.png";
import Pay from "../../../../../assets/SVG/2.png";
import Allday from "../../../../../assets/SVG/3.png";
import Return from "../../../../../assets/SVG/4.png";
import Orginal from "../../../../../assets/SVG/5.png";
import Description from "../../../../desktop/Pages/ProductDetail/Description/Description";
const Intro=()=>{
    return(
        <Auxx>
            <div className={classes.Title}>
                <div>
                    breadcrumb
                </div>
                <h6>
                    گوشی موبایل شیائومی مدل POCO X3 Pro M2102J20SG دو سیم‌ کارت ظرفیت 256 گیگابایت و 8 گیگابایت رم
                </h6>
            </div>
            <div className={classes.Description}>
                <Description />
            </div>
            <hr style={{width:"95%",color:"lightgray"}}/>
            <div className={classes.PNGLogo}>
                <div  >
                    <img src={Express}  />
                </div>
                <div >
                    <img src={Pay} />
                </div>
                <div  >
                    <img src={Allday}  />
                </div>
                <div >
                    <img src={Return}  />
                </div>
                <div  >
                    <img src={Orginal}  />
                </div>
            </div>

        </Auxx>
    )
}
export default Intro;