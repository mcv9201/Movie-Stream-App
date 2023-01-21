import {useEffect, useState} from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";
//2ddca804
const API_URL = 'https://www.omdbapi.com?apikey=2ddca804'
const App = () =>{
    const [movies,setMovies] = useState([])
    const [searchTerm,setSearchTerm] = useState()

    const searchMovies = async(title)=>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search)
    } 

    useEffect(()=>{
        searchMovies('Spiderman')
    },[])
    return(
    <div className="app">
        <h1>StreamCloud</h1>
        <div className="search">
            <input 
                placeholder="Search for movies"
                // value = "Batman"
                onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <img
                src={SearchIcon}
                onClick={()=>searchMovies(searchTerm)}
            />
        </div>
        {
            movies?.length>0?(
                <div className="container">
                    {movies.map((i)=>(<MovieCard movie={i}/>))}
                </div>
            ):(
                <div className="empty">
                    <h2>No Movies Found</h2>    
                </div>
            )
        }
        
    </div>
    )
}

export default App;
