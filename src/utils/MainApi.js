class MainApi {
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

    signUp(email, password, name) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ email, password, name }),
        }).then((res) => this._checkRequestStatus(res));
    }

    signIn(email, password) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ email, password }),
        })
            .then((res) => this._checkRequestStatus(res))
            .then((res) => {
                if (res.token) {
                    localStorage.setItem('jwt', res.token);
                } else {
                    return false;
                }
            });
    }

    editProfile(name, email) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: { ...this._headers, Authorization: `Bearer ${localStorage.getItem('jwt')}` },
            body: JSON.stringify({
                name,
                email,
            }),
        }).then((res) => this._checkRequestStatus(res));
    }

    verifyToken() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: { ...this._headers, Authorization: `Bearer ${localStorage.getItem('jwt')}` },
        }).then((res) => this._getResponseData(res));
    }

    addMovie({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        movieId,
        nameRU,
        nameEN,
    }) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: { ...this._headers, Authorization: `Bearer ${localStorage.getItem('jwt')}` },
            body: JSON.stringify({
                country,
                director,
                duration,
                year,
                description,
                image,
                trailerLink,
                thumbnail,
                movieId,
                nameRU,
                nameEN,
            }),
        }).then((res) => this._getResponseData(res));
    }
    deleteMovie(movieId) {
        return fetch(`${this._baseUrl}/movies/${movieId}`, {
            method: 'DELETE',
            headers: { ...this._headers, Authorization: `Bearer ${localStorage.getItem('jwt')}` },
        }).then((res) => this._getResponseData(res));
    }
    getSavedMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: { ...this._headers, Authorization: `Bearer ${localStorage.getItem('jwt')}` },
        }).then((res) => {
            return this._checkRequestStatus(res);
        });
    }
}

const mainApi = new MainApi({
    // url моего бэка
    baseUrl: 'http://localhost:3001',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export default mainApi;
