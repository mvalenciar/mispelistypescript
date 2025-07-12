import Storage from './storage.js';
export default class Add {
    constructor() {
        this.movieId = 0;
        this.myStorage = new Storage();
        //Conseguir elementos del DOM
        this.movieTitle = document.querySelector('#movieTitle');
        this.movieDescription = document.querySelector('#movieDescription');
        this.btnSave = document.querySelector('#btnSave');
    }
    movieSave() {
        if (this.btnSave instanceof HTMLButtonElement) {
            this.btnSave.addEventListener('click', () => {
                if (this.movieTitle instanceof HTMLInputElement &&
                    this.movieDescription instanceof HTMLTextAreaElement) {
                    const title = this.movieTitle.value;
                    const description = this.movieDescription.value;
                    const movie = {
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
