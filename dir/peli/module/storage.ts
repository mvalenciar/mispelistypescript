import { Movie } from './types';

export default class Storage {
    //Variable que almacenara los datos de las películas
    private movies: Movie[];

    constructor() {
        //Inicializando variables
        if (localStorage.getItem('movies') != null) {
            this.movies = JSON.parse(localStorage.getItem('movies') as string);
        } else {
            this.movies = [];
        }
        //console.log(this.movies);
    }

    //Guardar películas en el storage
    addStorage(movies: Movie[]): void {
        //Convirtiendo datos en formato JSON
        let json_movies: string = JSON.stringify(movies);

        //Almacenando información al storage
        localStorage.setItem('movies', json_movies);
    }

    //Agregar películas al array movies
    setMovies(movie: Movie): void {
        //Agregando nueva información al array movies
        this.movies.push(movie);
        //Actualizando el local storage
        this.addStorage(this.movies);
    }

    getMovies(): Movie[] {
        return this.movies;
    }

    setIdMovie(): number {
        let movies_stored: Movie[] = JSON.parse(
            localStorage.getItem('movies') as string
        );

        //console.log(movies_stored);

        if (movies_stored === null || movies_stored.length === 0) {
            return 1;
        } else {
            let index_movies_stored = movies_stored.length - 1;
            return movies_stored[index_movies_stored].id + 1;
        }
    }
}
