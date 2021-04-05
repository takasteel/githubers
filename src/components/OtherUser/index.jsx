import { TopicMarker } from '../TopicMarker';
import { Container, ProfileImg } from './styles';

import whiteArrowRightImg from '../../assets/white-arrow-right.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { api } from '../../services/api';
import { UserContext } from '../../context/UserContext';

export function OtherUser({name, avatar, url}) {
  const { setNewUserData } = useContext(UserContext);
  const fetchNewProfile = async () => {
    try {
      const response = await api.get(url)
      const data = response.data;
      sessionStorage.setItem('@githuber:newUserData', JSON.stringify(data));
      setNewUserData(data);
    } catch (error) {
      console.error(error);
    }
  }

  return(
    <Container>
      <Link
        onClick={() => fetchNewProfile()}
        to="/newprofile"
      >
        <TopicMarker/>
        <ProfileImg background={avatar}/>
        <h3>#{name}</h3>
        <img src={whiteArrowRightImg} alt="Avançar" />
    </Link>
    </Container>
  );
}
