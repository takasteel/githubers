import styled from 'styled-components';

export const Container = styled.nav`
  position: fixed;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "home followers following repos";
  bottom: 0;
  width: 100%;
  height: 5rem;
  background: white;
  border-radius: 15px 15px 0 0;

  & > a {
    display: flex;  
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0;
    background: transparent;
    filter: opacity(0.6);
    cursor: pointer;


    & > img {
      width: 28px;
    }

    & > span {
      color: black;
    }
  }
`; 