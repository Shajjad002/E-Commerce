import React, { useEffect, useState } from 'react'
import './NewCollection.css'
//import new_collections from '../Assets/new_collections';
import Item from '../Items/Item';
import { Collection } from 'mongoose';


 function NewCollection() {
    
    const [new_collections,setNew_Collection]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/newcollectiond')
        .then((response)=>response.json())
        .then((data)=>setNew_Collection(data));
    },[])

    return (
        <div className='new-collections'>
            <h1>NEW COLLECTION</h1>
            <hr />
            <p></p>
            <div className="collections">
                {new_collections.map((item,i)=>{
                    return <Item key={i} id={item.id}  name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    );
}
export default NewCollection;
