import React from 'react';
import BookContextProvider from './Context/BookContext';
import NavBar from './Components/NavBar';
import BookList from './Components/BookList';


function App() {
  return (
    <div className="App">
      <BookContextProvider>
        < NavBar />
        < BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
