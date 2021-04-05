import styled from 'styled-components';

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-right: 1.5rem;
  height: 18vh;
  width: 100%;
  background: var(--black);
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 8vh;

    & > button {
      z-index: 1;
      margin-left: 1rem;
      border: 0;
      background: transparent;
      & > img {
        width: 1.6rem;
      }
    }
    & > span {
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      text-align: center;
      font-size: 1.2rem;
      font-weight: 500;
    }
    & > a {
      z-index: 1;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.2rem;
      font-weight: 100;
      & > img {
        width: 1.6rem;
      }
    }
  }
  @media screen and (min-width: 720px){
    padding-right: 2rem;
    & > span {
      font-size: 2rem;
      font-weight: 500;
    }
    & > a {
      gap: 1rem;
      font-size: 2rem;
      font-weight: 100;

      & > img {
        width: 2.5rem;
      }
    }
  }
  @media screen and (min-width: 1080px){
    padding-right: 3rem;
    & > span {
      font-size: 2rem;
      font-weight: 500;
    }
    & > a {
      gap: 1rem;
      font-size: 2rem;
      font-weight: 100;

      & > img {
        width: 2.5rem;
      }
    }
  }
`;