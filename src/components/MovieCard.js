let movies = {}
const content = document.getElementById('content')
const buildMovieCard = async (id) => {
    const url = `${process.env.OMDB_URL}/?apikey=${ process.env.OMDB_KEY }&i=${ id }`
    let movie;
    if(!movies[id]){
        const response = await fetch(url)
        let result = await response.json()
        movie = await result
        movies = {...movies, movie}
    }else {
        movie = movies[id]
    }
    let movieCard = `
        <div class="card mb-3 mt-4 col-10" style="max-width: 540px;">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="${movie.Poster}" class="card-img" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <p class="card-text">${movie.Plot}</p>
                <p class="card-text"><small class="text-muted">Release year: ${movie.Year}</small></p>    
              </div>
            </div>
          </div>
        </div>
    `
    content.innerHTML = ''
    content.innerHTML = movieCard
}

export default buildMovieCard