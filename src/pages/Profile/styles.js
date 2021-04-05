import styled from 'styled-components';

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem 1.5rem 0 1rem;
  height: 18vh;
  width: 100%;
  background: var(--black);
  & > span {
    font-size: 1.2rem;
    font-weight: 500;
  }
  & > a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.2rem;
    font-weight: 100;
    & > img {
      width: 1.6rem;
    }
  }
`;