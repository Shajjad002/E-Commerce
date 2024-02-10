import React, { useContext } from "react";
import './CSS/Product.css';
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../Components/Breadcrums/Breadcrums";

function Product() {
  const {all_product}=useContext(ShopContext);
  const{productId} =useParams();
  const product = all_product.find((e)=> e.id===Number(productId));
  return (
    <div className="">
      <Breadcrums product={product}/>
    </div>
  );
}

// #endregion

export default Product;
