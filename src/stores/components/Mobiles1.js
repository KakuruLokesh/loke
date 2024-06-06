import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import { mobileData } from "../data/mobiles";
import Navbar from "./Navbar";

const Mobiles1 = () => {
    
    const Firstfiveimages = mobileData.slice(0, 5);
    return (
       <>
       
       <h2>Mobiles</h2>
       <div className="prosection">
            {
                Firstfiveimages.map((item) => (
                    <Link key={item.id} to={`/mobiles/${item.id}`} className='mobile-link'>
                        <div className="imgbox">
                            <img className="proimage" src={item.image} alt={item.name} />
                        </div>
                    </Link>
                ))
            }
        </div>
       </>
    );
};

export default Mobiles1;
