import Storage from './storage.js';
import List from './listmovies.js';
export default function searchMovie() {
    //Creando objeto Storage
    let storage_module = new Storage();
    //Creando objeto List
    let list_module = new List();
    //Recuperando películas almacenadas en el storage
    let movies_stored = storage_module.getMovies();
    //Elementos del DOM
    let input_search = document.querySelector('#search');
    let btn_search_movie = document.querySelector('#btnSearch');
    if (btn_search_movie instanceof HTMLButtonElement) {
        btn_search_movie.addEventListener('click', () => {
            if (input_search instanceof HTMLInputElement) {
                let wanted_movie = input_search.value;
                let movie_available = movies_stored.some((movie) => wanted_movie === movie.title);
                if (movie_available) {
                    let found_movie = movies_stored.filter((movie) => movie.title === wanted_movie);
                    list_module.printFoundMovie(found_movie);
                }
                else {
                    alert('No se encuentra la película');
                }
            }
        });
    }
}
