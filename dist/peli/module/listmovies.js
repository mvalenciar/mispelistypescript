import Storage from './storage.js';
export default class List {
    constructor() {
        this.storageModule = new Storage();
        this.movies_stored = this.storageModule.getMovies();
        this.sectionPrintMovies = document.querySelector('#movies');
    }
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
    printMovies(movies) {
        movies = this.movies_stored;
        movies.forEach((movie) => {
            if (this.sectionPrintMovies instanceof HTMLElement) {
                this.sectionPrintMovies.innerHTML += this.movieTemplate(movie);
            }
        });
    }
}
