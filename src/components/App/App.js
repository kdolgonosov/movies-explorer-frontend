import { useState, useEffect } from 'react';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ProtectedRoute from '../../utils/ProtectedRoute';
import ReversedProtectedRoute from '../../utils/ReversedProtectedRoute';
import mainApi from '../../utils/MainApi';
import { Switch, Route, useHistory } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import { CurrentUserContext } from '../../utils/CurrentUserContext';

const App = () => {
    document.documentElement.lang = 'ru';
    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(true);
    const [loginError, setLoginError] = useState(false);
    const history = useHistory();
    const handleLogin = (e, email, password) => {
        e.preventDefault();
        mainApi
            .signIn(email, password)
            .then((res) => {
                if (res === undefined) {
                    setLoggedIn(true);
                    history.push('/movies');
                }
                setLoginError(true);
            })
            .catch((err) => setLoginError(true));
    };
    const handleSignOut = () => {
        setLoginError(false);
        setLoggedIn(false);
        localStorage.removeItem('jwt');
        localStorage.removeItem('filteredMovies');
        history.push('/');
    };
    const handleUpdateUser = (name, email) => {
        mainApi.editProfile(name, email).then((user) =>
            setCurrentUser({
                name: user.name,
                email: user.email,
            }),
        );
    };
    useEffect(() => {
        mainApi
            .verifyToken()
            .then((user) => {
                setLoggedIn(true);
                setCurrentUser(user);
            })
            .catch((err) => {
                setLoggedIn(false);
                history.push('/');
            });
    }, [loggedIn]);
    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className='page'>
                <Switch>
                    <Route exact path='/'>
                        <Main loggedIn={loggedIn} />
                    </Route>
                    <ProtectedRoute path='/movies' loggedIn={loggedIn}>
                        <Movies />
                    </ProtectedRoute>
                    <ProtectedRoute path='/saved-movies' loggedIn={loggedIn}>
                        <SavedMovies />
                    </ProtectedRoute>
                    <ProtectedRoute path='/profile' loggedIn={loggedIn}>
                        <Profile onUpdateUser={handleUpdateUser} onSignOut={handleSignOut} />
                    </ProtectedRoute>
                    <ReversedProtectedRoute path='/signup' loggedIn={loggedIn}>
                        <Register onLogin={handleLogin} />
                    </ReversedProtectedRoute>
                    <ReversedProtectedRoute path='/signin' loggedIn={loggedIn}>
                        <Login loginError={loginError} onLogin={handleLogin} />
                    </ReversedProtectedRoute>
                    <Route exact path='*'>
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        </CurrentUserContext.Provider>
    );
};

export default App;
