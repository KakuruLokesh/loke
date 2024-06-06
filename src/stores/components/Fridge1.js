import React from "react";
import { fridgeData } from "../data/fridge";
const Fridge1 = () => {
    const Firstfiveimages=fridgeData.slice(0,5)
    return (
       <>
       <h2>Refrigirators</h2>
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
export default Fridge1;