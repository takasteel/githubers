import { NavBar } from "../../components/NavBar";
import arrowLeftImg from '../../assets/arrow-left.svg'
import { OtherUser } from "../../components/OtherUser";
import { api } from "../../services/api";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useHistory } from "react-router-dom";
import { Container, TopBar } from './styles';

export function Following() {
  const { following, following_url } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [myFollowing, setMyFollowing] = useState([]);
  const history = useHistory();
  const fetchFollowing = async () => {
    setIsLoading(true);
    try {
      const response = await api.get(`${following_url.replace('{/other_user}','')}`);
      const data = response.data
      setMyFollowing(data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchFollowing();
  }, [])

  const handleBack = () => {
    history.goBack();
  }
  return(
    <>
      <Container>
        <TopBar>
          <button onClick={() => handleBack()}>
            <img src={arrowLeftImg} alt="Voltar" />
          </button>
          {isLoading ? (
            <span>
              Carregando...
            </span>
          ) : (
            <span>
              Seguindo {following} {following <= 1 ? ("usuário") : ("usuários")}
            </span>
          )}
        </TopBar>
        {myFollowing.map((user) => {
          return (
            <OtherUser 
              key={user.id}
              name={user.login} 
              avatar={user.avatar_url}
              url={user.url}
            />
          )
        })}
      </Container>
      <NavBar />
    </>
  );
}
