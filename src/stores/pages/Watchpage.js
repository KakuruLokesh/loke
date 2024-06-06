import React from 'react';
import Navbar from '../components/Navbar';
import { watchData } from '../data/watch';
import { Link } from 'react-router-dom';

const WatchPage = () => {
    return (
        <>
            <Navbar />
            <div className='pageSection'>
                {watchData.map((item) => (
                    <Link key={item.id} to={`/watches/${item.id}`} className='mobile-link'>
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

export default WatchPage;
