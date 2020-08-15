import styled from 'styled-components';

export const Container = styled.div`
  min-width: 100vw;
  height: 100vh;

  @media (min-width: 700px) {
    max-width: 100%;
  }
`;

export const SearchTeachers = styled.form`
  margin-top: 3.2rem;

  > label {
    color: var(--color-text-in-primary);
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    column-gap: 16px;
    position: absolute;
    bottom: -28px;
  }
`;

export const Button = styled.button`
  width: 97%;
    height: 5.6rem;
    background: var(--color-secondary);
    color: var(--color-button-text);
    border: 0;
    border-radius: 1.6rem;
    cursor: pointer;
    font: 700 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.2s;
    margin-top: 3.2rem;

    &:hover {
      background: var(--color-secondary-dark);
    }

    @media (min-width: 700px) {
      margin-left: 16px;
    }
`;

export const Main = styled.main`
  margin: 3.2rem auto;
  width: 90%;
`;
