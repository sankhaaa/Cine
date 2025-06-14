import "../css/MovieCard.css"
import { useMovieContext } from "../context/MovieContext"


function MovieCard({movie}){
   const {isfavorite,addTofavorites,removeFromfavorites} = useMovieContext()
    const favorite=isfavorite(movie.id)
   function onFavClick(e){
            e.preventDefault()
            if(favorite) removeFromfavorites(movie.id)
            else addTofavorites(movie)
    }
   
   
    return(
      <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite?"active" : ""}`} onClick={onFavClick}>
                            ❤
                </button>
            </div>
        </div>
        {<div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>}
    </div>
    )

}
export default MovieCard