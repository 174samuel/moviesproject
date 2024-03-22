
export const trendingRequest = async(target)=>{

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2QzNmQxMDg3NGE4NjI0YzFiODUwYzNiODA3MTkzMiIsInN1YiI6IjY1MmJjOWYyMzU4ZGE3MDBhZDM1NTNkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YnvpcawwPceVFyHAPF_cmxgMFlfW3Q4dyTteDfL5Hnc'
        }
    };
        try{
            const request =await fetch(`https://api.themoviedb.org/3/trending/${target}/day?language=en-US`, options)
            const response = await request.json()
            return response

        }
        catch (error){
            console.error('Error during API call:', error.message);
        }

        
}

export const movieList = async(target)=>{
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2QzNmQxMDg3NGE4NjI0YzFiODUwYzNiODA3MTkzMiIsInN1YiI6IjY1MmJjOWYyMzU4ZGE3MDBhZDM1NTNkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YnvpcawwPceVFyHAPF_cmxgMFlfW3Q4dyTteDfL5Hnc'
        }
    };

        const request =await fetch(`https://api.themoviedb.org/3/movie/${target}?language=en-US&page=1`, options)
        const response = await request.json()
    return response
}
export const tvList = async(target)=>{
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2QzNmQxMDg3NGE4NjI0YzFiODUwYzNiODA3MTkzMiIsInN1YiI6IjY1MmJjOWYyMzU4ZGE3MDBhZDM1NTNkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YnvpcawwPceVFyHAPF_cmxgMFlfW3Q4dyTteDfL5Hnc'
        }
    };

    const request =await fetch(`https://api.themoviedb.org/3/tv/${target}?language=en-US&page=1`, options)
    const response = await request.json()
    return response
}



    export const requestMovie = async(target)=>{
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2QzNmQxMDg3NGE4NjI0YzFiODUwYzNiODA3MTkzMiIsInN1YiI6IjY1MmJjOWYyMzU4ZGE3MDBhZDM1NTNkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YnvpcawwPceVFyHAPF_cmxgMFlfW3Q4dyTteDfL5Hnc'
            }
        };

        const request =await fetch(` https://api.themoviedb.org/3/movie/${target}?api_key=dcd36d10874a8624c1b850c3b8071932&append_to_response=videos,credits'
`, options)
        const response = await request.json()
        console.log(response)
        return response
    }
export const requestTv= async(target)=>{
    var response=""
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2QzNmQxMDg3NGE4NjI0YzFiODUwYzNiODA3MTkzMiIsInN1YiI6IjY1MmJjOWYyMzU4ZGE3MDBhZDM1NTNkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YnvpcawwPceVFyHAPF_cmxgMFlfW3Q4dyTteDfL5Hnc'
        }
    };
        try{
            const request =await fetch(`https://api.themoviedb.org/3/tv/${target}?language=en-US?api_key=dcd36d10874a8624c1b850c3b8071932&append_to_response=videos,credits'
`, options)
             response = await request.json()
        } catch (error){
            console.error('Error during API call:', error.message);

        }
    return response
}

export const Search= async(target,type)=>{
    var response=""
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2QzNmQxMDg3NGE4NjI0YzFiODUwYzNiODA3MTkzMiIsInN1YiI6IjY1MmJjOWYyMzU4ZGE3MDBhZDM1NTNkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YnvpcawwPceVFyHAPF_cmxgMFlfW3Q4dyTteDfL5Hnc'
        }
    };
    try{
        const request =await fetch(`https://api.themoviedb.org/3/search/${type}?query=${target}&include_adult=false&language=en-US&page=1?api_key=dcd36d10874a8624c1b850c3b8071932&append_to_response=images,credits'
`, options)
        response = await request.json()
    } catch (error){
        console.error('Error during API call:', error.message);

    }
    return response
}
export const video= async()=>{
    var response=""
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2QzNmQxMDg3NGE4NjI0YzFiODUwYzNiODA3MTkzMiIsInN1YiI6IjY1MmJjOWYyMzU4ZGE3MDBhZDM1NTNkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YnvpcawwPceVFyHAPF_cmxgMFlfW3Q4dyTteDfL5Hnc'
        }
    };
    try{
        const request =await fetch(`https://api.themoviedb.org/3/movie/945729?api_key=dcd36d10874a8624c1b850c3b8071932&append_to_response=videos,credits'
`, options)
        response = await request.json()
    } catch (error){
        console.error('Error during API call:', error.message);

    }
    return response
}