import { Route } from "react-router-dom";
import ErrorNotFound from '../ErrorNotFound/ErrorNotFound';

export default function ProtectedRoute ({ component: Component, ...props }) {
  return (
    <Route>
      {
        () => props.loggedIn ? <Component {...props} /> : <ErrorNotFound loggedIn={props.loggedIn} />
      }
    </Route>
  );
};

