import 'regenerator-runtime/runtime'
import SearchBar from "./src/components/searchBar"
const { searchBarHtml, searchBarLogic } = SearchBar

document.getElementById('root').innerHTML = searchBarHtml
searchBarLogic()