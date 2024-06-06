import React, { useEffect, useState } from 'react'
import "./Popular.css"
//import data_product from '../Assets/data';
//import man_product from '../Assets/man';
import Item from '../Items/Item';


 function Popular() {
    const [popularProducts, setPopularProducts]= useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:4000/popularinwomen')
        .then((response)=>response.json())
        .then((data)=>setPopularProducts(data));
    },[])


    return (
        <div className='popular'>
           <div className="women-item">
                <h1>POPULAR IN WOMEN</h1>
                <hr />
                <div className="popular-item">
                    {data_product.map((item,i)=>{
                        return <Item key={i} id={item.id}  name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })}
                </div>
           </div>
            <div className="man-item">
                <h1>POPULAR IN MEN</h1>
                <hr />
                <div className="popular-item">
                    {popularProducts.map((item,i)=>{
                        return <Item key={i} id={item.id}  name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })}
                </div>
            </div>
            
        </div>
        
        
        
    
    );
}

export default Popular;
