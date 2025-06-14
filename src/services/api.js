const API_KEY="5ee77f44bbce55ceafef3cfb2a8696ba";
const BASE_URL="https://api.themoviedb.org/3";

export const getPopularMovies=async() =>{
    const response=await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
    const data=await response.json();
    return data.results
};

export const getMovies=async(query) =>{
    const response=await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data=await response.json();
    return data.results
};