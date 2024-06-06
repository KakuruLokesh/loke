import React from 'react';
import Navbar from '../components/Navbar';
import { acData } from '../data/ac';
import { Link } from 'react-router-dom';

const ACPage = () => {
    return (
        <>
            <Navbar />
            <div className='pageSection'>
                {acData.map((item) => (
                    <Link key={item.id} to={`/airconditioners/${item.id}`} className='mobile-link'>
                        <div className='mobile-card'>
                            <div className='pageimg'>
                                <img src={item.image} alt={`${item.company} ${item.model}`} />
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

export default ACPage;
