import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { ProfileInfo } from "../../components/ProfileInfo";
import { NavBar } from "../../components/NavBar";

import { TopBar } from "./styles";

import logoutImg from '../../assets/logout.svg'

export function Profile() {
  const { login, setNewUserData } = useContext(UserContext);

  const handleExit = () => {
    setNewUserData(false);
    sessionStorage.setItem('@githuber:auth', JSON.stringify(false));
  }

  return(
    <>
    <section>
      <TopBar>
        <span>#{login}</span>
        <Link 
          onClick={() => handleExit()}
          to='/'
        >
          Sair 
          <img src={logoutImg} alt="Sair"/>
        </Link>
      </TopBar>
      <ProfileInfo />
    </section>
    <NavBar />
    </>
  );
}

