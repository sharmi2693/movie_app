import './Styles.css';
import MovieData from "./Movielist"
import { AddMovie } from './Addmovie';
import { Route, Routes} from "react-router-dom";
// import { MovieCard } from './MovieCard';
import {Portal} from './Portal'
import Login from './Login';
import Register from './Register';


function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/portal" element={<Portal/>}>
          <Route path="addmovie" element={<AddMovie/>}/>
          <Route path="movie" element={<MovieData/>}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;