import css from '../Main_page/App.module.css'
import PendingIcon from '@mui/icons-material/Pending';
import { useNavigate } from 'react-router-dom';

const ShowCard=({movie})=>{
    const nav=useNavigate()

    const changeToMoiveapage=()=>{
        nav(`/movie_page?id=${movie.id}&type=${movie.media_type}`);
    }
    const image="https://image.tmdb.org/t/p/w154"+movie.poster_path
    return (
        <div className={css.movie}>
            <div className={css.imageItems}>
                <img onClick={changeToMoiveapage} className={css.movieImage} src={image} />
                <PendingIcon color="blue" className={css.dots} />
                <button
                    className={
                        movie.vote_average > 8.5 ? css.rating3 : movie.vote_average > 7 ? css.rating : css.rating2
                    }
                >
                    {parseFloat(movie.vote_average.toFixed(1)) * 10}
                </button>
            </div>
            <div className={css.imageParagraphs}>
                <div>
                    <div className={css.movieTitle}>{movie.name || movie.title}</div>
                    <div className={css.date}>{movie.release_date || movie.first_air_date}</div>
                </div>
                <div>{movie.date}</div>
            </div>
        </div>
    );

}

export default ShowCard