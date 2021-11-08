import React, {useEffect, useState} from "react";
import classes from './account.module.scss'
import RightMenu from "../Profile/RightMenu/RightMenu";
import Toolbar from "../../Header/toolbar/toolbar";
import Footer from "../../Footer/footer";
import {connect} from "react-redux";
import {loginAuthSuccess} from "../../../../../redux/data/auth/actions";
import {AllOrder, WaitOrder} from "../../../../../redux/data/ordersCount/actions";
import Login from "../../../Logn/Login";
import {Button, Col, Container, Modal, Row} from "react-bootstrap";



const MyProfile=(props)=>{
    const {auth,userdata}=props;
    //Modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSave = () => setShow(true);



    if(auth){
        return(

            <div>
                <Toolbar/>

                <div className={classes.Cart}>
                    <aside className={classes.CartContainers}>
                        <RightMenu/>
                    </aside>
                    <section className={classes.CartBuy}>
                        <span style={{color:"red"}}>
                                                    ویرایش اطلاعات
                        </span>

                        <Modal show={show} onHide={handleClose} style={{direction:"rtl"}}>
                            <Modal.Header closeButton>
                                <Modal.Title>ویرایش اطلاعات </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className={classes.Info}>

                                <div>
                                    نام:
                                    <input  name="fname" placeholder={userdata.FirstName}/>
                                </div>
                                <div>
                                    نام خانوادگی:
                                    <input name="lname" placeholder={userdata.LastName}/>
                                </div>
                                <div>
                                    شماره موبایل:
                                    <input name="mobile" placeholder={userdata.PhoneNumber}/>
                                </div>
                                <div>
                                آدرس ایمیل:
                                <input name="email" placeholder={userdata.email}/>
                                </div>
                                </div>


                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={handleSave}>
                                   ذخیره تغییرات
                                </Button>
                                <Button variant="secondary" onClick={handleClose}>
                                    بستن
                                </Button>

                            </Modal.Footer>
                        </Modal>

                        <section>
                            <Container>
                                <Row>
                                    <Col sm style={{padding:"0"}}>
                                        <div className={classes.Items} style={{padding:"2px"}}>
                                            <div className={classes.Title}>
                                                <div>
                                                    نام
                                                </div>

                                            </div>
                                            <div className={classes.value}>
                                                {userdata.FirstName}
                                            </div>
                                        </div>

                                    </Col>
                                    <Col sm style={{padding:"0"}}>
                                        <div className={classes.Items} style={{padding:"2px"}}>
                                            <div className={classes.Title}>
                                                <div>
                                                    نام خانوادگی
                                                </div>

                                            </div>
                                            <div className={classes.value}>
                                                {userdata.LastName}
                                            </div>
                                        </div>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm style={{padding:"0"}}>
                                        <div className={classes.Items} style={{padding:"2px"}}>
                                            <div className={classes.Title}>
                                                <div>
                                                    شماره موبایل
                                                </div>

                                            </div>
                                            <div className={classes.value}>
                                                {userdata.PhoneNumber}
                                            </div>
                                        </div>

                                    </Col>
                                    <Col sm style={{padding:"0"}}>
                                        <div className={classes.Items} style={{padding:"2px"}}>
                                            <div className={classes.Title}>
                                                <div>
                                                    پست الکترونیک
                                                </div>

                                            </div>
                                            <div className={classes.value}>
                                                {userdata.email}
                                            </div>
                                        </div>

                                    </Col>
                                </Row>
                            </Container>

                            <div className={classes.EditButton} >
                                <button variant="primary" onClick={handleShow} style={{outline: "none",
                                    border: "none",
                                    backgroundColor: "transparent"}}>
                                    <i className='fa fa-edit'></i>
                                </button>
                            </div>
                        </section>
                    </section>

                </div>
                <Footer/>
            </div>
        )
    }
    else {
        return(
            <Login />
        )

    }

}


const mapStateToProps  = (state) => {
    console.log(state.data);
    return {

        auth: state.data.auth.isLogin,
        userId:state.data.auth.userprofile,
        userdata:state.data.auth.userdata,
        counter:state.data.cntOrder.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        // dispatching actions returned by action creators
        ACTION_login_SUCCESS: (data) => dispatch(loginAuthSuccess(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
