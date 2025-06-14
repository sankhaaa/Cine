import "../css/Favorites.css"
import { useMovieContext } from "../context/MovieContext"
import MovieCard from "../components/moviecard"


function Favorite(){
    const { favorites } = useMovieContext();
    if (favorites) {
      return (
        <div className="favorites">
          <h2>Your Favorites</h2>
          <div className="movies-grid">
            {favorites.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      );
    }
  
    return( 
    <div className="favorites-empty">
        <h2>No Favorites Added Yet</h2>
        <p>Start adding movies to your favorites section.</p>
    </div>
    )
}

export default Favorite