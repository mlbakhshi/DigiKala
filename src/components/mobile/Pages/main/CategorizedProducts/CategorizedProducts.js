import React, {useEffect, useState} from 'react';
import classes from './CategorizedProducts.module.scss';
import SimpleSlickSlider from "./SimpleSlickSlider/SimpleSlickُSlider/SimpleSlickSlider";
import {MobileProducts} from "../../../../../redux/data/auth/apiFunction";

import pic1 from '../../../../../assets/images/mobilePics/Poco x3.jpg';
import pic2 from '../../../../../assets/images/mobilePics/Pco m3.jpg';
import pic3 from '../../../../../assets/images/mobilePics/Galaxy S20.jpg';
import pic4 from '../../../../../assets/images/mobilePics/iPhone 12.jpg';
import pic5 from '../../../../../assets/images/mobilePics/iPhone 12 Pro.jpg';
import pic6 from '../../../../../assets/images/mobilePics/Poco F3.jpg';
import pic7 from '../../../../../assets/images/mobilePics/Samsung A12.jpg';

const CategorizedProducts=(props)=>{

    // const [loading,setLoading]=useState(false);
    //
    // const [products,setProducts]=useState([]);
    //
    //
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // useEffect(async ()=>{
    //     let response=null;
    //     try {
    //         response=await MobileProducts();
    //     }catch (e){
    //
    //     }
    //     if(response?.success===true) {
    //         console.log(response.data);
    //         setProducts(response.data);
    //     }
    //
    // },[])


    const mobileProducts=[
        {mobilePic:pic1,title:"گوشی موبایل شیائومی مدل POCO X3 Pro M2102J20SG",price:"6000000"},
        {mobilePic:pic2,title:"گوشی موبایل شیائومی مدل POCO M3 M2010J19CG",price:"5000000"},
        {mobilePic:pic3,title:"گوشی موبایل سامسونگ مدل Galaxy A12 SM-A125F/DS",price:"10000000"},
        {mobilePic:pic4,title:"گوشی موبایل اپل مدل iPhone 12 A2404",price:"15000000"},
        {mobilePic:pic5,title:"گوشی موبایل اپل مدل iPhone 12 Pro Max A2412",price:"17000000"},
        {mobilePic:pic6,title:"گوشی موبایل شیائومی مدل POCO F3 5G M2012K11AG",price:"6500000"},
        {mobilePic:pic7,title:"گوشی موبایل سامسونگ مدل Galaxy A12 SM-A125F/DS",price:"6000000"},

    ]
    // if(products.length > 0) {
        return (

            <section className={classes.Category}>
                <div >
              <span >
                     گوشی موبایل
                  <hr style={{backgroundColor: "red",width:"20%",marginRight:"0"}}/>
              </span>
                </div>
                <div>
                    <SimpleSlickSlider
                        Products={mobileProducts}
                        // ProductsPics={SuperProductsPics}
                    />
                </div>
            </section>

            // <>
            //     {products.map(product=>
                    // <div className="container" style={{marginTop :"50px" , marginBottom : "50px" ,paddingTop:"30px" , paddingBottom:"30px"}}>
                    //     <div className="row ">
                    //
                    //         <div className="col-md-12 d-flex justify-content-between mx-2 border my-2">
                    //             <div className="row d-flex justify-content-between">
                    //                 <div className="col-2 d-flex flex-column" style={{textAlign : "center"}}><span className="mb-4" style={{fontWeight : "bold" , fontSize : "12px"}}>ایرلاین</span><span>{ticket.ticket.airline}</span></div>
                    //                 <div className="col-2 d-flex flex-column" style={{textAlign : "center"}}><span className="mb-4" style={{fontWeight : "bold" , fontSize : "12px"}}>مبدا</span><span>{ticket.ticket.origin}</span></div>
                    //                 <div className="col-2 d-flex flex-column" style={{textAlign : "center"}}><span className="mb-4" style={{fontWeight : "bold" , fontSize : "12px"}}>مقصد</span><span>{ticket.ticket.destination}</span></div>
                    //                 <div className="col-2 d-flex flex-column" style={{textAlign : "center"}}><span className="mb-4" style={{fontWeight : "bold" , fontSize : "12px"}}>قیمت</span><span>{ticket.ticket.price}</span></div>
                    //                 <div className="col-2 d-flex flex-column px-0" style={{textAlign : "center"}}><span className="mb-4" style={{fontWeight : "bold" , fontSize : "12px"}}>تاریخ بلیط</span><span>{ticket.ticket.date}</span></div>
                    //             </div>
                    //         </div>
                    //
                    //     </div>
                    // </div>
            //     )}
            // </>
        );
    // } else {
    //     return (<> Loading ... </> )
    // }
    // return(
    //     <section className={classes.Category}>
    //         <div >
    //           <span >
    //              <h6 >
    //                  گوشی موبایل
    //              </h6>
    //               <hr style={{backgroundColor: "red",width:"100px",marginRight:"0"}}/>
    //           </span>
    //         </div>
    //         <div>
    //             <SimpleSlickSlider Products={mobileProducts}
    //                         // ProductsPics={SuperProductsPics}
    //             />
    //         </div>
    //     </section>
    // )
}
export default CategorizedProducts;
