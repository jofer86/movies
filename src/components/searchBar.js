const SearchBar = {
    searchBarHtml: `
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-10 brand-banner">Movies</div>
                <div class="col-10 search-content">
                    <form>
                        <div class="form-row form-groups mt-2">
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
        </div>`,
    searchBarLogic: () => {
        const submitButton = document.getElementById('submit-btn')
        async function submitHandler (e) {
            const searchBy = document.getElementById('inputSearchBy').value
            const searchParam = document.getElementById('inputSearchBox').value
            const url = `${process.env.OMDB_URL}/?apikey=${ process.env.OMDB_KEY }&type=${ searchBy }&s=${ searchParam }&p=1-10`
            e.preventDefault()
            const response = await fetch(url)
            const result = await response.json()
            console.log(result)
            const totalPages = Math.floor(result.totalResults / 10)
            const pagination = new Array(totalPages)
        }
        submitButton.addEventListener('click', submitHandler)
    }

}

export default SearchBar