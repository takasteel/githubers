import { Container } from './styles';

import homeImg from '../../assets/home.svg'
import reposImg from '../../assets/repos.svg'
import usersImg from '../../assets/users.svg'
import { NavLink } from 'react-router-dom';


export function NavBar() {
  return(
    <Container>
      <NavLink 
        to="/profile"
        exact
        activeStyle={{
          fontWeight: "bold",
          filter: "opacity(1)"
        }}
      >
        <img src={homeImg} alt=""/>
        <span>Home</span>
      </NavLink>
      <NavLink 
        to="/profile/followers"
        activeStyle={{
          fontWeight: "bold",
          filter: "opacity(1)"
        }}
      >
        <img src={usersImg} alt=""/>
        <span>Seguidores</span>
      </NavLink>
      <NavLink 
        to="/profile/following"
        activeStyle={{
          fontWeight: "bold",
          filter: "opacity(1)"
        }}
      >
        <img src={usersImg} alt=""/>
        <span>Seguindo</span>
      </NavLink>
      <NavLink 
        to="/profile/repos"
        activeStyle={{
          fontWeight: "bold",
          filter: "opacity(1)"
        }}
      >
        <img src={reposImg} alt=""/>
        <span>Repos</span>
      </NavLink>
    </Container>
  );
}