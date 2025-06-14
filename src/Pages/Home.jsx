import MovieCard
 from "../components/moviecard"
 import { useState,useEffect } from "react";
 import { getMovies, getPopularMovies } from "../services/api";
 
import "../css/Home.css"
function Home(){

    const[searchQuery,setSearchQuery]=useState("");
    const [movies,setMovies]=useState([]);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const loadPopularMovies=async () =>{
            try{
                const nMovies=await getPopularMovies()
                setMovies(nMovies)
            }catch(err){
                console.log(err)
                setError("Failed to load movies....")
            }
            finally{
                setLoading(false)

            }
        }
        loadPopularMovies()
    },[])
    {/*const movies=getPopularMovies()*/}

    const Search= async (e)=>{
        if(!searchQuery.trim())
            return 
        if(loading) 
            return
        
        setLoading(true)

        try{
                const searchresult=await getMovies(searchQuery)
                setMovies(searchresult)
                setError(null)
                
        }catch(err){
                console.log(err)
                setError("Failed to search movies...")
        }
        finally{
                setLoading(false)

        }
        
        
        {/*e.preventDefault()*/}
        
    }
    return(
        <div className="home">
            <form onSubmit={Search} className="search-form">
                <input type="text" placeholder="Search for movies.." className="search-input"
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}/>
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading?(<div className="loading">loading...</div>):(
            <div className="movies-grid">
                {movies.map((movie=> movie.title.toLowerCase().startsWith(searchQuery) && (
                    <MovieCard movie={movie} key={movie.id} />
                )
            ))}
            </div>
            )}
        </div>
    );
}

export default Home