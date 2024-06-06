import React from "react";
import { acData } from "../data/ac";

const Ac1 = () => {
    const Firstfiveimages = acData.slice(0, 5);
    return (
        <>
            <h2 className="section-title">Air Conditioners</h2>
            <div className="prosection">
                {Firstfiveimages.map((item, index) => {
                    return (
                        <div className="imgbox" key={index}>
                            <img className="proimage" src={item.image} alt={item.name} />
                            <div className="img-description">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Ac1;
