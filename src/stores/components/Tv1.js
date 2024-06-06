import React from "react";
import { tvData } from "../data/tv";
const Tv1 = () => {
    const Firstfiveimages=tvData.slice(0,5)
    return (
       <>
       <h2>Televisions</h2>
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
export default Tv1;