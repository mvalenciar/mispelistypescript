import List from './listmovies.js';
import Storage from './storage.js';
export default class Add {
    constructor() {
        //Instancia List para usar sus funciones
        this.listModule = new List();
        this.storageModule = new Storage();
        //Inicializando variables elementos HTML
        this.input_movie_title = document.querySelector('#movieTitle');
        this.input_movie_url = document.querySelector('#movieDescription');
        this.btn_save = document.querySelector('#btnSave');
    }
    saveMovie() {
        if (this.btn_save instanceof HTMLButtonElement) {
            this.btn_save.addEventListener('click', () => {
                let newMovie;
                if (this.input_movie_title instanceof HTMLInputElement &&
                    this.input_movie_url instanceof HTMLTextAreaElement) {
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
