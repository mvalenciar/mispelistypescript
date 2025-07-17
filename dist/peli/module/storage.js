export default class Storage {
    constructor() {
        //Inicializando variables
        if (localStorage.getItem('movies') != null) {
            this.movies = JSON.parse(localStorage.getItem('movies'));
        }
        else {
            this.movies = [];
        }
        //console.log(this.movies);
    }
    //Guardar películas en el storage
    addStorage(movies) {
        //Convirtiendo datos en formato JSON
        let json_movies = JSON.stringify(movies);
        //Almacenando información al storage
        localStorage.setItem('movies', json_movies);
    }
    //Agregar películas al array movies
    setMovies(movie) {
        //Agregando nueva información al array movies
        this.movies.push(movie);
        //Actualizando el local storage
        this.addStorage(this.movies);
    }
    getMovies() {
        return this.movies;
    }
    setIdMovie() {
        let movies_stored = JSON.parse(localStorage.getItem('movies'));
        if (movies_stored != null) {
            let index_movies_stored = movies_stored.length - 1;
            return movies_stored[index_movies_stored].id + 1;
        }
        else {
            return 1;
        }
    }
}
