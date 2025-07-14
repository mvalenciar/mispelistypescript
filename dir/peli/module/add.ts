import Storage from './storage.js';
import { Movie } from './types.js';

export default class Add {
    //Atributos
    private movieTitle: HTMLInputElement | null;
    private movieDescription: HTMLTextAreaElement | null;
    private btnSave: HTMLButtonElement | null;
    private myStorage: Storage = new Storage();
    constructor() {
        //Conseguir elementos del DOM
        this.movieTitle = document.querySelector('#movieTitle');
        this.movieDescription = document.querySelector('#movieDescription');
        this.btnSave = document.querySelector('#btnSave');
    }

    movieSave() {
        if (this.btnSave instanceof HTMLButtonElement) {
            this.btnSave.addEventListener('click', () => {
                if (
                    this.movieTitle instanceof HTMLInputElement &&
                    this.movieDescription instanceof HTMLTextAreaElement
                ) {
                    const title = this.movieTitle.value;
                    const description = this.movieDescription.value;

                    const movie: Movie = {
                        id: this.myStorage.lastId(),
                        title: title,
                        description: description,
                    };

                    this.myStorage.lastId();

                    this.myStorage.setMovies(movie);

                    this.myStorage.saveStorage();

                    alert('Película guardada correctamente');
                }
            });
        }
    }
}
