import 'regenerator-runtime/runtime'
import SearchBar from "./src/components/searchBar"
const { searchBarHtml, searchBarLogic, state } = SearchBar

document.getElementById('root').innerHTML = searchBarHtml
searchBarLogic()