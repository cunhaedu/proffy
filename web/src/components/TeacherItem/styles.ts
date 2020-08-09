import styled from 'styled-components';

export const Container = styled.article`
  background: var(--color-box-base);
  border: 1px solid var(--color-line-in-white);
  border-radius: 0.8rem;
  margin-top: 2.4rem;
  overflow: hidden;

  > p {
    padding: 0 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;
  }

  @media (min-width: 700px) {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;

    > p {
      padding: 0 3.2rem;
    }
  }
`;

export const Header = styled.header`
  padding: 3.2rem 2rem;
  display: flex;
  align-items: center;

  > img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }

  > div {
    margin-left: 2.4rem;

    > strong {
      font-weight: 700;
      font-size: 2.4rem;
      font-family: Archivo;
      display: block;
      color: var(--color-text-title);
    }

    > strong {
      font-size: 1.6rem;
      display: block;
      margin-top: 0.4rem;

    }
  }

  @media (min-width: 700px) {
    padding: 3.2rem;
  }
`;

export const Footer = styled.footer`
  padding: 3.2rem 2rem;
  background: var(--color-box-footer);
  border-top: 1px solid var(--color-line-in-white);
  margin-top: 3.2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > p strong {
    color: var(--color-primary);
    font-size: 1.6rem;
    display: block;
  }

  @media (min-width: 700px) {
    padding: 3.2rem;

    > p strong {
      display: initial;
      margin-left: 1.6rem;

    }
  }
`;

export const Button = styled.a`
  width: 20rem;
  height: 5.6rem;
  text-decoration: none;
  background: var(--color-secondary);
  color: var(--color-button-text);
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  font: 700 1.4rem Archivo;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: 0.2s;

  &:hover {
    background: var(--color-secondary-dark);
  }

  @media (min-width: 700px) {
    width: 24.5rem;
    font-size: 1.6rem;
    justify-content: center;

    > img {
      margin-right: 1.6rem;
    }
  }
`;
