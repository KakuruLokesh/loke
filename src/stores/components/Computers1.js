import React from "react";
import { Link } from "react-router-dom"; // Ensure you're importing Link from react-router-dom
import { computerData } from "../data/computers";

const Computers1 = () => {
    const Firstfiveimages = computerData.slice(0, 5);
    return (
       <>
       <h2>Computers</h2>
       <div className="prosection">
            {
                Firstfiveimages.map((item) => (
                    <Link key={item.id} to={`/computer/${item.id}`} className='computer-link'>
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

export default Computers1;
