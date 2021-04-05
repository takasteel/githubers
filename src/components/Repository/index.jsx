import { Container } from './styles';
import { TopicMarker} from '../TopicMarker'
import starImg from '../../assets/star.svg';
import lockImg from '../../assets/lock.svg';
import unlockImg from '../../assets/unlock.svg';

export function Repository({name, description, stars, isArchived}) {
  return(
    <Container>
      <TopicMarker />
      <h3>{name}</h3>
      <p>{description}</p>
      <div>
        <img src={starImg} alt="Stars"/>
        <span>{stars}</span>
      </div>
      {isArchived ? (
        <img src={lockImg} alt="Private"/>
      ) : (
        <img src={unlockImg} alt="Public"/>
      )}
    </Container>
  );
}