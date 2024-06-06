import React from "react";
import { watchData } from "../data/watch";
const Watch1 = () => {
    const Firstfiveimages=watchData.slice(0,5)
    return (
       <>
       <h2>Watches</h2>
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
export default Watch1;