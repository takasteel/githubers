import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Profile } from '../pages/Profile';
import { Followers } from '../pages/Followers';
import { Repos } from '../pages/Repos';
import { Following } from '../pages/Following';
import { NewProfile } from '../pages/NewProfile';
import { PrivateRoute } from './PrivateRoute';
export function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/profile/followers" component={Followers} />
        <PrivateRoute exact path="/profile/following" component={Following} />
        <PrivateRoute exact path="/profile/repos" component={Repos} />
        <PrivateRoute path="/newprofile" component={NewProfile} />
      </Switch>
    </Router>
  );
  
}