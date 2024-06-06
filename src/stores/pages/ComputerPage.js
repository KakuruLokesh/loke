import React from 'react';
import Navbar from '../components/Navbar';
import { computerData } from '../data/computers';
import { Link } from 'react-router-dom';

const ComputerPage = () => {
    return (
        <>
            <Navbar />
            <div className='pageSection'>
                {computerData.map((item) => (
                    <Link key={item.id} to={`/computer/${item.id}`}>
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

export default ComputerPage;
