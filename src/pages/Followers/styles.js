import styled from 'styled-components';

export const Container = styled.section`
  margin-bottom: 10rem;
`;

export const TopBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 8vh;
  background: var(--black);

  & > button {
      position: absolute;
      left: 0;
      margin-left: 1rem;
      border: 0;
      background: transparent;
      cursor: pointer;
    & > img {
      
      width: 1.6rem;
    }

  }

  & > span {
    align-self: center;
    font-size: 1.2rem;
    font-weight: 700;
  }
`;
