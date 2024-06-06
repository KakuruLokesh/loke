import React from 'react';
import Navbar from '../components/Navbar';
import { kitchenData } from '../data/kitchen';
import { Link } from 'react-router-dom';

const KitchenPage = () => {
    return (
        <>
            <Navbar />
            <div className='pageSection'>
                {kitchenData.map((item) => (
                    <Link key={item.id} to={`/kitchen/${item.id}`} className='mobile-link'>
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

export default KitchenPage;
