import React, { useContext } from 'react';
import { BookContext } from '../Context/BookContext';

const NavBar = () => {
    const { books } = useContext(BookContext)
    return ( 
        <div className='navbar'>
            <h1> My reading List</h1>
            <p> Currently you have { books.length } {books.length > 1 ? 'books' : 'book' } to read</p>
        </div>
    );
}
 
export default NavBar;