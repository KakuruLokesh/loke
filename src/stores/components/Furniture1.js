import React from "react";
import { furnitureData } from "../data/furniture";
const Furniture1 = () => {
    const Firstfiveimages=furnitureData.slice(0,5)
    return (
       <>
       <h2>Furniture</h2>
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
export default Furniture1;