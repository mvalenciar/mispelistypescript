import List from './listmovies.js';
import Storage from './storage.js';
import deleteMovie from './delete.js';
import editMovie from './edit.js';
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
    //Función save para guardar las nuevas películas
    saveMovie() {
        //Se verifica que el elemento sea un botón html
        if (this.btn_save instanceof HTMLButtonElement) {
            this.btn_save.addEventListener('click', () => {
                //Variable que almacenara los datos de la nueva película
                let newMovie;
                //Se verifica que los nodos sean instancias de un input y textarea para tomar sus valores
                if (this.input_movie_title instanceof HTMLInputElement &&
                    this.input_movie_url instanceof HTMLTextAreaElement) {
                    //Los valores tomados son almacenados en la nueva variable
                    newMovie = {
                        id: this.storageModule.setIdMovie(),
                        title: this.input_movie_title.value,
                        url: this.input_movie_url.value,
                    };
                    //Se llama el método encargado de imprimir la nueva pelicula en el DOM
                    this.listModule.printNewMovie(newMovie);
                    deleteMovie();
                    editMovie();
                }
            });
        }
    }
}
