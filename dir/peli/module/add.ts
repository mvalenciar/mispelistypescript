import { Movie } from './types.js';

export default class Add {
    //Nodos HTML formulario guardar películas
    private input_movie_title: HTMLInputElement | null;
    private input_movie_url: HTMLTextAreaElement | null;
    private btn_save: HTMLButtonElement | null;

    //Datos nueva película
    private newMovie: Movie;
    private movieId: number;
    private movieTitle: string;
    private movieUrl: string;

    constructor() {
        //Inicializando variables elementos HTML
        this.input_movie_title = document.querySelector(
            '#movieTitle'
        ) as HTMLInputElement;
        this.input_movie_url = document.querySelector('#movieDescription');
        this.btn_save = document.querySelector('#btnSave');
    }

    saveMovie() {}
}
