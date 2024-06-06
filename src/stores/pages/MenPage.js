import React from 'react';
import Navbar from '../components/Navbar';
import { menData } from '../data/men';
import { Link } from 'react-router-dom';

const MenPage = () => {
    return (
        <>
            <Navbar />
            <div className='pageSection'>
                {menData.map((item) => (
                    <Link key={item.id} to={`/menswear/${item.id}`} className='mobile-link'>
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

export default MenPage;
