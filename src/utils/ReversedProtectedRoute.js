import { Route, Redirect } from 'react-router-dom';

function ReversedProtectedRoute({ ...props }) {
    return <Route>{() => (props.loggedIn ? <Redirect to='/movies' /> : props.children)}</Route>;
}
export default ReversedProtectedRoute;
