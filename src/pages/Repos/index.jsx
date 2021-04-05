import { api } from '../../services/api';
import { NavBar } from '../../components/NavBar';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { useHistory } from 'react-router-dom';
import { Repository } from '../../components/Repository';

import { TopBar, Container } from './styles';

import arrowLeftImg from '../../assets/arrow-left.svg'

export function Repos() {
  const { repos_url, public_repos } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [myRepositories, setMyRepositories] = useState([]);
  const history = useHistory();
  const fetchRepos = async () => {
    setIsLoading(true);
    try {
      const response = await api.get(`${repos_url}`);
      const data = response.data
      setMyRepositories(data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchRepos();
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
              {public_repos} repositórios
            </span>
          )}
        </TopBar>
        {myRepositories.map((repo) => {
          return (
            <Repository 
              key={repo.id}
              name={repo.name} 
              description={repo.description}
              stars={repo.stargazers_count}
              isArchived={repo.archived}
            />
          )
        })}
      </Container>
      <NavBar />
    </>
  );
}