import Storage from './module/storage.js';
import Add from './module/add.js';
import List from './module/listmovies.js';
import searchMovie from './module/search.js';
export default class APP {
    constructor() {
        this.storageModule = new Storage();
        this.addModule = new Add();
        this.listModule = new List();
    }
    load() {
        //Guardar Películas
        this.addModule.saveMovie();
        //Listar Películas y eliminar películas
        this.listModule.printAllMovies(this.storageModule.getMovies());
        console.log('Inicio aplicación películas');
        //Buscar película
        searchMovie();
    }
}
