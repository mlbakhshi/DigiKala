import React from "react";
import classes from './CartContainers.module.scss';
// import image from '../../../../../assets/Upload/';
import CartContainer from "./CartContainer/CartContainer";
import Auxx from "../../../../../hoc/Auxx/Auxx";
import {connect} from "react-redux";
import {DelOrder} from "../../../../../redux/data/ordersCount/actions";
import ImageZoom from "../../ProductDetail/ImageZoom/ImageZoom";
const CartContainers=(props)=>{
    const {ACTION_Orders_DELETE,OrdersList} = props;
    const handleDelete = (id) => {
        ACTION_Orders_DELETE(id)
        props.onRemoveItem&&props.onRemoveItem()
    }
    return(
        <Auxx>
            {
                Object.keys(OrdersList).map(ID =>
                    <div key={ID} className={classes.CartContainers}>
                        <div className={classes.Image} >
                            <div>
                                <img
                                    src={require('../../../../../assets/Upload/' + OrdersList[ID].ProductPicture).default}/>
                            </div>
                            <div className={classes.DelSection}>
                                <div className={classes.Del} onClick={() => handleDelete(OrdersList[ID].ID)}>
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        <div className={classes.detailBuy}>
                            <CartContainer onRemoveItem={props.onRemoveItem} key={"card"+ID} detailProduct={OrdersList[ID]} />
                        </div>
                    </div>

                )
            }
        </Auxx>
    )
}
const mapStateToProps  = (state) => {
    return {
        userId:state.data.auth.userprofile,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ACTION_Orders_DELETE: (data) => dispatch(DelOrder(data)),
    }
}


export default  connect(mapStateToProps, mapDispatchToProps)(CartContainers);