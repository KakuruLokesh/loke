import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../stores/components/Navbar";
import { booksData } from "../stores/data/books";
import { useCart } from "../stores/context/CartContext";


const BookSingle = () =>{
    const {id} = useParams()
    const {addToCart, cartItems}=useCart()
    
    const product = booksData.find((item)=>item.id ===id)
    return (
       <>
       <Navbar />
       <div className="indpage">
            <div className="indimg">
                <img src={product.image} alt=""/>
            </div>
            <div className="inddetails space">
                <div className="indcompany">
                    <h1>{product.company}</h1>
                </div>
            <div className="indmodel space">
                <h2>{product.model}</h2>
            </div>
            <div className="indprice space">
                <h1>{product.price}</h1>
            </div>
            <div className="inddescription space">
                <h2>{product.description}</h2>
            </div>
            <button onClick={()=>addToCart(product)} >Add to cart</button>
            </div>
        </div>
       </>
    )
}

export default BookSingle