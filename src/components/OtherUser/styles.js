import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-top: 3rem;
  padding: 0 2rem 2rem 1rem;
  border-bottom: 1px solid #3b3b3b;
  & > a {
    display: flex;
    align-items: center;
    gap: 2rem;
    & > img {
      position: absolute;
      right: 0;
      margin-right: 2rem;
      width: 20px;
    }
  }
`;

export const ProfileImg = styled.div`
  margin-left: 1rem;
  border-radius: 50%;
  border: 3px solid white;
  width: 64px;
  height: 64px;
  background-image: url(${props => props.background});
  background-size: contain;
`;