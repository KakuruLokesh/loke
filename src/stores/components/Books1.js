import React from "react";
import { booksData } from "../data/books";
const Books1 = () => {
    const Firstfiveimages=booksData.slice(0,5)
    return (
       <>
       <h2>Books</h2>
       <div className="prosection">
            {
                Firstfiveimages.map((item)=>{
                    return (
                        <div className="imgbox">
                            <img className="proimage" src={item.image} alt="" />
                        </div>
                    )
                })
            }
        </div>
       </>
    )
}
export default Books1;