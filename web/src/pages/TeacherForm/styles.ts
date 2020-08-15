import styled from 'styled-components';

export const Container = styled.div`
  min-width: 100vw;
  height: 100vh;

  @media (min-width: 700px) {
    > header {
      margin-bottom: 0;
    }
  }
`;

export const SearchTeachers = styled.form`
  margin-top: 3.2rem;

  > label {
    color: var(--color-text-in-primary);
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 16px;
    position: absolute;
    bottom: -28px;
  }
`;

export const Form = styled.form`
  background: var(--color-box-base);
  width: 100%¨;
  max-width: 74rem;
  border-radius: 0.4rem;
  margin: -3.2rem auto 3.2rem;
  padding-top: 6.4rem;
  overflow: hidden;

  > label {
    color: var(--color-text-complement);
  }
`;

export const Fieldset = styled.fieldset`
  border: 0;
  padding: 0 2.4rem;

  margin-bottom: 1.6rem;

  & + fieldset {
    margin-top: 6.4rem;
  }

  > legend {
    font: 700 2.4rem Archivo;
    color: var(--color-text-title);
    margin-bottom: 2.4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid var(--color-line-in-white);

    > button {
      background: none;
      border: 0;
      cursor: pointer;
      color: var(--color-primary);
      font: 700 1.6rem Archivo;
      transition: color 0.2s;
      outline: 0;
    }
    > button:hover {
      color: var(--color-primary-dark);
    }
  }

  > &.input-block + .textarea-block {
    margin-top: 2.4rem;
  }

  @media (min-width: 700px) {
    padding: 0 6.4rem;
  }
`;

export const ScheduleItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  column-gap: 1.6rem;
`;

export const Footer = styled.footer`
  padding: 4rem 2.4rem;
  background: var(--color-box-footer);
  border-top: 1px solid var(--color-line-in-white);
  margin-top: 6,4rem;

  > p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--color-text-complement);

    > img {
      margin-right: 2rem;
    }
  }
  > button {
    width: 100%;
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
  }

  @media (min-width: 700px) {
    padding: 0.4rem 6.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > p {
      justify-content: space-between;
    }
    > button {
      width: 20rem;
      margin-top: 0;
    }
  }
`;
