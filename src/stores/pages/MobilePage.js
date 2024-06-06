import React from 'react';
import Navbar from '../components/Navbar';
import { mobileData } from '../data/mobiles';
import { Link } from 'react-router-dom';

const MobilePage = () => {
    return (
        <>
            <Navbar />
            <div className='pageSection'>
                {mobileData.map((item) => (
                    <Link key={item.id} to={`/mobiles/${item.id}`} className='mobile-link'>
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

export default MobilePage;
