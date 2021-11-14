import React from 'react';
import InnerImageZoom from "react-inner-image-zoom";

const ImageZoom=(props)=>{
    const {ProductPicture}=props
    let graphImage = require('../../../../../assets/Upload/' + ProductPicture);

    return(
        <>
           <InnerImageZoom src={graphImage.default} />
        </>
    )
}
export default ImageZoom;