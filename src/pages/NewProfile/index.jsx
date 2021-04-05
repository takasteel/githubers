import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { NewProfileInfo } from "../../components/NewProfileInfo";
import { NavBar } from "../../components/NavBar";

import { TopBar } from "./styles";

import arrowLeftImg from '../../assets/arrow-left.svg';
import loginImg from '../../assets/login.svg';

export function NewProfile() {
  const { newUserData, handleSaveProfile } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
    
  const handleBack = () => {
    history.goBack();
  }
  
  return(
    <>
    <section>
      <TopBar>
        <div>
          <button onClick={() => handleBack()}>
            <img src={arrowLeftImg} alt="Voltar" />
          </button>
          <span>#{newUserData.login}</span>
          <Link 
            onClick={() => handleSaveProfile()}
            to='/profile'
          >
            Salvar 
            <img src={loginImg} alt="Sair"/>
          </Link>
        </div>
      </TopBar>
      <NewProfileInfo />
    </section>
    <NavBar />
    </>
  );
}

