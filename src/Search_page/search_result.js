import {useEffect, useState} from "react";
import {Search} from "../Apis/apis";
import {useLocation} from "react-router-dom";
import Header from '../Header/header'
import ShowCard from '../Show_card/show_card'
import css from './search.module.css'
const SearchList=()=>{
   const [allMovies,setALlMovies]=useState( [])
    const [allTvShows,setAllTvShows]=useState([])
    const [content,setContent]=useState()
    const[choice,setChoice]=useState("movies")
    const [isLoading,setIsLoading]=useState([])
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const search = searchParams.get('search');
    console.log(search)
    useEffect(() => {
        Search(search,"movie").then(
            tren=>{
                console.log(tren)
                var filtered=tren.results.filter((item)=>item.vote_average !== 0 && item.poster_path !== null).map(movie => ({...movie, media_type:'movie'}))
                filtered.sort((a, b) => b.vote_average - a.vote_average);
                tren={...tren,filtered}
                console.log(tren)
                setALlMovies(tren)
                setContent(tren)
                setIsLoading(false)


            }
        )
        Search(search,"tv").then(
            tren=>{
                console.log(tren)
                const filtered=tren.results.filter((item)=>item.vote_average !== 0 && item.poster_path !== null).map(movie => ({...movie, media_type:'tv'}))
                filtered.sort((a, b) => b.vote_average - a.vote_average);
                tren={...tren,filtered}
                console.log(tren)
                setAllTvShows(tren)

            }
        )


    }, []);
    const changeChoice=(target)=>{
        if (target === "movies") {
            setContent(allMovies);
            setChoice(target);
        } else {
            setChoice(target);
            setContent(allTvShows);
        }
    }
    return<div>
        <Header/>
        <div className={css.main} >
        <div className={css.buttonsContainer}>
            <button onClick={()=> changeChoice("movies")} className={choice==="movies"? css.buttonClicked : css.button}>
                movies
            </button>
            <button onClick={()=> changeChoice("tv")} className={choice !=="movies"? css.buttonClicked : css.button}>
                Tv show
            </button>
        </div>
    </div>


        {isLoading?<div className={css.loader}></div>: <div className={css.grid} >
            {content.filtered.map((item)=>{
                    return<div className={css.gridItem}>
                        <ShowCard movie={item}/>
                    </div>
                }
            )}
        </div> }


    </div>
}
export default SearchList