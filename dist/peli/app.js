import Storage from './module/storage.js';
import Add from './module/add.js';
import List from './module/listmovies.js';
export default class APP {
    constructor() {
        this.storageModule = new Storage();
        this.addModule = new Add();
        this.listModule = new List();
    }
    load() {
        //Guardar Películas
        //Listar Películas
        this.listModule.printMovies(this.storageModule.getMovies());
        console.log('Inicio aplicación películas');
    }
}
