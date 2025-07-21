//Función para editar propiedades de la película
export default function editMovie() {
    //Se analiza y se extraen los elementos del local storage
    let movies_stored = JSON.parse(localStorage.getItem('movies'));
    //Se recorre cada una de las películas
    movies_stored.forEach((movie, index) => {
        //Se identifican los elementos del Dom con id #movie y #btnEdit
        let movie_printed = document.querySelector('#movie-' + movie.id);
        let btn_edit_movie = document.querySelector('#btnEdit-' + movie.id);
        //Se analiza si btn es una instancia html button
        if (btn_edit_movie instanceof HTMLButtonElement) {
            //Evento click para el botón de edición de las películas
            btn_edit_movie.addEventListener('click', () => {
                //Se almacenan los datos actuales de la película para su posterior edición
                let movie_id = movie.id;
                let movie_title = prompt('Nuevo Titulo', movie.title);
                let movie_url = prompt('Nueva URL', movie.url);
                let movie_update = {
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
