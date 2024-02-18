import React from 'react'
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png";


 function ProductDisplay(props) {
    const {product}=props;
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='prodcutdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdiplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old"> ${product.old_price}</div>
                    <div className="productdisplay-right-price-new"> ${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae mollitia laborum nostrum error. 
                    Mollitia, laboriosam sed quae doloremque porro illum aut illo nisi enim ea vel. Perferendis sunt iusto officiis?
                </div>
                <div className="productdisplay-right-size">
                    <h2>Select Size</h2>
                    <div className="productdisplay-right-sizes">
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                        <p>XL</p>
                        <p>XXL</p>
                    </div>
                    <button>ADD TO CART</button>
                    <p className="productdisplay-right-category"><span>Category : </span> Women, T-Shirt, Crop Top</p>
                    <p className="productdisplay-right-category"><span>Tags : </span> Modern, Latest</p>

                </div>
            </div>
        </div>
    );
}
export default ProductDisplay;
