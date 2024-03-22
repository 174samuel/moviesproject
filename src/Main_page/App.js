import css from './App.module.css'
import css2 from './App2.module.css'
import {useEffect, useState} from "react";
import {trendingRequest} from '../Apis/apis'
import ShowCard from '../Show_card/show_card'
import { useNavigate } from 'react-router-dom';
import Header  from '../Header/header'



function App() {
    const [loading,setLoading]=useState(true)
    const [trending,setTrending]=useState([])
    const [trendingChoice,setTrendingChoice]=useState("all")
    const [inputValue, setInputValue] = useState('');
    const nav=useNavigate()

    const handleInputChange = (event) => {
        console.log(inputValue)
        setInputValue(event.target.value);
    };
    const buttonStyles = [
        {
            type: 'all',
            className: trendingChoice === 'all' ? `${css2.trendingButtonClicked} ${css2.trendingButton}` : `${css2.trendingButtonOne} ${css2.trendingButton}`,
            label: 'All',
        },
        {
            type: 'movie',
            className: trendingChoice === 'movie' ? `${css2.trendingButtonTwoClicked} ${css2.trendingButtonClicked} ${css2.trendingButton}` : `${css2.trendingButtonTwo} ${css2.trendingButton}`,
            label: 'Movies',
        },
        {
            type: 'tv',
            className: trendingChoice === 'tv' ? `${css2.trendingButtonThreeClicked} ${css2.trendingButton} ${css2.trendingButtonClicked}` : `${css2.trendingButtonThree} ${css2.trendingButton}`,
            label: 'TV',
        },
    ];

    useEffect(()=>{

        trendingRequest("all").then(
            tren=>{
                const filtered= tren.results.filter((item) =>
                    item.title !== "The Conference"
                )
                tren={
                    ...tren,
                    results:filtered
                }
                console.log(tren)
                setTrending(tren)
                setLoading(false)

            }
        )
    },[])
    const changeRouteToSearchResults=()=>{
        nav(`/search_results?search=${inputValue}`)
    }


    const changeTrending=(choice)=>{
        trendingRequest(choice).then(
            tren=>{
                const filtered= tren.results.filter((item) =>
                    item.title !== "The Conference"
                )
                tren={
                    ...tren,
                    results:filtered
                }
                console.log(tren)
                setTrending(tren)

            }
        )
    }
    const buttonClicked=(value)=>{
        setTrendingChoice(value)
        changeTrending(value)
    }




    const movieContainer = ()=>{
        return<div   className={css.allTrendingContainer}>
            {trending.results.map((item)=><ShowCard movie={item}/>)}
        </div>
    }

    return (
        <div>
            <Header/>

            <div className={css.main}>
                <div className={css.searchContainer}>
                    <img className={css.searchImg} src="https://image.tmdb.org/t/p/w1280/bMRofddQE58ToKM7GtdJy6MuKoY.jpg"/>
                    <div className={css.welcome}>
                        Welcome.
                    </div>
                    <div className={css.Millions}>
                        Millions of movies, TV shows and people to discover. Explore now.
                    </div>
                    <div className={css.searchAndbutton}>
                        <input placeholder="Search for a movie, tv show, person......" onChange={handleInputChange} className={css.search}/>
                        <button onClick={changeRouteToSearchResults} className={css.searchbutton}> search </button>
                    </div>
                </div>
            </div>
            <div className={css2.trendingcChoiceContainer}>
                <div className={css2.trendingWord}>
                    Trending
                </div>
                <div className={css2.sectionContainer}>
                    {buttonStyles.map((item)=>{
                        return  <button key={item.type} className={item.className}
                                        onClick={()=>buttonClicked(item.type)}
                        > {item.label}</button>
                    })}
                </div>

            </div>
            {loading? <div className={css.loader}> </div>:movieContainer()}
        </div>

    );
}

export default App;
