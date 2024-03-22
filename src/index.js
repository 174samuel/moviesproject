import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Main_page/App';
import reportWebVitals from './reportWebVitals';
import MoviesPage from "././MediaTypePages/moviesPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SearchList from './Search_page/search_result'
import MoviePage from "./Show_page/show_page";
import TvShowPage from "./MediaTypePages/tvShowPage";
const AppRouter = () => {
    return <Routes>
        <Route path={'/'} index={true} element={<App/>}/>
        <Route path={'/movies'}  element={<MoviesPage/>}/>
        <Route path={'/tv'}  element={<TvShowPage/>}/>
        <Route path={'/search_results'}  element={<SearchList/>}/>
        <Route path={ '/movie_page'}  element={<MoviePage/>}/>
        <Route path={'*'} element={<App/>}/>
    </Routes>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
