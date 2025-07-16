import Storage from './module/storage.js';
import Add from './module/add.js';

export default class APP {
    private storageModule: Storage;
    private addModule: Add;

    constructor() {
        this.storageModule = new Storage();
        this.addModule = new Add();
    }

    load(): void {
        //Guardar Películas

        //Listar Películas

        console.log('Inicio aplicación películas');
    }
}
