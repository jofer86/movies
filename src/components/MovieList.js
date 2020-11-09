import buildMovieCard from "./MovieCard";
let movies = {}

const movieAggregator = (movieList) => {
    let content = document.getElementById('content')
    const backBtn = document.getElementById('back-btn')
    const baseTable = `
        <table class="table col-10 mt-4">
          <thead class="heads">
            <tr>
              <th scope="col">Movie</th>
              <th scope="col">Release Year</th>
              <th scope="col">Type</th>
              <th scope="col">Poster</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="table-body">
          
          </tbody>
        </table>         
    `
    content.innerHTML = baseTable


    let tBody = document.getElementById('table-body')
    const rowSetter = (movies) => {
        movies.forEach(movie => {
            movies[movie.imdbID] = {...movie}
            let tr = document.createElement('tr')
            let rowData = `
            <th scope="row"> ${movies[movie.imdbID] .Title} </th>
            <th scope="col"> ${movies[movie.imdbID] .Year} </th>
            <th scope="col"> ${movies[movie.imdbID] .Type} </th>
            <th scope="col"> <img src="${movies[movie.imdbID] .Poster}" alt="movie poster" style="width:2em; height:3em;"> </th>
            <th scope="col"> <button class="btn-search" id="btn-${movies[movie.imdbID] .imdbID}" value="${movies[movie.imdbID].imdbID}">Sinopsis</button> </th>        `
            tr.innerHTML = rowData
            tBody.appendChild(tr)
            document.getElementById(`btn-${movies[movie.imdbID].imdbID}`).addEventListener('click', async () => {
                const movieId = movies[movie.imdbID].imdbID
                await buildMovieCard(movieId)
            })
        })
    }
    rowSetter(movieList)
}

export default movieAggregator
