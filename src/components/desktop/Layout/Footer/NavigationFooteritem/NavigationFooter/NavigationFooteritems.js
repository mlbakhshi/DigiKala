import React from 'react';
import NavigationFooterItem from "../NavigationFooteritem";
import classes from './NavigationFooteritems.module.scss';
import '../../../../../../assets/icon/style.css';


const NavigationFooterItems=(props)=>{
    return(
        <div className={classes.footerContainer}  >
            <nav>
                <ul >
                    <span className={classes.Titr}>
                          با دیجی کالا
                    </span>

                    <NavigationFooterItem link="/orders">
                      <span>
                          اتاق خبر دیجی کالا
                      </span>
                    </NavigationFooterItem>
                    <NavigationFooterItem link="/orders">
                       <span>
                            فروش در دیجی کالا
                       </span>
                    </NavigationFooterItem>
                    <NavigationFooterItem link="/orders">
                        <span>
                            فرصت های شغلی
                        </span>
                    </NavigationFooterItem>
                    <NavigationFooterItem link="/orders">
                        <span>
                            تماس با دیجی کالا
                        </span>
                    </NavigationFooterItem>
                    <NavigationFooterItem link="/orders">
                        <span>
                            درباره دیجی کالا
                        </span>
                    </NavigationFooterItem>
                </ul>
            </nav>

            <nav>
                <ul>
                     <span className={classes.Titr}>
                    خدمات مشتریان
                     </span>
                         <NavigationFooterItem link="/orders">
                             <span>
                                                        پاسخ به پرسش های متدوال
                             </span>
                    </NavigationFooterItem>
                    <NavigationFooterItem link="/orders"><span>
                        رویه های باز گرداندن کالا
                    </span>
                    </NavigationFooterItem>
                    <NavigationFooterItem link="/orders">
                       <span>
                            شرایط استفاده
                       </span>
                    </NavigationFooterItem>
                    <NavigationFooterItem link="/orders">
                        <span>
                            حریم خصوصی
                        </span>
                    </NavigationFooterItem>
                    <NavigationFooterItem link="/orders">
                       <span>
                            گزارش باگ
                       </span>
                    </NavigationFooterItem>
                </ul>
            </nav>

            <nav>
                <ul>
                     <span className={classes.Titr}>
                    راهنمای خرید از دیجی کالا
                     </span>
                    <NavigationFooterItem link="/orders">
                       <span>
                            نحوه ثبت سفارش
                       </span>
                    </NavigationFooterItem>
                    <NavigationFooterItem link="/orders">
                       <span>
                            رویه ارسال سفارش
                       </span>
                    </NavigationFooterItem>
                    <NavigationFooterItem link="/orders">
                       <span>
                            شیوه های پرداخت
                       </span>
                    </NavigationFooterItem>

                </ul>
            </nav>

            <nav>
                <ul>
                     <span className={classes.Titr}>
                    با ما همراه باشید
                     </span>
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
                        {/*<NavigationFooterItem link="/orders">*/}
                        {/*    <span   className="icon-aparat"></span>*/}
                        {/*</NavigationFooterItem>*/}
                    </div>
                    <div style={{paddingTop:"20px"}}>
                       <span className={classes.Titr}>
                        از جدیدترین تخفیف ها بهره مند شوید
                       </span>
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