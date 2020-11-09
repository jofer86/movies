import 'regenerator-runtime/runtime'
import './src/components/MovieList'
import './src/components/MovieCard'
import movieAggregator from './src/components/MovieList'



// Variables
const submitButton = document.getElementById('submit-btn')
const content = document.getElementById('content')
let searchBy = document.getElementById('inputSearchBy')
let searchParam = document.getElementById('inputSearchBox')


// This function handels de reuqest for a search based on the prefferences set by the user.
async function submitHandler (e) {
    let movies = []
    let movieData = {}
    e.preventDefault()
    const url = `${process.env.OMDB_URL}/?apikey=${ process.env.OMDB_KEY }&type=${ searchBy.value }&s=${ searchParam.value }&p=1`
    const response = await fetch(url)
    let result = await response.json()
    movies = [...movies, ...await result.Search]

    let rounds= Math.floor(result.totalResults / 10)

    // Since the result is paginated and  I was not able to find a way to get all the results I looped as many times as needed to get all teh results and agregate them.
    for(let i = 2; i <= rounds; i++) {
        let url = `${process.env.OMDB_URL}/?apikey=${ process.env.OMDB_KEY }&type=${ searchBy.value }&s=${ searchParam.value }&page=${i}`
        let response = await fetch(url)
        let result = await response.json()
        movies= [...movies, ...result.Search]
    }

    // Sorting for release year

    movies.sort(function(a,b) {
        return parseInt(a.Year) - parseFloat(b.Year)
    })


    movieAggregator(await movies)
}
submitButton.addEventListener('click', submitHandler)