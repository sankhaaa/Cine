
import './css/App.css'
import Home from './Pages/Home';

import {Routes,Route} from "react-router-dom"
import Favorite from './Pages/favorite.jsx';
import NavBar from './components/navbar.jsx';
import { MovieProvider } from './context/MovieContext.jsx';
function App() {
  return (
    <MovieProvider>
      <NavBar/>
      <main className="main-content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorite/>}/>
      </Routes>
    </main>
    
    </MovieProvider>
    
    
    
   
    
  );
}





export default App
