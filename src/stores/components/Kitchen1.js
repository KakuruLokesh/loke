import React from "react";
import { kitchenData } from "../data/kitchen";
const Kitchen1 = () => {
    const Firstfiveimages=kitchenData.slice(0,5)
    return (
       <>
       <h2>kitchen</h2>
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
export default Kitchen1;