import React from 'react';
import classes from './symbols.module.scss';
import  samandehi  from '../../../../../assets/SVG/samandehi.png';
import  etehadiye  from '../../../../../assets/SVG/etehadiye.png';
import  tejarat  from '../../../../../assets/SVG/tejarat.png';

const Symbols=()=>{
    return(
        <div className={classes.Symbols}>
            <div>
                <article className={classes.Comment}>
                    <h3 >
                        فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین
                    </h3>
                    <p>
                        دیجی‌کالا به عنوان یکی از قدیمی‌ترین فروشگاه های اینترنتی با بیش از یک دهه تجربه، با پایبندی به سه اصل، پرداخت در محل، ۷ روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا موفق شده تا همگام با فروشگاه‌های معتبر جهان، به بزرگ‌ترین فروشگاه اینترنتی ایران تبدیل شود. به محض ورود به سایت دیجی‌کالا با دنیایی از کالا رو به رو می‌شوید! هر آنچه که نیاز دارید و به ذهن شما خطور می‌کند در اینجا پیدا خواهید کرد.
                    </p>
                </article>
            </div>

            <div className={classes.PicSymbols}>
                <div className={classes.PicDiv}>
                    <img src={samandehi} alt="samandehi" className={classes.Picture} />
                </div>
                <div className={classes.PicDiv}>
                    <img src={etehadiye} alt="etehadiye" className={classes.Picture} />
                </div>
                <div className={classes.PicDiv}>
                    <img src={tejarat} alt="tejarat" className={classes.Picture} />
                </div>
            </div>
        </div>
    )
}
export default Symbols;