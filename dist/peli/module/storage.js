export default class Storage {
    constructor() {
        this.dataStorage = () => {
            return localStorage.getItem('movies');
        };
        if (this.dataStorage()) {
            this.movies = JSON.parse(this.dataStorage());
        }
        else {
            this.movies = [];
        }
    }
    setMovies(value) {
        this.movies.push(value);
    }
    getMovies() {
        return this.movies;
    }
    lastId() {
        if (this.dataStorage()) {
            return this.movies[this.movies.length - 1].id + 1;
        }
        else {
            return 1;
        }
    }
    saveStorage() {
        const moviesJSON = JSON.stringify(this.movies);
        localStorage.setItem('movies', moviesJSON);
    }
}
