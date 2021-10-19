import React from 'react';
import NavigationFooterItem from "../NavigationFooteritem";
import classes from './NavigationFooteritems.module.scss';
import '../../../../../../assets/icon/style.css';


const NavigationFooterItems=(props)=>{
    return(
        <div className={classes.footerContainer}  >
            <nav>
                <ul>
                    با دیجی کالا
                    <NavigationFooterItem link="/orders">
                        اتاق خبر دیجی کالا
                    </NavigationFooterItem>
                    <NavigationFooterItem link="/orders">
                        فروش در دیجی کالا
                    </NavigationFooterItem>
                    <NavigationFooterItem link="/orders">
                        فرصت های شغلی
                    </NavigationFooterItem>
                    <NavigationFooterItem link="/orders">
                        تماس با دیجی کالا
                    </NavigationFooterItem>
                    <NavigationFooterItem link="/orders">
                        درباره دیجی کالا
                    </NavigationFooterItem>
                </ul>
            </nav>

            <nav>
                <ul>
                    خدمات مشتریان
                    <NavigationFooterItem link="/orders">
                        پاسخ به پرسش های متدوال
                    </NavigationFooterItem>
                    <NavigationFooterItem link="/orders">
                        رویه های باز گرداندن کالا
                    </NavigationFooterItem>
                    <NavigationFooterItem link="/orders">
                        شرایط استفاده
                    </NavigationFooterItem>
                    <NavigationFooterItem link="/orders">
                        حریم خصوصی
                    </NavigationFooterItem>
                    <NavigationFooterItem link="/orders">
                        گزارش باگ
                    </NavigationFooterItem>
                </ul>
            </nav>

            <nav>
                <ul>
                    راهنمای خرید از دیجی کالا
                    <NavigationFooterItem link="/orders">
                        نحوه ثبت سفارش
                    </NavigationFooterItem>
                    <NavigationFooterItem link="/orders">
                        رویه ارسال سفارش
                    </NavigationFooterItem>
                    <NavigationFooterItem link="/orders">
                        شیوه های پرداخت
                    </NavigationFooterItem>

                </ul>
            </nav>

            <nav>
                <ul>
                    با ما همراه باشید
                    <div className={classes.Nav} >
                        <NavigationFooterItem link="/orders">
                            <span className="icon-instagram"></span>
                        </NavigationFooterItem>
                        <NavigationFooterItem link="/orders">
                            <span className="icon-twitter"></span>
                        </NavigationFooterItem>
                        <NavigationFooterItem link="/orders">
                            <span className="icon-linkedin"></span>
                        </NavigationFooterItem>
                        <NavigationFooterItem link="/orders">
                            <span className="icon-aparat"></span>
                        </NavigationFooterItem>
                    </div>
                    <div style={{paddingTop:"20px"}}>
                        از جدیدترین تخفیف ها بهره مند شوید
                        <div style={{paddingTop:"20px",display:"flex"}}>
                            <input  className={classes.inputEmail} placeholder="ادرس ایمیل خود را وارد کنید" />
                            <button className={classes.inputButton}  >ثبت  </button>
                        </div>
                    </div>

                </ul>
            </nav>
        </div>
    )
}
export default NavigationFooterItems;