class MoviesApi {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }
    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }
    _checkRequestStatus(res) {
        if (!res.ok) {
            Promise.reject(`Ошибка: ${res.status}`);
            return false;
        } else {
            return res.json();
        }
    }
    getMovies() {
        return fetch(`${this._baseUrl}`, {
            method: 'GET',
            headers: this._headers,
        }).then((res) => {
            return this._checkRequestStatus(res);
        });
        // .then((res) => {
        //     localStorage.setItem('movies', JSON.stringify(res));
        // });
    }
}

const moviesApi = new MoviesApi({
    // url моего бэка
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json',
    },
});
export default moviesApi;
