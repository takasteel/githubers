import { useContext } from "react";
import { Route } from "react-router-dom";

import { Redirect } from 'react-router-dom';
import { UserContext } from "../context/UserContext";
export function PrivateRoute({ component: Component, ...rest }) {
  const { isAuthenticated } = useContext(UserContext);
  return(
    <Route {...rest} render={props => (
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/' , state: { from: props.location }}} />
      )
    )}/>
  );
}