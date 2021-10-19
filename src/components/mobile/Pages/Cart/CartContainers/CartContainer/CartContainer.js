import React, {useState} from "react";
import classes from './CartContainer.module.scss';
import Auxx from "../../../../../../hoc/Auxx/Auxx";
import supermarket from '../../../../../../assets/SVG/supermarket-svgrepo-com.svg';
const CartContainer=()=>{
    const [count,setCount]=useState(0);
    //
    // const Increment=(count)={
    //    setCount
    // }
    // const Decrement=()={
    //     setCount(count--);
    // }

    return(
        <Auxx>
<div className={classes.Title}>
    گوشی موبایل شیائومی مدل POCO X3 M2007J20CG دو سیم‌ کارت ظرفیت 128 گیگابایت
</div>
            <div className={classes.Color}>
                <span className={classes.Dot} style={{backgroundColor:"gray"}}></span>
                خاکستری
            </div>
            <div className={classes.Guarantee}>
                <i className="fa fa-check-square"  ></i>
                <span>
                                    گارانتی ۱۸ ماهه دیجی کالا
                </span>
            </div>
            <div className={classes.Seller}>
                <img src={supermarket}/>
                <span>
                                  دیجی‌کالا
                </span>
            </div>
            <div className={classes.Stock}>
                <i className="fa fa-floppy-o" aria-hidden="true" ></i>
                <span>
                     موجود در انبار فروشنده و دیجی‌کالا
                ارسال دیجی‌کالا
                </span>
            </div>
<div className={classes.NumberDelPrice}>
    <div className={classes.numberOrder}>
        <div className={classes.incrbtn}>
            <button style={{border: "none",outline:"none",backgroundColor: "transparent",}}
                    onClick={() => setCount(count + 1)}
            >
                <i className="fa fa-plus" ></i>
            </button>
        </div>
        <div className={classes.numorder}>
            <input
                className={classes.formControl}
                style={{padding: "0px",fontSize: "14px",backgroundColor: "transparent",border: "none"}}
                // id="cart_input_<?=  $value->ID ?>"
                disabled value={count}
            />
        </div>
        <div className={classes.decrbtn}>
            <button type="button" style={{border: "none",outline:"none",backgroundColor: "transparent",}}
                    onClick={() => setCount(count - 1)}
            >
                <i className="fa fa-minus"></i>
            </button>
        </div>
    </div>
    <div className={classes.Del}>
        <div>
            <i className="fa fa-trash" aria-hidden="true"></i>
        </div>
        <span>
            حذف
        </span>
    </div>
    <div  className={classes.Price} >
        6750000 تومان
    </div>
</div>


        </Auxx>
    )
}
export default CartContainer;