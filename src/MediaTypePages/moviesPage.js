
import TypePage from ".//Type_page";
import {useEffect, useState} from "react";
import {movieList} from "../Apis/apis";
import css from './mediaPages.module.css'
const movieTypes=["Popular" ,"Now Playing","Upcoming","Top Rated"]

const MoviesPage=()=>{
    const [movies,SetMovies]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    useEffect(() => {
        movieList("popular").then(
            tren=>{
                const modified=tren.results.map(movie => ({...movie, media_type:'movie'}))

                console.log(tren.results)
                SetMovies(modified)
                setIsLoading(false)
            }
        )
    }, []);
    return <div>
        {isLoading?<div className={css.loader}></div> : <TypePage mediaType={"movies"} listType={movieTypes} showList={movies}/> }

    </div>
}

export default MoviesPage