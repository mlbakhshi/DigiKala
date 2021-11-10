import React from 'react';
import NavigationFooterItem from "../NavigationFooteritem";
import classes from './NavigationFooteritems.module.scss';
import '../../../../../../assets/icon/style.css';
import {Link} from "react-router-dom";


const NavigationFooterItems=(props)=>{
    return(
        <div>
        <div className={classes.footerContainer}  >
            <nav>
                <ul >
                    <span className={classes.Titr}>
                                           با دیجی کالا

                    </span>
                    <li >
                        <Link to={"/"}>
                            اتاق خبر دیجی کالا
                        </Link>
                    </li>
                    <li >
                        <Link to={"/"}>
                            فروش در دیجی کالا
                        </Link>
                    </li>
                    <li >
                        <Link to={"/"}>
                            فرصت های شغلی
                        </Link>

                    </li>
                    <li >
                        <Link to={"/"}>
                            تماس با دیجی کالا                        </Link>

                    </li>
                    <li >
                        <Link to={"/"}>
                            درباره دیجی کالا
                        </Link>
                    </li>
                </ul>
            </nav>

            <nav style={{marginRight:"auto"}}>
                <ul>
                    <span className={classes.Titr}>
                    خدمات مشتریان

                    </span>
                    <li >
                        <Link to={"/"}>
                            پاسخ به پرسش های متدوال
                        </Link>
                    </li>
                    <li >
                        <Link to={"/"}>
                            رویه های باز گرداندن کالا
                        </Link>
                    </li>

                    <li >
                        <Link to={"/"}>
                            شرایط استفاده
                        </Link>
                    </li>
                    <li >
                        <Link to={"/"}>
                            حریم خصوصی
                        </Link>
                    </li>
                    <li >
                        <Link to={"/"}>
                            گزارش باگ
                        </Link>
                    </li>

                </ul>
            </nav>
        </div>

            <div className={classes.Nav} >
                <div style={{marginLeft:"30px"}}>
                    با ما همراه باشید
                </div>
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
                {/*    <span className="icon-aparat"></span>*/}
                {/*</NavigationFooterItem>*/}
            </div>
                <div className={classes.EmailInput} >
                    <input  className={classes.inputEmail} placeholder="برای دریافت اخبار ایمیل خود را وارد کنید" />
                    <button className={classes.inputButton}  >ثبت  </button>
                </div>

        </div>
    )
}
export default NavigationFooterItems;