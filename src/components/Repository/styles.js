import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  margin-top: 4rem;
  padding: 0 2rem 2rem 2rem;
  border-bottom: 1px solid #3b3b3b;
  height: 100%;
  & > h3 {
    font-size: 1.5rem;
  }
  & > p {
    font-weight: 100;
    margin-bottom: 0.5rem;
  }
  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem
  }
  & > img:last-of-type{
    position: absolute;
    right: 0;
    bottom: 2rem;
    margin-right: 2rem;
  }
  img {
    width: 20px;
  }
`;
