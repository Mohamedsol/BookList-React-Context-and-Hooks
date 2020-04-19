import React, { useContext, useState } from 'react';
import { BookContext } from '../Context/BookContext';

const BookForm = () => {
    const { addBook } = useContext(BookContext)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author)
        setTitle('')
        setAuthor('')
    }    
    return ( 
        <form onSubmit={handleSubmit}>
        <input onInput={(e) => setTitle(e.target.value)} type='text' value={title} placeholder='Enter a book title..'/>
        <input onInput={(e) => setAuthor(e.target.value)} value={author} type='text' placeholder='Author .. '/>
        <input type='submit' value='Add book'/>
        </form>
     );
}
 
export default BookForm;