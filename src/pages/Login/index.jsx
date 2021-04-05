import { useContext, useState } from 'react';
import { api } from '../../services/api'
import { Container, Warning, Error } from './styles';

import logo from '../../assets/logo.svg'
import arrowRightImg from '../../assets/arrow-right.svg'
import { UserContext } from '../../context/UserContext';
import { useHistory } from 'react-router-dom';

export function Login() {
  const { setUserData, isLoading, setIsLoading, setIsAuthenticated } = useContext(UserContext);
  const [typedUsername, setTypedUsername] = useState('');
  const [isEmpty, setIsEmpty] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  
  let history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!typedUsername) return setIsEmpty(true);
    setIsLoading(true);
    try {
      const response = await api.get(`/users/${typedUsername}`);
      const data = response.data;
      sessionStorage.setItem('@githuber:userData', JSON.stringify(data));
      setUserData(data);
      sessionStorage.setItem('@githuber:auth', JSON.stringify(true));
      setIsAuthenticated(true);
      setIsLoading(false);
      history.push('/profile');
    } catch (error) {
      setErrorMessage('Usuário não encontrado!');
      setIsLoading(false)
      console.error(error);
    }
  }

  const handleChange = (event) => {
    setTypedUsername(event.target.value);
    setErrorMessage(null);
    setIsEmpty(null);
  }

  return (
    <Container>
      <img src={logo} alt="Github logo"/>
      <form onSubmit={handleSubmit}>
        {errorMessage && <Warning>{errorMessage}</Warning>}
        {isEmpty && <Error>Campo obrigatório</Error>}
        <input 
          type="text" 
          name="username"
          placeholder="Usuário"
          value={typedUsername}
          onChange={handleChange}
          

        />  
        <button type="submit">
          {isLoading ? (
            <>
              Procurando...
            </>
          ) : (
            <>
              ENTRAR <img src={arrowRightImg} alt="Enviar"/>
            </>
          )}
        </button>
      </form>     
    </Container>
  );
}
