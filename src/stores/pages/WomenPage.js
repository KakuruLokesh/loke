import React from 'react';
import Navbar from '../components/Navbar';
import { womanData } from '../data/woman';
import { Link } from 'react-router-dom';

const WomanPage = () => {
    return (
        <>
            <Navbar />
            <div className='pageSection'>
                {womanData.map((item) => (
                    <Link key={item.id} to={`/womenswear/${item.id}`} className='mobile-link'>
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

export default WomanPage;
