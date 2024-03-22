import Header from '../Header/header'
import {useEffect,useState} from "react";
import {useLocation} from 'react-router-dom'
import {requestMovie, requestTv} from "../Apis/apis";
import css from './show.module.css'
import {MdPlaylistAddCircle,MdBookmarkAdd,MdStarRate} from 'react-icons/md'
import {AiFillHeart,AiOutlineArrowRight} from 'react-icons/ai'
import YouTube from 'react-youtube';

const MoviePage=()=>{
    const [movie,setMovie]=useState(null)
    const [trailer,setTrailer]=useState([])
    const [loading,setLoading]=useState([])
    const [watchTrailerClicked,setWactchTrailerClicked]=useState(false)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const itemId = searchParams.get('id');
    const type=searchParams.get('type')
    console.log(type)
    useEffect(()=>{
        type==="movie" ?
       requestMovie(itemId).then(
            tren=>{
                setMovie(tren)
                setLoading(false)
                const tempTrailer=tren.videos.results.filter((item)=>item.name.includes("Trailer" )
                    ||item.name.includes("Official" ))
                setTrailer(tempTrailer)
                console.log(tren)


            }
        ):
        requestTv(itemId).then(
            tren=>{
                    setMovie(tren)
                    setLoading(false)
                const tempTrailer=tren.videos.results.filter((item)=>item.name.includes("Trailer" )
                    ||item.name.includes("Official" ))
                setTrailer(tempTrailer)
                console.log(tren)
            }

        )
    },[])

    const changeWatchTraillerClicked=()=>{
        setWactchTrailerClicked((old)=>!old)
    }

    return<div>
        <Header/>
        {loading? <div className={css.loader}>

        </div> : (<div className={css.movieDetails}>
            {movie.backdrop_path!==null ? <img className={css.imageBackground} src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}/>
                : <div className={css.imageBackground2}></div>
            }

            <div className={css.imageAndWatchNow}>
                <img className={css.movieImage} src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}/>
                <a  className={css.watchNow} href={movie.homepage}>Watch now</a>
            </div>
            <div className={css.rightSide}>
                <div className={css.titleText}>
                    {movie.name}
                </div>
            <div className={css.rowItems}>
                <div className={css.ratingAndText}>
                    <button
                        className={
                            movie.vote_average > 8.5 ? css.rating3 : movie.vote_average > 7 ? css.rating1 : css.rating2
                        }
                    >
                        {parseFloat(movie.vote_average.toFixed(1)) * 10}
                    </button>
                    <div className={css.userRating}>
                        users Rating
                    </div>

                </div>
                <MdBookmarkAdd className={css.icons}/>
                <MdPlaylistAddCircle className={css.icons}/>
                <MdStarRate className={css.icons}/>
                <AiFillHeart className={css.icons}/>
                <button className={css.watchTrailerNow} onClick={changeWatchTraillerClicked}>watch trailer now
                    <AiOutlineArrowRight   className={css.arrow}/>
                </button></div>


                <div className={css.overview}>
                    {movie.overview}
                </div>
            </div>
            {watchTrailerClicked &&
                <div className={css.trailerContainer}>
                    <img onClick={changeWatchTraillerClicked}
                         className={css.blurBackground}
                         src={"https://img.freepik.com/premium-photo/grungy-textured-blank-surface-abstract-grey-background-dirty-poster-wallpaper-with-rough-grained-sto_124507-10829.jpg"}
                    />
                    <YouTube className={css.trailerVideo} videoId={trailer[0].key}/>
                    <button onClick={changeWatchTraillerClicked} className={css.cancelButton}>x</button>
            </div>

                }

        </div>)}
    </div>
}
export default MoviePage