import 'regenerator-runtime/runtime'
import SearchBar from "./src/components/searchBar"
const { searchBarHtml, searchBarLogic} = SearchBar

let state = {
    movies: {},
    movieThumb: {}
}
document.getElementById('root').innerHTML = searchBarHtml
searchBarLogic()