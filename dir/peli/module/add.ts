import { Movie } from './types.js';
import List from './listmovies.js';
import Storage from './storage.js';

export default class Add {
    //Nodos HTML formulario guardar películas
    private input_movie_title: HTMLInputElement | null;
    private input_movie_url: HTMLTextAreaElement | null;
    private btn_save: HTMLButtonElement | null;

    //Instancia List para usar sus funciones
    private listModule = new List();
    private storageModule = new Storage();

    constructor() {
        //Inicializando variables elementos HTML
        this.input_movie_title = document.querySelector('#movieTitle');
        this.input_movie_url = document.querySelector('#movieDescription');
        this.btn_save = document.querySelector('#btnSave');
    }

    saveMovie(): void {
        if (this.btn_save instanceof HTMLButtonElement) {
            this.btn_save.addEventListener('click', () => {
                let newMovie: Movie;

                if (
                    this.input_movie_title instanceof HTMLInputElement &&
                    this.input_movie_url instanceof HTMLTextAreaElement
                ) {
                    newMovie = {
                        id: this.storageModule.setIdMovie(),
                        title: this.input_movie_title.value,
                        url: this.input_movie_url.value,
                    };

                    this.listModule.printNewMovie(newMovie);
                }
            });
        }
    }
}
