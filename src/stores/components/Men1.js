import React from "react";
import { menData } from "../data/men";
const Men1 = () => {
    const Firstfiveimages=menData.slice(0,5)
    return (
       <>
       <h2>Men's Wear</h2>
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
export default Men1;