import React from "react";
import { womanData } from "../data/woman";
const Woman1 = () => {
    const Firstfiveimages=womanData.slice(0,5)
    return (
       <>
       <h2>Women's Wear</h2>
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
export default Woman1;