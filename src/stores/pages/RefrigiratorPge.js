import React from 'react';
import Navbar from '../components/Navbar';
import { fridgeData } from '../data/fridge';
import { Link } from 'react-router-dom';

const RefrigiratorPage1 = () => {
    return (
        <>
            <Navbar />
            <div className='pageSection'>
                {fridgeData.map((item) => (
                    <Link key={item.id} to={`/refrigerators/${item.id}`}>
                        <div>
                            <div className='pageimg'>
                                <img src={item.image} alt="" />
                            </div>
                            <div className='promodel'>
                                {item.company}, {item.model}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default RefrigiratorPage1;
