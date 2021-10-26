import React, {useEffect, useState} from "react";
import classes from './Login.module.scss';
import digikalaLogo from '../../../assets/SVG/dg.png';
import {Button} from "react-bootstrap-buttons";
import {DetailProduct} from "../../../redux/data/auth/apiFunction";


const Login=({ setToken })=>{
    async function loginUser(credentials) {
        return fetch('http://localhost/site/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(data => data.json())
    }

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }


    return(
        <div className={classes.Login}>
            <div>
                <img src={digikalaLogo} />
            </div>
            <p className={classes.RegisterLoginNote}>
                ورود / ثبت نام
            </p>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className="d-grid gap-2" >
                        <input  type="text"
                                style={{width:"85%"}}
                                placeholder={" شماره موبایل یا ایمیل خود را وارد کنید\n"}
                                onChange={e => setUserName(e.target.value)}
                        />

                    </div>
                </div>

                <div>
                    <div className="d-grid gap-2"  >
                        <input type="password"
                               style={{width:"85%"}}
                               placeholder={"پسورد"}
                               onChange={e => setPassword(e.target.value)}
                        />

                    </div>

                </div>

                <div className="d-grid gap-2" >
                    <Button variant="primary"  style={{width:"85%",backgroundColor:"#ef394e",color:"white"}}>
                        ورود به دیجی کالا
                    </Button>
                </div>
            </form>

            <p className={classes.note}>
                با ورود و یا ثبت نام در دیجی‌کالا شما شرایط و قوانین استفاده از سرویس های سایت دیجی‌کالا و قوانین حریم خصوصی آن را می‌پذیرید.
            </p>
        </div>
    )
}
export default Login;