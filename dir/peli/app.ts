import Add from './module/add.js';
import ListMovies from './module/listmovies.js';

export default class App {
    private addModule: Add;
    private listModule: ListMovies;

    constructor() {
        this.addModule = new Add();
        this.listModule = new ListMovies();
    }

    load() {
        //Añadir película
        this.addModule.movieSave();

        //Listar películas
        this.listModule.printAllMovies();

        //Buscar películas

        console.log('La aplicación de películas ha sido inicializada...');
    }
}
