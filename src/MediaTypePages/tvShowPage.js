
import TypePage from ".//Type_page";
import {useEffect, useState} from "react";
import { tvList} from "../Apis/apis";
import css from './mediaPages.module.css'
const TvTypes=["Popular" ,"Airing Today","On The Air","Top Rated"]

const MoviesPage=()=>{
    const [tv,SetTv]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    useEffect(() => {
        tvList("popular").then(
            tren=>{
               const modified=tren.results.map(movie => ({...movie, media_type:'tv'}))

                console.log(modified)
                SetTv(modified)
                setIsLoading(false)
            }
        )
    }, []);
    return <div>
        {isLoading?<div className={css.loader}></div> : <TypePage mediaType={"tv"} listType={TvTypes} showList={tv}/> }

    </div>
}

export default MoviesPage