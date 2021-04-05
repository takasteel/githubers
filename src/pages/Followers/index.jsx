import { NavBar } from "../../components/NavBar";
import arrowLeftImg from '../../assets/arrow-left.svg'
import { OtherUser } from "../../components/OtherUser";
import { api } from "../../services/api";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useHistory } from "react-router-dom";
import { Container, TopBar } from './styles';

export function Followers() {
  const { isLoading, setIsLoading, followers, followers_url } = useContext(UserContext);
  const [myFollowers, setMyFollowers] = useState([]);
  const history = useHistory();
  const fetchFollowers = async () => {
    setIsLoading(true);
    try {
      const response = await api.get(`${followers_url}`);
      const data = response.data
      setMyFollowers(data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchFollowers();
  }, [])

  const handleBack = () => {
    history.goBack();
  }
  return (
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
              {followers} {followers <= 1 ? ("seguidor") : ("seguidores")}
            </span>
          )}
        </TopBar>
        {myFollowers.map((follower) => {
          return (
            <OtherUser 
              key={follower.id}
              name={follower.login} 
              avatar={follower.avatar_url}
              url={follower.url}
            />
          )
        })}
      </Container>
      <NavBar />
    </>
  );
}