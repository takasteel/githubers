import styled from 'styled-components';
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  height: 100vh;

  img {
    width: 8rem;
  }

  form {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 20rem;
    
    input {
      font-size: 1.5rem;
      color: black;
      padding: 1rem 0 1rem 1rem;
      border: none;
      border-radius: 0.7rem;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      background: var(--yellow);

      font-size: 1.5rem;
      font-weight: 700;
      color: black;
      
      padding: 1rem 0;
      border: none;
      border-radius: 0.7rem;

      cursor: pointer;

      &:hover, :focus {

      }

      img {
        max-width: 1.5rem;
      }
    }
  }
`;

export const Warning = styled.span`
    position: absolute;
    width: 100%;
    height: auto;
    color: red;
    top: -1.5rem;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    pointer-events: none;
`;

export const Error = styled.span`
  position: absolute;
  color: red;
  height: 100%;
  top: 1.3rem;
  right: 0.5rem;
  pointer-events: none;
`;