export default class Storage {
    private movies: {
        id: number;
        title: string;
        description: string;
    }[];

    private dataStorage: () => string = (): string => {
        return localStorage.getItem('movies') as string;
    };

    constructor() {
        if (this.dataStorage()) {
            this.movies = JSON.parse(this.dataStorage());
        } else {
            this.movies = [];
        }
    }

    setMovies(value: { id: number; title: string; description: string }) {
        this.movies.push(value);
    }

    getMovies(): {
        id: number;
        title: string;
        description: string;
    }[] {
        return this.movies;
    }

    lastId(): number {
        if (this.dataStorage()) {
            return this.movies[this.movies.length - 1].id + 1;
        } else {
            return 1;
        }
    }

    saveStorage(): void {
        const moviesJSON: string = JSON.stringify(this.movies) as string;

        localStorage.setItem('movies', moviesJSON);
    }
}
