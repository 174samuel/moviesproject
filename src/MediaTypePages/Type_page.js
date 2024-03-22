import css from './mediaPages.module.css'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {movieList, tvList} from "../Apis/apis";
import {useEffect, useState} from "react";
import ShowCard from "../Show_card/show_card";
import Header from "../Header/header";

const sort = ["Popularity Descending", "Popularity Ascending", "Rating Descending", "Rating Ascending", "Title (A-Z)", "Title (Z-A)"]

const TypePage = ({mediaType, listType, showList}) => {
    const [isClickedType, setIsClickedType] = useState(false)
    const [isClickedSort, setIsClickedSort] = useState(false)
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [wantedType, setWantedType] = useState("Popular")
    const [wantedSort, setWantedSort] = useState("")
    useEffect(() => {
        setList(showList)
        setIsLoading(false)
    }, [])
    const ClickMovies = () => {
        setIsClickedType(!isClickedType)

    }
    const ClickSort = () => {
        setIsClickedSort(!isClickedSort)

    }

    const changeMovieList = (target) => {
        const targeted = target.replace(/([^ ]) /g, "$1_").toLowerCase()
            .toLowerCase();
        mediaType === "movies" ?
            movieList(targeted.toLowerCase()).then(
                tren => {
                    console.log(tren.results)
                    setList(tren.results)
                    setIsLoading(false)
                    setWantedType(target)
                }
            ) :
            tvList(targeted.toLowerCase()).then(
                tren => {
                    console.log(tren.results)
                    setList(tren.results)
                    setIsLoading(false)
                    setWantedType(target)
                }
            )

    }

    const sorting = (targetSort) => {
        setWantedSort(targetSort);

        if (targetSort === "Popularity Descending") {
            setList([...list].sort((a, b) => a.popularity - b.popularity));
        } else if (targetSort === "Popularity Ascending") {
            setList([...list].sort((a, b) => b.popularity - a.popularity));
        } else if (targetSort === "Rating Descending") {
            setList([...list].sort((a, b) => a.vote_average - b.vote_average));
        } else if (targetSort === "Rating Ascending") {
            setList([...list].sort((a, b) => b.vote_average - a.vote_average));
        } else if (targetSort === "Title (A-Z)") {
            setList([...list].sort((a, b) => a.title.localeCompare(b.title)));
        } else if (targetSort === "Title (Z-A)") {
            setList([...list].sort((a, b) => b.title.localeCompare(a.title)));
        } else {
            console.log("error");
        }
    };

    return <div>
        <Header/>
        <div className={css.main}>
            <div className={css.leftSide}>
                <div className={css.wantedType}>
                    {wantedType + "  " + mediaType}
                </div>
                {isClickedType ?
                    <div className={css.clickedContainer}>
                        <div onClick={ClickMovies} className={css.movieManipulationContainer}>
                            <div className={css.text}>
                                {mediaType}
                            </div>
                            <AiOutlineArrowDown className={css.arrow}/>
                        </div>
                        <div className={css.list}>
                            {listType.map((prop) => {
                                return wantedType !== prop ?
                                    <button onClick={() => changeMovieList(prop)} className={css.buttonText}>{prop}</button>
                                    : <button onClick={() => changeMovieList(prop)} className={css.clickedButton}>{prop}</button>
                            })}
                        </div>
                    </div>
                    : <div onClick={ClickMovies} className={css.movieManipulationContainer}>
                        <div className={css.text}>
                            {mediaType}
                        </div>
                        <AiOutlineArrowRight className={css.arrow}/>
                    </div>
                }


                {isClickedSort ? <div className={css.clickedContainer}>
                        <div onClick={ClickSort} className={css.movieManipulationContainer}>
                            <div className={css.text}>
                                Sort
                            </div>
                            <AiOutlineArrowDown className={css.arrow}/>
                        </div>
                        <div className={css.list}>
                            {sort.map((prop) => {
                                return wantedSort !== prop ?
                                    <button onClick={() => sorting(prop)} className={css.buttonText}>{prop}</button>
                                    : <button onClick={() => sorting(prop)} className={css.clickedButton}>{prop}</button>
                            })}
                        </div>
                </div>
                    : <div onClick={ClickSort} className={css.movieManipulationContainer}>
                        <div className={css.text}>
                            Sort
                        </div>
                        <AiOutlineArrowRight className={css.arrow}/>
                    </div>
                }

            </div>
            <div className={css.grid}>
                {isLoading ? <div className={css.loader}></div> : list.map((item) => {
                        return <div className={css.gridItem}>
                            <ShowCard movie={item}/>
                        </div>
                    }
                )}
            </div>
        </div>
    </div>
}


export default TypePage