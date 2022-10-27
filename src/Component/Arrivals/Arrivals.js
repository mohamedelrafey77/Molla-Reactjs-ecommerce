import React from "react";
import Data from '../../Api/Data';
import ProductItem from "./ProductItem/ProductItem";


const Arrivals = ()=>{
    const Dummy_products = Data.Products.map((item)=>{
        return(
           <ProductItem title={item.title} price={item.price} img={item.img} hover={item.hover}
           new={item.new} sale={item.sale} />
        )
    })
    return(
        <section className="arrivals">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>New Arrivals</h2>
                    </div>
                </div>
                <div className="row">
                    {Dummy_products}
                </div>
            </div>
        </section>
    )
}


export default Arrivals;