import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { Container, ProfileImg, UserActivity, Bio } from './styles';
import { TopicMarker } from '../TopicMarker';

import locationImg from '../../assets/map-pin.svg'
import companyImg from '../../assets/briefcase.svg'
import mailImg from '../../assets/mail.svg'

export function NewProfileInfo() {
  const { newUserData } = useContext(UserContext);
  const {
    avatar_url,
    name,
    email,
    location,
    followers,
    following,
    public_repos,
    company,
    bio,
  } = newUserData;
  
  let history = useHistory();

  const handleRedirect = (path) => {
    history.push(path);
  }

  return(
    <Container>
      <ProfileImg background={avatar_url}/>
      <div>
        <TopicMarker />
        <h2>{name}</h2>
        {email && 
          <div>
            <img src={mailImg} alt="Email"/>
            <p>{email}</p>
          </div>
        }
        {location && 
          <div>
            <img src={locationImg} alt="localização"/>
            <p>{location}</p>
          </div>
        }
        {company && 
          <div>
            <img src={companyImg} alt="Empresa"/>
            <p>{company}</p>
          </div>
        }
      </div>
      <UserActivity>
        <button onClick={() => handleRedirect('/profile/followers')}>
          <span>{followers}</span>
          <span>Seguidores</span>
        </button>
        <button 
          onClick={() => handleRedirect('/profile/following')
        }>
          <span>{following}</span>
          <span>Seguindo</span>
        </button>
        <button 
          onClick={() => handleRedirect('/profile/repos')
        }>
          <span>{public_repos}</span>
          <span>Repos</span>
        </button>
      </UserActivity>
      <Bio>
        <TopicMarker />
        <h3>Bio</h3>
        <p>{bio}</p>
      </Bio>
    </Container>
  );
}