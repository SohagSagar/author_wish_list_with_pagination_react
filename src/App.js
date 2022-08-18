import './App.css';
import { Routes, Route } from "react-router-dom";
import Author from './Components/Author';
import FavouriteAuthor from './Components/FavouriteAuthor';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div >

      
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='author' element={<Author />}></Route>
          <Route path='favourite-author' element={<FavouriteAuthor />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
