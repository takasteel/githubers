import styled from 'styled-components';

export const Container = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  & > div:nth-of-type(2) {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    padding-right: 2rem;
    & > h2 {
      font-size: 2rem;
    }
    & div ~ div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 0.5rem;
      & > img {
        width: 20px;
      }
      & > p {
        font-size: 1.2rem;
      }
    }
  }
`;

export const ProfileImg = styled.div`
  position: relative;
  top: -60px;
  align-self: center;
  width: 120px;
  height: 120px;
  border: 3px solid white;
  border-radius: 50%;
  background-image: url(${props => props.background});
  background-size: contain;
`;

export const UserActivity = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: 
    "followers following repos";
  height: 7rem;
  margin: 3rem 0;
  background: #3b3b3b;
  
  button {
    display: flex;  
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0;

    background: transparent;
    cursor: pointer;
    
    &:hover, :focus{
      & > span {
        color: var(--yellow);
      }
    }
    
    & > span {
      transition: color 0.2s;
    }
    & > span:first-of-type {
      font-size: 3rem;
      font-weight: 700;
    }

    & > span:last-of-type {
      font-size: 1.2rem;
      font-weight: 100;
      margin-bottom: 0.5rem;
    }
  }  
`

export const Bio = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 10rem;
  & > h3 {
    font-size: 2rem; 
  }
  & > p {
    font-size: 1.2rem;
  }
`;
