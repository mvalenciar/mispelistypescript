import Add from './module/add.js';

export default class App {
    private addModule: Add;

    constructor() {
        this.addModule = new Add();
    }

    load() {
        //Añadir película
        this.addModule.movieSave();
        //Listar películas
        //Buscar películas

        console.log('La aplicación de películas ha sido inicializada...');
    }
}
