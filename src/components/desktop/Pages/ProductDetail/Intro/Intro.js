import React from 'react';
import classes from './Intro.module.scss';
import Auxx from "../../../../../hoc/Auxx/Auxx";
import DescriptionBuy from "../DescriptionBuy/DescriptionBuy";
import Express from "../../../../../assets/SVG/1.png";
import Pay from "../../../../../assets/SVG/2.png";
import Allday from "../../../../../assets/SVG/3.png";
import Return from "../../../../../assets/SVG/4.png";
import Orginal from "../../../../../assets/SVG/5.png";

const Intro=(props)=>{
    return(
        <Auxx>
            <div className={classes.Title}>

                    {props.detailProduct.ProductNamePr}
            </div>
            <div className={classes.Description}>
                <DescriptionBuy flagbuy={props.flagbuy} detailProduct={props} />
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