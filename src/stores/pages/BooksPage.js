import React from 'react';
import Navbar from '../components/Navbar';
import { booksData } from '../data/books';
import { Link } from 'react-router-dom';

const BookPage = () => {
    return (
        <>
            <Navbar />
            <div className='pageSection'>
                {booksData.map((item) => (
                    <Link key={item.id} to={`/books/${item.id}`}>
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

export default BookPage;
