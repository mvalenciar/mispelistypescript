import Storage from './storage.js';
import deleteMovie from './delete.js';
import editMovie from './edit.js';
export default class List {
    constructor() {
        this.storageModule = new Storage();
        this.movies_stored = this.storageModule.getMovies();
        this.sectionPrintMovies = document.querySelector('#movies');
    }
    //Template estructura html de la card de las películas.
    movieTemplate(movie) {
        return `<article id="movie-${movie.id}" class="movie">
                    <h3 class="movie__title">${movie.title}</h3>
                    <a href="#">${movie.url}</a>
                    <div class="movie__buttons">
                        <button type="button" id="btnEdit-${movie.id}" data-id="${movie.id}">Editar</button>
                        <button type="button" id="btnDelete-${movie.id}" data-id="${movie.id}">Borrar</button>
                    </div>
                </article>`;
    }
    //Método encargado de imprimir todas las películas al cargar la página
    printAllMovies(movies) {
        movies = this.movies_stored;
        movies.forEach((movie) => {
            if (this.sectionPrintMovies instanceof HTMLElement) {
                this.sectionPrintMovies.innerHTML += this.movieTemplate(movie);
                deleteMovie();
                editMovie();
            }
        });
    }
    //Método encargado de imprimir una película nueva.
    printNewMovie(movie) {
        this.storageModule.setMovies(movie);
        if (this.sectionPrintMovies instanceof HTMLElement) {
            this.sectionPrintMovies.innerHTML += this.movieTemplate(movie);
            deleteMovie();
        }
    }
    //Método encargado de imprimir la película buscada
    printFoundMovie(movie_available) {
        if (this.sectionPrintMovies instanceof HTMLElement) {
            movie_available.forEach((movie) => {
                if (this.sectionPrintMovies instanceof HTMLElement) {
                    this.sectionPrintMovies.innerHTML =
                        this.movieTemplate(movie);
                }
            });
        }
    }
}
