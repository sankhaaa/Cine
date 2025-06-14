import {createContext,useState,useEffect,useContext} from 'react'

const MovieContext=createContext()

export const useMovieContext=()=> useContext(MovieContext)

export const MovieProvider=({children})=>{
    const [favorites,setfavorites]=useState([])

    useEffect(()=>{
        const storedFavs=localStorage.getItem("favorites")
        if(storedFavs) setfavorites(JSON.parse(storedFavs))
    },[])

    useEffect(()=>{
        localStorage.setItem('favorites',JSON.stringify(favorites))
    },[favorites])

    const addTofavorites=(movie)=>{
        setfavorites(prev=>[...prev,movie])
    }

    const removeFromfavorites=(movieId)=>{
        setfavorites(prev=> prev.filter(movie=>movie.id !== movieId))
    }

    const isfavorite=(movieId)=>{
        return favorites.some(movie=>movie.id===movieId)
    }

    const value={
        favorites,addTofavorites,removeFromfavorites,isfavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}

