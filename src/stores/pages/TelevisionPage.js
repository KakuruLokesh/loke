import React from 'react';
import Navbar from '../components/Navbar';
import { tvData } from '../data/tv';
import { Link } from 'react-router-dom';

const TVPage = () => {
    return (
        <>
            <Navbar />
            <div className='pageSection'>
                {tvData.map((item) => (
                    <Link key={item.id} to={`/television/${item.id}`} className='mobile-link'>
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

export default TVPage;
