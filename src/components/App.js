import './../App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/common/font.scss';
import React, {useEffect, useState} from "react";
import { useHistory } from 'react-router-dom'
import {ToastContainer, Zoom} from "react-toastify";

let AppDevice = require(`./desktop/desktop`);
// let AppDevice = require(`./mobile/mobile`);


function App() {
    const history = useHistory();
    const [activePage, setActivePage] = useState("/");


    useEffect(() => { // EVENT LISTNRE TO URL

        return history.listen((location) => {
            let pathName = window.location.href || "";
            setActivePage(pathName);
        })
    }, [history])

    return (
        <>
            <AppDevice.default activePage={activePage}/>

            <ToastContainer rtl={true} draggable={false} transition={Zoom} autoClose={5000}/>

        </>
    );


}


export default App;
