import Storage from './module/storage.js';
import Add from './module/add.js';
export default class APP {
    constructor() {
        this.storageModule = new Storage();
        this.addModule = new Add();
    }
    load() {
        //Guardar Películas
        //Listar Películas
        console.log('Inicio aplicación películas');
    }
}
