export default class Add {
    private input_movie_title: HTMLInputElement | null;
    private input_movie_url: HTMLTextAreaElement | null;
    private btn_save: HTMLButtonElement | null;

    constructor() {
        this.input_movie_title = document.querySelector('#movieTitle');
        this.input_movie_url = document.querySelector('#movieDescription');
        this.btn_save = document.querySelector('#btnSave');
    }

    saveMovie() {}
}
