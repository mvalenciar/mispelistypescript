import { Movie } from './types';
import Storage from './storage.js';

//Función para eliminar película del Dom y el storage
export default function deleteMovie(): void {
    let storageModule: Storage = new Storage();

    //Se usa el evento DOMContentLoaded para que la función se ejecute al cargar los elementos del Dom

    let movies_stored: Movie[] = JSON.parse(
        localStorage.getItem('movies') as string
    );

    movies_stored.forEach((movie) => {
        //Se instancia elementos DOM del form para editar y eliminar películas
        let printed_movie: HTMLElement | null = document.querySelector(
            `#movie-` + movie.id
        );
        let btn_delete_movie: HTMLButtonElement | null = document.querySelector(
            `#btnDelete-` + movie.id
        );

        if (btn_delete_movie instanceof HTMLButtonElement) {
            btn_delete_movie.addEventListener('click', () => {
                //Se agregan películas array de nuevas películas
                let new_movies_stored: Movie[] = movies_stored;
                //Se elimina la película encontrando su index con ayuda del id
                new_movies_stored.splice(movie.id - 1, 1);
                let JSON_new_movies_stored: string =
                    JSON.stringify(new_movies_stored);

                localStorage.setItem('movies', JSON_new_movies_stored);
                if (printed_movie instanceof HTMLElement) {
                    printed_movie.remove();
                }
            });
        }
    });
}
