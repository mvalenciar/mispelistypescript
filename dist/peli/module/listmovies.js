import Storage from './storage.js';
export default class ListMovies {
    constructor() {
        this.storageMovies = new Storage();
        this.listMovies = this.storageMovies.getMovies();
        this.listMoviesContent = document.querySelector('#movies');
    }
    movieTemplate(movie) {
        if (this.listMoviesContent instanceof HTMLElement) {
            this.listMoviesContent.innerHTML += `<article class="movie" id="movie-${movie.id}">
                    <h3 class="movie__title">${movie.title}</h3>
                    <a href="#">${movie.description}</a>
                    <div class="movie__buttons">
                        <button type="button" data-id="${movie.id}">Editar</button>
                        <button type="button" data-id="${movie.id}">Borrar</button>
                    </div>
                </article>`;
        }
        else {
            alert('Ha ocurrido un error');
        }
    }
    printAllMovies() {
        if (this.listMovies.length >= 1) {
            if (this.listMoviesContent instanceof HTMLElement) {
                this.listMovies.forEach((movie) => {
                    this.movieTemplate(movie);
                });
            }
        }
        else {
            if (this.listMoviesContent instanceof HTMLElement) {
                this.listMoviesContent.innerHTML += `<h1>No hay películas en el storage<h1>`;
            }
        }
    }
}
