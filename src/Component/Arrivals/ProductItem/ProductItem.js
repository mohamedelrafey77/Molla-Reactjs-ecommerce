import React from "react";
import './ProductItem.css';


const ProductItem = (props)=>{
    return(
        <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="box">
                <div className="img-box">
                    <img src={props.img} />
                    <div className="img-overlay">
                        <img src={props.hover} />
                    </div>
                </div>
                <div className="text-box">
                    <a>{props.title}</a>
                    <span>{props.price}</span>
                    <div className="action">
                        <button>Add To cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProductItem;