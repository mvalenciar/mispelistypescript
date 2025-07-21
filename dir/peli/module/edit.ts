import { Movie } from './types';
import Storage from './storage.js';

//Función para editar propiedades de la película
export default function editMovie(): void {
    //Se analiza y se extraen los elementos del local storage
    let movies_stored = JSON.parse(localStorage.getItem('movies') as string);

    //Se recorre cada una de las películas
    movies_stored.forEach((movie: Movie, index: number) => {
        //Se identifican los elementos del Dom con id #movie y #btnEdit
        let movie_printed: HTMLElement | null = document.querySelector(
            '#movie-' + movie.id
        );
        let btn_edit_movie: HTMLButtonElement | null = document.querySelector(
            '#btnEdit-' + movie.id
        );

        //Se analiza si btn es una instancia html button
        if (btn_edit_movie instanceof HTMLButtonElement) {
            //Evento click para el botón de edición de las películas
            btn_edit_movie.addEventListener('click', () => {
                //Se almacenan los datos actuales de la película para su posterior edición
                let movie_id: number = movie.id;
                let movie_title: string = prompt(
                    'Nuevo Titulo',
                    movie.title
                ) as string;
                let movie_url: string = prompt(
                    'Nueva URL',
                    movie.url
                ) as string;

                let movie_update: Movie = {
                    id: movie_id,
                    title: movie_title,
                    url: movie_url,
                };

                movies_stored.splice(index, 1, movie_update);
                localStorage.setItem('movies', JSON.stringify(movies_stored));
                location.reload();
            });
        }
    });
}
