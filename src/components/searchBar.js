import MovieCard from './MovieCard'
let { movieMarkup, movieLogic } = MovieCard
const SearchBar = {
    state: {
         movies: {},
        movieThumb: {}
    },
    searchBarHtml: `
        <div class="container">            
            <div class="row justify-content-center">
                <div class="col-10 brand-banner">Movies</div>
                <div class="col-10 search-content">
                    <form class="col-12">
                        <div class="form-row form-groups col-12 mt-2">
                            <div class="form-group col-md-4">
                                <label for="inputSearchBy">Search By: </label>
                                <select id="inputSearchBy" class="form-control">
                                    <option value="">Choose...</option>
                                    <option value="movie">Movie</option>
                                    <option value="series">Series</option>
                                    <option value="episode">Episode</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputSearchBox">Search Box</label>
                                <input type="text" class="form-control" id="inputSearchBox">
                            </div>
                            <button type="submit" class="btn-search" id="submit-btn"> Search </button>
                        </div>
                    </form>
                </div>
            </div>
            <div id="content" class="row justify-content-center">
                
            </div>
        </div>`,
    searchBarLogic: () => {
        const submitButton = document.getElementById('submit-btn')
        const content = document.getElementById('content')
        async function submitHandler (e) {
            e.preventDefault()
            document.getElementById('content').innerHTML = movieMarkup
            const searchBy = document.getElementById('inputSearchBy').value
            const searchParam = document.getElementById('inputSearchBox').value
            const url = `${process.env.OMDB_URL}/?apikey=${ process.env.OMDB_KEY }&type=${ searchBy }&s=${ searchParam }`
            const response = await fetch(url)
            let result = await response.json()

            result = result.Search
            let impostor_state = { ...SearchBar.state }

            result.forEach(movie => {
                impostor_state.movies[movie.imdbID] = {
                    Title: movie.Title,
                    Year: movie.Year,
                    imdbID: movie.imdbID,
                    Type: movie.Type,
                    Poster: movie.Poster
                }
                impostor_state.movieThumb[movie.imdbID] = {
                    Title: movie.Title,
                    Year: movie.Year,
                    imdbID: movie.imdbID,
                    Type: movie.Type,
                    Poster: movie.Poster
                }
            })
        }
        submitButton.addEventListener('click', submitHandler)
    }


}

export default SearchBar

